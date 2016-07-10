module App

  class Server < Sinatra::Base
    set :method_override, true
    enable :sessions

    api_key = ENV["GIPHY_PUBLIC_KEY"]

    response = HTTParty.get("http://api.giphy.com/v1/gifs/search?limit=1&q=beyonce&api_key=#{api_key}")

    puts JSON.parse(response.body)

    get '/' do
      erb :index
    end

  end
  
end