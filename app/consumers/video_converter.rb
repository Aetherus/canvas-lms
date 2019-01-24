require 'pathname'
require 'json'
require 'logger'
require 'streamio-ffmpeg'

class VideoConverter
  include Hutch::Consumer
  consume 'conversion.video'
  arguments 'x-dead-letter-exchange' => 'hutch',
            'x-dead-letter-routing-key' => 'conversion.failover.video'

  def process(message)
    #byebug
    attachment_id = message[:attachment_id]
    logger.info "Start processing video attachment #{attachment_id}"
    attachment = Attachment.find(attachment_id)
    if attachment.workflow_state == 'processing'
      #byebug
      original_path = attachment.full_filename
      logger.info "Original video path: #{original_path}"
      dirname = File.dirname(original_path)
      basename = File.basename(original_path, attachment.extension)
      poster_path = Pathname.new(dirname).join("#{basename}.jpg").to_s
      target_path = Pathname.new(dirname).join("#{basename}.mp4").to_s
      original = FFMPEG::Movie.new(original_path)
      original.screenshot(poster_path, seek_time: original.duration / 3)
      original.transcode(target_path, %w[-f mp4 -strict -2]) do |progress|
        # puts progress
      end unless attachment.extension == '.mp4'
      #byebug
    end
    attachment.update!(workflow_state: 'processed')
    logger.info "Finished processing video attachment #{attachment_id}"
  rescue
    attachment.mark_errored!
  end
end
