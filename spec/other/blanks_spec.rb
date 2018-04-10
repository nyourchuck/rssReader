require 'rails_helper'

RSpec.describe "blank base classes" do

  it "triggers code coverage when nothing extends the base class" do
    expect(ApplicationCable::Channel).to be
    expect(ApplicationCable::Connection).to be
    expect(ApplicationMailer).to be
    expect(ApplicationJob).to be
  end
end
