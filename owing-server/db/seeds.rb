puts "🌱 Seeding spices..."

# Seed your database here
user = User.create(first_name: "Peter", last_name:"Baskakovs")
user2 = User.create(first_name: "Nico", last_name:"Mil")
user3 = User.create(first_name: "Sasha", last_name:"Bogdan")

balance1 = Balance.create(user_id: 1, credit: 0.0, debit: 0.0)
balance2 = Balance.create(user_id: 2, credit: 0.0, debit: 0.0)
balance3 = Balance.create(user_id: 3, credit: 0.0, debit: 0.0)

puts "✅ Done seeding!"
