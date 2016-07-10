require "sinatra"
require "httparty"
require "json"
require "open-uri'"

require_relative "db/config"
require_relative "server"

if ENV['RACK_ENV'] == "production"
  require "pg"
else
  require "pry"
  require "sqlite3"
end

run App::Server

