class GenerateZipExport
  def self.call(user)
    ensure_can_export

    generate
  end

  private

  def ensure_can_export
    fail CannotGenerateError, "not saved yet" unless user.persisted?
  end

  class CannotGenerateError < StandardError; end
end
