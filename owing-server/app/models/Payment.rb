class Payment < ActiveRecord::Base
    has_many :users
    has_many :debts, through: :users

    belongs_to :credit
    belongs_to :user
end