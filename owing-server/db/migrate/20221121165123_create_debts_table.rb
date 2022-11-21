class CreateDebtsTable < ActiveRecord::Migration[6.1]
  def change
    create_table :debts do |t|
      t.integer :user_id
      t.timestamp :owed_at
    end
  end
end
