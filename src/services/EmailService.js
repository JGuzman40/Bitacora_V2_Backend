const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail", // puedes usar otro: 'hotmail', 'outlook', etc.
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendAdminWelcomeEmail = async ({ name, email, password }) => {
  const mailOptions = {
    from: `"Bitácora Microhuasca" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Tu cuenta de administrador ha sido creada",
    html: `
      <h2>¡Bienvenida/o, ${name}!</h2>
      <p>Se ha creado tu cuenta de administrador en Bitácora Microhuasca.</p>
      <p><strong>Correo:</strong> ${email}</p>
      <p><strong>Contraseña:</strong> ${password}</p>
      <p>Puedes iniciar sesión desde la aplicación web.</p>
      <br/>
      <p>Saludos,</p>
      <p><em>Equipo de Microhuasca</em></p>
    `,
  };

  await transporter.sendMail(mailOptions);
};

const sendParticipantWelcomeEmail = async ({ name, email, password }) => {
  const mailOptions = {
    from: `"Bitácora Microhuasca" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Bienvenido/a a Bitácora Microhuasca",
    html: `
      <h2>¡Hola, ${name}!</h2>
      <p>Has sido registrado como participante en Bitácora Microhuasca.</p>
      <p><strong>Correo:</strong> ${email}</p>
      <p><strong>Contraseña:</strong> ${password}</p>
      <p>Puedes ingresar a la aplicación y comenzar a registrar tus reflexiones.</p>
      <br/>
      <p>Saludos,</p>
      <p><em>Equipo de Microhuasca</em></p>
    `,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = {
  sendAdminWelcomeEmail,
  sendParticipantWelcomeEmail,
};

