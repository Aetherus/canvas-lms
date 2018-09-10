require 'pathname'
require 'json'
require 'logger'
require 'streamio-ffmpeg'

class VideoConverter
  include Hutch::Consumer
  consume 'conversion.video'

  def process(message)
    attachment_id = message[:attachment_id]
    logger.info "Start processing video attachment #{attachment_id}"
    attachment = Attachment.find(attachment_id)
    if attachment.workflow_state == 'processing' and attachment.extension != '.mp4'
      original_path = attachment.full_filename
      logger.info "Original video path: #{original_path}"
      dirname = File.dirname(original_path)
      basename = File.basename(original_path, attachment.extension)
      target_path = Pathname.new(dirname).join("#{basename}.mp4").to_s
      original = FFMPEG::Movie.new(original_path)
      original.transcode(target_path, %w[-f mp4 -strict -2]) do |progress|
        puts progress
      end
    end
    attachment.update(workflow_state: 'processed') if attachment.workflow_state == 'processing'
    logger.info "Finished processing video attachment #{attachment_id}"
  end
end
