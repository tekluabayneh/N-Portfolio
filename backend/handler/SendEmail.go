package handler

import (
	"fmt"
	"net/http"
"os"
	"gopkg.in/gomail.v2"
)

type SendEmailType struct{ 

}

func (h *SendEmailType) SendEmail(w http.ResponseWriter, r *http.Request)  {
	m := gomail.NewMessage()
	m.SetHeader("From", "tekluabayneh@gmail.com")
	m.SetHeader("To", "tekluabaynehupwork@gmail.com")
	m.SetAddressHeader("Cc", "dan@example.com", "Dan")
	m.SetHeader("Subject", "Hello!")
	m.SetBody("text/html", "Hello <b>Bob</b> and <i>Cora</i>!")
	m.Attach("/home/Alex/lolcat.jpg")
	password := os.
	d := gomail.NewDialer("smtp.gmail.com", 587, "your_email@gmail.com", )

	
	// Send the email to Bob, Cora and Dan.
	if err := d.DialAndSend(m); err != nil {
		panic(err)
	}
	fmt.Println("test work")	
}