require 'contracts'

class GenerateZipExport
  include Contracts::Core

  Contract And[ActiveRecord::Base, Send[:persisted?]] => nil
  def self.call(user)
    export
  end
end
