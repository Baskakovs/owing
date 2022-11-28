class Balance < ActiveRecord::Base
    belongs_to :user

    @@count = self.count

    def balance
        puts self[:debit]-self[:credit]
    end

    def self.update_balance(id:, amount:)
        amount_divided = (amount.to_f/@@count.to_f).round(2)
        self.update_user_paid(id: id, amount: amount_divided)
        self.update_user_not_paid(id: id, amount: amount_divided)
    end

    private

    def self.update_user_paid(id:, amount:)
        balance = Balance.find_by(user_id: id)
        new_credit = balance[:debit] + amount.round(2)
        balance.update(debit: new_credit)
    end

    def self.update_user_not_paid(id:, amount:)
        users_not_paid = Balance.where.not(user_id: id)
        users_not_paid.map do |t|
            new_debit = t[:credit] + amount.round(2)
            t.update(credit: new_debit)
        end
    end
end