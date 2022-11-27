class Balance < ActiveRecord::Base
    belongs_to :user

    def self.update_user_paid(id:, amount:)
        the_balance = Balance.find_by(user_id: id)
        the_balance.update(
            debit: amount
        )
        self
    end
end