require 'pry'
class User < ActiveRecord::Base
    has_many :payments
    has_many :balances
end
