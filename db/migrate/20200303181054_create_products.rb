class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name, null:false, unique:true
      t.string :description, null:false
      t.string :instructions, null:false
      t.string :ingredients , null:false
      t.integer :price, null:false
      t.string :size, null:false
      t.timestamps
    end
    add_index :products, :name
  end
end


