
import { NextResponse } from "next/server"
import nodemailer from 'nodemailer';

export async function POST(req, res) {

  const body = await req.json();

  const { name, email, numero, message } = body;

  let transporter = nodemailer.createTransport({
    secure: true,
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  let mailOptions = {
    from: email,
    to: process.env.SMTP_USER,
    subject: name,
    html: `
        <div style="font-family: 'Poppins', sans-serif">
        <h1>Hola, soy ${name}</h1>
        <p>${message}</p>
        <h4 style="margin: 0px;">Mi información de contacto es la siguientes:</p>
        <h4 style="margin: 5px 0 0 0;">Correo: <strong>${email}</strong></p>
        <h4 style="margin: 5px 0 0 0;">Teléfono: <strong>${numero}</strong></p>
        </div>
        <img style="margin: 10px 0 0 0; height: 100px;" src="https://i.imgur.com/iw03iM4.jpeg" alt="Rudi Arce Logo" /> 
    `
  };

  try {
    // Enviar correo
    let info = await transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Correo enviado: ' + info.response);
      }
    });

    return NextResponse.json({ success: true, message: 'Correo enviado exitosamente' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return NextResponse.json({ success: false, message: 'Error al enviar el correo', error: error.message }, { status: 500 });
  }
}
