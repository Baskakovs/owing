require 'pry'

class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'

  get '/users' do
    users = User.all
    users.to_json
  end

  get '/payments' do
    payments = Payment.all
    payments.to_json(include: :user)
  end

  get '/payments/:id' do
    api = []
    api << payment = Payment.find(params[:id])
    api << users = User.all
    api.to_json
  end

  post '/payments' do
    new_payment = Payment.create(
      amount: params[:amount].to_f,
      description: params[:description],
      category: params[:description],
      user_id: params[:user_id]
    )
    id = params[:user_id]
    amount = params[:amount]
    # Balance.update_user_paid(id: id, amount: amount)
    # Balance.update_user_not_paid(id: id, amount: amount)
    Balance.update_balance(id: id, amount: amount)
    new_payment.to_json
  end

  patch '/payments/:id' do
    payment = Payment.find(params[:id])
    payment.update(
      id: params[:id],
      amount: params[:amount],
      description: params[:description],
      category: params[:category],
      user_id: params[:user_id]
    )
    payment.to_json
  end

  delete '/payments/:id' do
    payment = Payment.find(params[:id])
    payment.destroy
    payment.to_json
  end
end
