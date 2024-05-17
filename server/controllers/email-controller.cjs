const { render } = require('@react-email/render')
const nodemailer = require("nodemailer");
const EmailForm = require('../email')


class emailController {
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Bind the method to retain the context
    this.EmailSend = this.EmailSend.bind(this);
  }

  async EmailSend(req, res, next) {
    try {
      const data = req.body;
      const emailHtml = render(EmailForm(data));

      await this.transporter
        .sendMail({
          from: data.Email,
          to: process.env.SMTP_USER,
          subject: `Film Festival 2024 - Участие от ${data.FirstName} ${data.LastName}`,
          text: "",
          html: emailHtml,
          attachments: [
            {
              filename: 'poster.jpg',
              content: data.Poster.split("base64,")[1],
              encoding: 'base64',
            },
          ],
        })
        .then((res) => console.log({ res }));

      return res.json({
        status: 200,
        message: `Sent Successfully:)`,
      });
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new emailController();
