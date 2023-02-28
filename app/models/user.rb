# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  name            :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  
  has_secure_password

  validates :email, 
    uniqueness: true, 
    length: { in: 3..255 }, 
    format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :name, presence: true, length: { in: 3..30 }
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { in: 6..255 }, allow_nil: true

  has_many :ratings, dependent: :destroy
  has_many :cart_wines, dependent: :destroy
  has_one :wishlist, dependent: :destroy
  has_many :wines, through: :wishlist, dependent: :destroy

  before_validation :ensure_session_token

  def self.find_by_credentials(credential, password)
    # field = credential =~ URI::MailTo::EMAIL_REGEXP ? :email
    user = User.find_by(email: credential)
    user&.authenticate(password)
  end

  def reset_session_token!
    self.update!(session_token: generate_unique_session_token)
    self.session_token
  end

  private

  def generate_unique_session_token
    loop do
      token = SecureRandom.base64
      break token unless User.exists?(session_token: token)
    end
  end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end

end
