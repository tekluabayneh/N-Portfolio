package service

import (
	"fmt"
	"os"

	"gopkg.in/gomail.v2"
)

func SendEmail(senderName, senderEmail, message string) error {
	m := gomail.NewMessage()
	m.SetHeader("From", senderEmail)
	m.SetHeader("To", "tekluabaynehupwork@gmail.com")
	m.SetAddressHeader("Cc", "tekluabayneh@gmail.com", "Teklu")
	m.SetHeader("Subject", "Portfolio")
	password := os.Getenv("USER_PASSWORD")
	htmlBody := fmt.Sprintf(`<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
  </head>
  <body style="margin:0;padding:0;font-family:Helvetica,Arial,sans-serif;background:#f4f6f8;">
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
      <tr>
        <td align="center" style="padding:24px 12px;">
          <table width="600" cellpadding="0" cellspacing="0" role="presentation" style="max-width:600px;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 6px 18px rgba(0,0,0,0.06);">
            <tr>
              <td style="padding:24px 28px 8px 28px;">
                <h1 style="margin:0;font-size:20px;color:#111827;">New message from your portfolio</h1>
                <p style="margin:8px 0 0 0;color:#475569;font-size:14px;">
                  You received a new message through your portfolio contact form.
                </p>
              </td>
            </tr>

            <tr>
              <td style="padding:12px 28px;">
                <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;">
                  <tr>
                    <td style="padding:12px;background:#f8fafc;border-radius:6px;">
                      <strong style="display:block;color:#0f172a;">From</strong>
                      <div style="margin-top:6px;color:#0f172a;font-weight:600;">%s &lt;%s&gt;</div>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding-top:12px;">
                      <strong style="display:block;color:#0f172a;">Message</strong>
                      <div style="margin-top:8px;color:#334155;line-height:1.5;font-size:14px;">
                        %s
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td align="center" style="padding:18px 0 4px 0;">
                      <a href="https://your-portfolio.example.com" target="_blank" rel="noopener" style="text-decoration:none;">
                        <span style="display:inline-block;padding:10px 18px;border-radius:8px;font-weight:600;border:1px solid #0ea5a4;background:#06b6d4;color:#ffffff;">
                          View sender on your portfolio
                        </span>
                      </a>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:16px 28px 22px 28px;border-top:1px solid #f1f5f9;color:#64748b;font-size:13px;">
                <div>— Your Portfolio</div>
                <div style="margin-top:6px">If you’d like to reply, use this email: <strong>your_email@example.com</strong></div>
              </td>
            </tr>
          </table>

          <div style="font-size:12px;color:#94a3b8;margin-top:12px;">Sent automatically by your portfolio • <a href="https://your-portfolio.example.com" style="color:#94a3b8;text-decoration:underline;">your-portfolio.example.com</a></div>
        </td>
      </tr>
    </table>
  </body>
</html>`, senderName, senderEmail, message)

	// Plain-text fallback
	plainBody := fmt.Sprintf("New message from %s <%s>\n\n%s\n\nView: https://your-portfolio.example.com", senderName, senderEmail, message)

	
	m.SetBody("text/html", htmlBody)
	m.AddAlternative("text/plain", plainBody)

	d := gomail.NewDialer("smtp.gmail.com", 587, "tekluabayneh@gmail.com", password)
	if err := d.DialAndSend(m); err != nil {
		return err
	}
	return nil
}
