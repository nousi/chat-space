json.array! @users do |user|
  json.name user.name
  json.id   user.id
end

json.select_name @user.name
json.select_id 	 @user.id
