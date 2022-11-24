puts "🌱 Seeding spices..."

# Seed your database here
user = User.create(first_name: "Peter", last_name:"Mil")
user2 = User.create(first_name: "Nico", last_name:"Mil")
user3 = User.create(first_name: "Sasha", last_name:"Mil")

payment = Payment.create(amount: 200, description: "Hotel", category: "Accomodation", user_id: 1)
payment2 = Payment.create(amount: 300, description: "Flights", category: "Travel", user_id: 2)

puts "✅ Done seeding!"
