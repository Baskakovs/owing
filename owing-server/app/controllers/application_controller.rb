require 'pry'

class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'

  get '/users' do
    users = User.all
    users.to_json
  end

  get '/payments' do
    api = []
    api << payments = Payment.all
    api << balance = Balance.first
    api.to_json(include: :user)
  end

  get '/payments/:id' do
    api = []
    api << payment = Payment.find(params[:id])
    api << users = User.all
    api.to_json
  end

  post '/payments' do
    id = params[:user_id] 
    amount = params[:amount]
    new_payment = Payment.create(
      amount: params[:amount].to_f,
      description: params[:description],
      category: params[:description],
      user_id: params[:user_id]
    )
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
