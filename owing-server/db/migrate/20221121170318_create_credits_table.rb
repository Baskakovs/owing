class CreateCreditsTable < ActiveRecord::Migration[6.1]
  def change
    create_table :credits do |t|
      t.integer :user_id
      t.timestamp :paid_at
    end
  end
end
