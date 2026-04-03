package main

import (
	"AuthInGo/app"
	config "AuthInGo/config/env"
)

func main() {
	config.Load()
   port := config.GetString("PORT",":3002")
	cfg := app.NewConfig(port) // Set the server to listen on port 8080
	app := app.NewApplication(cfg)

	app.Run()
}
