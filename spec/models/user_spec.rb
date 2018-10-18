require 'rails_helper'

RSpec.describe User, type: :model do
  describe "#admin?" do
    it "is not an admin if the role is not admin" do
      user = FactoryBot.create(:user, role: "member")
      expect(user.admin?).to eq(false)
    end

    it "is an admin if the role is admin" do
      user = FactoryBot.create(:user, role: "admin")
      expect(user.admin?).to eq(true)
    end
  end

  describe "valid user" do
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
end
