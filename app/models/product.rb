class Product < ApplicationRecord
    validates :name, presence:true, uniqueness:true
    validates :description, :instructions, :ingredients, :price, :size, presence:true
end
