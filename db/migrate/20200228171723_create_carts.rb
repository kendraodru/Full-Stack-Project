class CreateCarts < ActiveRecord::Migration[5.2]
  def change
    create_table :carts do |t|
      t.integer :user_id, unique:true

      t.timestamps
    end

    add_index :carts, :user_id
  end
end
