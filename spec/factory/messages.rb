FactoryBot.define do
  factory :message do
    text {Faker::Lorem.sentence}
    image {File.open("#{Rails.root}/public/images/text_image.jpg")}
    user
    group
  end
end

