require 'rails_helper'

RSpec.describe User, type: :model do
  user_new = User.new(email: "bob@bob.com", password: "888888")
  no_email = User.new(password: "888888")
  no_password = User.new(email: "bob@bob.com")

  it "Is valid with attributes" do
    expect(user_new).to be_valid
  end

  it "Is not valid without an email" do
    expect(no_email).to_not be_valid
  end

  it "Is not valid without a password" do
    expect(no_password).to_not be_valid
  end

end
