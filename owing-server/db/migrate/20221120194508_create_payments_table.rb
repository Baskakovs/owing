class CreatePaymentsTable < ActiveRecord::Migration[6.1]
  def change
    create_table :payments do |t|
      t.float :amount
      t.string :description
      t.integer :category
      t.integer :credit_id
      t.integer :debit_id
    end
  end
end
