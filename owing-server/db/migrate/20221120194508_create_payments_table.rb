class CreatePaymentsTable < ActiveRecord::Migration[6.1]
  def change
    create_table :payments do |t|
      t.float :amount
      t.string :description
      t.integer :category
      t.integer :user_id
    end
  end
end
