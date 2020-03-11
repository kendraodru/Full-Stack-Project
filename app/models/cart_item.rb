# == Schema Information
#
# Table name: cart_items
#
#  id         :bigint           not null, primary key
#  cart_id    :integer          not null
#  product_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class CartItem < ApplicationRecord
    validates :cart_id, :quantity, :product_id, presence:true
    # validates 
    validates :product_id, uniqueness: true
    before_validation :default_quantity 
    
    belongs_to :cart,
    foreign_key: :cart_id,
    class_name: :Cart


    belongs_to :product,
    foreign_key: :product_id,
    class_name: :Product


    def default_quantity 
        self.quantity ||= 1
    end

end
