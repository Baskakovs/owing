class Balance < ActiveRecord::Base
    belongs_to :user

    @@count = self.count

    def self.update_user_paid(id:, amount:)
        new_balance = amount.to_f/@@count.to_f
        the_balance = Balance.find_by(user_id: id)
        the_balance.update(
            debit: new_balance
        )
    end

    # def self.update_user_paid(id:, amount:)
    #     the_balance = Balance.find_by(user_id: id)
    #     the_balance.update(
    #         debit: amount
    #     )
    #     self
    # end
end