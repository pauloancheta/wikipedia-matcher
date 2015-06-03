class Favourite < ActiveRecord::Base
  validates :title, uniqueness: true
end
