# json.set! user.id do
#     json.id user.id
#     json.first_name user.first_name
#     json.last_name user.last_name
#     json.email user.email
# end
# debugger
json.extract! user, :id, :first_name, :last_name, :email

