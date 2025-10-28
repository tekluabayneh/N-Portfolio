package handler

import (
	"fmt"
	"net/http"

	"github.com/portfolio/2/service"
)

type SendEmailType struct{ 

}
type messageType struct{ 
SenderName, SenderEmail, Message string
}

func (h *SendEmailType) SendEmail(w http.ResponseWriter, r *http.Request)  {
	data := &messageType{
		SenderName: "one",
		SenderEmail: "tekluabayneh@gmail.com",
		Message: "man i guess this work is getting better and better we don't give up right",
	}
   service.SendEmail(data.SenderName, data.SenderEmail, data.Message)
	fmt.Println("test work")	
}