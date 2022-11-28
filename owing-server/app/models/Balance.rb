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

    # def self.edit_balance(id:, amount:)
    #     self.edit_balance_paid()
    #     self.edit_balance_not_paid()
    # end

    def self.edit_balance_paid(payment:, new_amount:, user_id:)
        balance = Balance.find_by(user_id: user_id)
        if payment[:amount].to_f < new_amount.to_f
            new_debit = balance[:debit] + (new_amount.to_f.round(2)/@@count - 
            balance[:debit])
            balance.update(debit: new_debit)
        elsif payment[:amount].to_f > new_amount.to_f
            new_debit = balance[:debit] - (balance[:debit] -            
            new_amount.to_f.round(2)/@@count)
            balance.update(debit: new_debit)
       end
    end



    def self.edit_balance_not_paid(payment:, new_amount:, user_id:)
        balance = Balance.where.not(user_id: user_id)
        if payment[:amount].to_f < new_amount.to_f
            balance.map do |t|
                new_credit = t[:credit] + (new_amount.to_f.round(2)/@@count -
                t[:credit])
                t.update(credit: new_credit)
            end
        elsif payment[:amount].to_f > new_amount.to_f
            balance.map do |t|
                new_balance = t[:credit] - (t[:credit] -
                new_amount.to_f.round(2)/@@count)
                t.update(credit: new_balance)
            end
        end
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