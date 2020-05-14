class Review < ApplicationRecord
    validates :user_id, :product_id, :title, :body, :rating, presence:true
    validates_uniqueness_of :user_id, :scrope => [:product_id]
end
