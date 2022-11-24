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

  post '/payments' do
    new_payment = Payment.create(
      amount: params[:amount].to_f,
      description: params[:description],
      category: params[:description],
      user_id: params[:user_id]
    )
    new_payment.to_json
  end

  delete '/payments/:id' do
    payment = Payment.find(params[:id])
    payment.destroy
    payment.to_json
  end
end
