module App

  class Server < Sinatra::Base
    set :method_override, true
    enable :sessions

    get '/' do
      erb :index
    end

  end
  
end