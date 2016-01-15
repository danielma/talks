require 'contracts'
require 'date'

class DateRange < Range
  include Contracts::Core

  Contract Date, Date, Contracts::Bool => nil
  def initialize(range_begin, range_end, exclude_end = false)
    super
  end
end
