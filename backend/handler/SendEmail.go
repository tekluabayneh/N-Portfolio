package handler

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/portfolio/2/service"
)

type SendEmailType struct {
}
type IncomingDataForm struct {
	Name    string `json:name`
	Email   string `json:email`
	Message string `json:message`
}
type messageType struct {
	SenderName, SenderEmail, Message string
}

func (h *SendEmailType) SendEmail(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var formType IncomingDataForm

	if err := json.NewDecoder(r.Body).Decode(&formType); err != nil {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(map[string]string{
			"message": "Invalid json  body",
			"detail":  err.Error(),
		})
		return
	}

	data := &messageType{
		SenderName:  formType.Name,
		SenderEmail: formType.Email,
		Message:     formType.Message,
	}
	fmt.Println(formType)

	if formType.Name == "" || formType.Email == "" || formType.Message == "" {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(map[string]string{
			"error": "All fields (name, email, message) are required",
		})
	}

	if err := service.SendEmail(data.SenderName, data.SenderEmail, data.Message); err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(map[string]string{
			"message": "Failed to send message",
			"detail":  err.Error(),
		})
		return
	}

	// success
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(map[string]string{
		"message": "form submitted successfully",
	})

}
