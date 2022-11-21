class User < ActiveRecord::Base
    belongs_to :debt
    belongs_to :payment
end
