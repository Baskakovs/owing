class CreateCategoriesTable < ActiveRecord::Migration[6.1]
  def change
    create_table :categories do |t|
      t.string :description
      t.string :emoji
    end
  end
end
