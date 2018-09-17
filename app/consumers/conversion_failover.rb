class ConversionFailover
  include Hutch::Consumer
  consume 'conversion.failover.*'

  def process(message)
    ActiveRecord::Base.transaction do
      attachment = Attachment.find(message[:attachment_id])
      attachment.mark_errored!
      ConversionFailure.create!(attachment_id: message[:attachment_id], conversion_type: message.routing_key.split('.')[-1])
    end
  end
end