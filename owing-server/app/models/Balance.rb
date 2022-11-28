class Balance < ActiveRecord::Base
    belongs_to :user

    @@count = self.count

    def self.update_balance(id:, amount:)
        amount_divided = (amount.to_f/@@count.to_f)
        self.update_user_paid(id: id, amount: amount_divided)
        self.update_user_not_paid(id: id, amount: amount_divided)
    end

    def self.edit(payment:,new_amount:, user_id:)
        self.edit_balance_paid(payment: payment,new_amount: new_amount, 
        user_id:user_id)
        self.edit_balance_not_paid(payment: payment,new_amount: new_amount, 
        user_id:user_id)
    end

    private

    def self.update_user_paid(id:, amount:)
        balance = Balance.find_by(user_id: id)
        new_credit = balance[:debit] + amount
        balance.update(debit: new_credit.round(2))
    end

    def self.update_user_not_paid(id:, amount:)
        users_not_paid = Balance.where.not(user_id: id)
        users_not_paid.map do |t|
            new_debit = t[:credit] + amount
            t.update(credit: new_debit.round(2))
        end
    end

    def self.edit_balance_paid(payment:, new_amount:, user_id:)
        balance = Balance.find_by(user_id: user_id)
        if payment[:amount].to_f < new_amount.to_f
            new_debit = balance[:debit] + (new_amount.to_f/@@count - 
            balance[:debit])
            balance.update(debit: new_debit.round(2))
        elsif payment[:amount].to_f > new_amount.to_f
            new_debit = balance[:debit] - (balance[:debit] -            
            new_amount.to_f/@@count)
            balance.update(debit: new_debit.round(2))
       end
    end

    def self.edit_balance_not_paid(payment:, new_amount:, user_id:)
        balance = Balance.where.not(user_id: user_id)
        if payment[:amount].to_f < new_amount.to_f
            balance.map do |t|
                new_credit = t[:credit] + (new_amount.to_f/@@count -
                t[:credit])
                t.update(credit: new_credit.round(2))
            end
        elsif payment[:amount].to_f > new_amount.to_f
            balance.map do |t|
                new_balance = t[:credit] - (t[:credit] -
                new_amount.to_f/@@count)
                t.update(credit: new_balance.round(2))
            end
        end
    end
end