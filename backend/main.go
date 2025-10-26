package main

import (
	"log"

	"github.com/joho/godotenv"
	"github.com/portfolio/2/app"
)

func main() {
		err := godotenv.Load()

	if err != nil {
		log.Fatal("Error loading .env file")
	}
app.New().Start()
}
