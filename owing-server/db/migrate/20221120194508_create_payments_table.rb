class CreatePaymentsTable < ActiveRecord::Migration[6.1]
  def change
    create_table :payments do |t|
      t.float :amount
      t.string :description
      t.integer :category
      t.integer :paid_by
      t.integer :paid_for
      t.integer :paid_for_2
      t.timestamp :created_at
      t.timestamp :updated_at
    end
  end
end
