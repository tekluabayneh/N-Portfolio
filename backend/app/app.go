package app

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/portfolio/2/routes"
)

type App struct {
	router http.Handler
}

func New() *App {
	app := &App{
		router: routes.LoadRouter(),
	}
	return app
}

func (app *App) Start() {
  PORT := os.Getenv("PORT")


  if PORT == ""{ 
PORT = "9090"
  }

	server := &http.Server{ 
     Addr: ":" + PORT,
	 Handler: app.router,
	}
fmt.Printf("Server running at http://localhost:%s\n", PORT)
	if err := server.ListenAndServe(); err != nil {
		log.Fatalf("Server failed: %v", err)
	}

}
