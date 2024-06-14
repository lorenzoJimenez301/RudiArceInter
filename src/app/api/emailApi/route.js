
import { NextResponse } from "next/server"
import nodemailer from 'nodemailer';

export async function POST(req, res) {

  const body = await req.json();

  const { name, email, numero, message } = body;

  // Configuración del transporte
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    port: process.env.SMTP_PORT,
    host: process.env.SMTP_HOST,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });


  try {
    // Enviar correo
    let info = await transporter.sendMail({
      from: email, // El remitente debe ser el correo del usuario que envía el formulario
      to: process.env.SMTP_USER, // El destinatario es tu propia dirección de correo electrónico
      subject: `${name} - ${numero}`,
      text: message,
    });

    return NextResponse.json({ success: true, message: 'Correo enviado exitosamente' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return NextResponse.json({ success: false, message: 'Error al enviar el correo', error: error.message }, { status: 500 });
  }
}
