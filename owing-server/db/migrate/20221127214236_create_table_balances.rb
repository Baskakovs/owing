class CreateTableBalances < ActiveRecord::Migration[6.1]
  def change
    create_table :balances do |t|
      t.integer :user_id
      t.float :credit
      t.float :debit
    end
  end
end
