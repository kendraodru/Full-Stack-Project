class Review < ApplicationRecord
    validates :user_id, :product_id, :title, :body, :rating, presence:true
    validates_uniqueness_of :user_id, :scrope => [:product_id]


    belongs_To :user,
    foreign_key: :user_id,
    class_name: :User

    belongs_To :product,
    foreign_key: :product_id,
    class_name: :Product
end
