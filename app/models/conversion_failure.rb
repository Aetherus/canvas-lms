class ConversionFailure < ApplicationRecord
  belongs_to :attachment

  scope :unhandled, -> { where(handled: false) }
end
