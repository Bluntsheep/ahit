import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export function GET() {
  console.log("message Sent");
  return NextResponse.json({ name: "hello", age: 23 });
}

export async function POST(req, res) {
  const { name, email, phone, message } = await req.json();
  console.log(name);

  const emailTemplate = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Email Template</title>
        <style>
          /* Define your CSS styles here */
          body {
            font-family: Arial, sans-serif;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            background-color: #f9f9f9;
          }
          h1 {
            color: #333;
          }
          p {
            color: #666;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h3>${name}</h3>
          <p>${email}</p>
          <p>${phone}</p>
          <p>${message}</p>
        </div>
      </body>
      </html>
    `;

  const transporter = nodemailer.createTransport({
    host: "mail.qeelo.co.za",
    port: 465,
    secure: true,
    auth: {
      user: "ahitnoreply@qeelo.co.za",
      pass: "Pumaisgay1",
    },
  });

  const info = {
    from: "ahitnoreply@qeelo.co.za",
    to: "marnus@ahit.co.za",
    subject: name,
    html: emailTemplate,
  };

  transporter.sendMail(info, (err, result) => {
    if (err) {
      console.log(err);
      NextResponse.json("Opps error occured");
    } else {
      NextResponse.json("thanks for e-mailing me");
    }
  });
  // console.log("Message sent: %s", info.messageId);

  return new NextResponse("200");
}
