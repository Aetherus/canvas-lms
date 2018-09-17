module Admin
  class ConversionFailuresController < ActionController::Base
    
    def index
      render json: ConversionFailure.unhandled.eager_load(:attachment).as_json(include: [:attachment])
    end

    def retry_all
      ConversionFailure.unhandled.eager_load(:attachment).find_each do |failure|
        failure.transaction do
          failure.attachment.update!(workflow_state: 'processing')
          failure.update!(handled: true)
        end
        failure.attachment.queue_file_postprocess
      end
      head :no_content
    end

    def retry_one
      failure = ConversionFailure.unhandled.find(params[:id])
      failure.transaction do
        attachment = failure.attachment
        attachment.update!(workflow_state: 'processing')
        failure.update!(handled: true)
      end
      failure.attachment.queue_file_postprocess
      head :no_content
    end
  end
end