# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :first_name, :last_name, :password_digest, presence:true
    validates :email, :session_token, presence:true, uniqueness:true
    validates :password, length:{ minimum:6, allow_nil:true}
    before_validation :ensure_session_token
    attr_reader :password

    has_one :cart,
    foreign_key: :user_id,
    class_name: :Cart

    has_many :reviews,
    foreign_key: :user_id,
    class_name: :Review

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def self.generate_session_token
        SecureRandom.urlsafe_base64(64)
    end
    
    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end
    
    private

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end
end
