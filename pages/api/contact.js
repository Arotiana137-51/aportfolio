// Librairie

export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "INVALID_METHOD" });
    return;
  }

  // Check if the necessary properties exist in req.body
  if (!req.body || !req.body.name || !req.body.email || !req.body.content) {
    res.status(400).json({ message: "INVALID_PARAMETER" });
    return;
  }
  // Variables

  var name = req.body.name.toString();
  var email = req.body.email.toString();

  if (req.body.subject == null || req.body.subject == "") {
    var form_subject = "sans objet";
  } else {
    var form_subject = req.body.subject.toString();
  }

  var content = req.body.content.toString();

  if (!name || !email || !form_subject || !content) {
    res.status(400).json({ message: "INVALID_PARAMETER" });
    return;
  }

  // Syntaxe adresse email
  const pattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!pattern.test(email)) {
    res.status(400).send({
      message: "EMAIL_SYNTAX_INCORRECT",
    });
    return;
  }

  // Transformer les retours à la ligne pour le HTML
  const message = content
    .replace(/\n/g, "<br>")
    .replace(/\r/g, "<br>")
    .replace(/\t/g, "<br>")
    .replace(/<(?!br\s*\/?)[^>]+>/g, ""); // supprime tout le html en autorisant uniquement les balises <br>

  //INITIALISATION DE NODEMAILER
  const back_email = process.env.EMAIL;
  const back_pass = process.env.EMAIL_PASS;
  

  var nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: back_email,
      pass: back_pass,
    },
  });

  (async () => {
    try {
      await transporter.sendMail({
        from: back_email,
        to: back_email,
        subject: form_subject,
        text: email,
        html: `    <!DOCTYPE html>
		<html>
		  <head>
			<meta charset="utf-8">
			<title>NodeMailer Email Template</title>
			<style>
			  .container {
				width: 100%;
				height: 100%;
				padding: 20px;
				background-color: #f4f4f4;
			  }
			  .email {
				width: 80%;
				margin: 0 auto;
				background-color: #fff;
				padding: 20px;
			  }
			  .email-header {
				background-color: #333;
				color: #fff;
				padding: 20px;
				text-align: center;
			  }
			  .email-body {
				padding: 20px;
			  }
			  .email-footer {
				background-color: #333;
				color: #fff;
				padding: 20px;
				text-align: center;
			  }
			</style>
		  </head>
		  <body>
			<div class="container">
			  <div class="email">
				<div class="email-header">
				  <h1>MESSAGE DU PORTFOLIO</h1>
				</div>
				<div class="email-body">
				  <p>${message}</p>
				</div>
				<div class="email-footer">
				  <p>Expediteur:       ${name}<br>Email de l'expediteur :       ${email}</p>
				</div>
			  </div>
			</div>
		  </body>
		</html>`,
      });
      res.status(202).json({
        message: "TOKONY TONGA NY MAIL",
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        error: JSON.stringify(err),
      });
    }
  })();
}
