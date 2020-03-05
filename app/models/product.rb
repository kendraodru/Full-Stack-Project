# == Schema Information
#
# Table name: products
#
#  id           :bigint           not null, primary key
#  name         :string           not null
#  description  :string           not null
#  instructions :string           not null
#  ingredients  :string           not null
#  price        :integer          not null
#  size         :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Product < ApplicationRecord
    validates :name, presence:true, uniqueness:true
    validates :description, :instructions, :ingredients, :price, :size, presence:true
end
