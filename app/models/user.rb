class User < ApplicationRecord
  has_many :user_interests
  has_many :interests, through: :user_interests

  accepts_nested_attributes_for :interests, allow_destroy: true

end
