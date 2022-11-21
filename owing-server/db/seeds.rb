puts "🌱 Seeding spices..."

# Seed your database here
user = User.create(first_name: "Peter", last_name:"Mil")
user2 = User.create(first_name: "Nico", last_name:"Mil")
user3 = User.create(first_name: "Sasha", last_name:"Mil")

payment = Payment.create(amount: 200, description: "Hotel", category: "Accomodation", credit_id: 1, debit_id: 1)

credit = Credit.create(user_id: 1)

debt1 = Debt.create(user_id: 2)
debt2 = Debt.create(user_id: 3)

puts "✅ Done seeding!"
