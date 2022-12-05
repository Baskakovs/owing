require 'pry'

class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'

  get '/users' do
    users = User.all.to_json
  end

  get '/payments' do
    api = []
    api << Payment.all
    api << Balance.first
    api.to_json(include: :user)
  end

  get '/payments/:id' do
    api = []
    api << Payment.find(params[:id])
    api << User.all
    api.to_json
  end

  post '/payments' do
    new_payment = Payment.create(
      amount: params[:amount].to_f,
      description: params[:description],
      category: params[:category],
      user_id: params[:user_id]
    )
    Balance.update_balance(id: params[:user_id], amount: params[:amount])
    new_payment.to_json
  end

  post '/users' do
    new_user = User.create(
      first_name: params[:first_name],
      last_name: params[:last_name],
    )
    new_balance = Balance.create(user_id: new_user.id, credit: 0.0, debit: 0.0)
  end

  patch '/payments/:id' do
    payment = Payment.find(params[:id])
    Balance.edit(payment: payment, new_amount: params[:amount], 
    user_id: params[:user_id])
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
    Balance.edit(payment: payment, new_amount: 0, user_id: payment[:user_id])
    payment.destroy.to_json
  end
end
