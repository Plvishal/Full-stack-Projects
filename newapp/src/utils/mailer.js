import nodemailer from 'nodemailer';

export const sendEmail = async ({ email, emailType, userId }) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: 'maddison53@ethereal.email',
      pass: 'jn7jnAPss4f63QBp6D',
    },
  });
  const info = await transporter.sendMail({
    from: 'vishalpal@gmail.com', // sender address
    to: email,
    subject:
      emailType === 'VERIFY' ? 'Verify your email' : 'Reset your password',

    html: '<b>Hello world?</b>', // html body
  });
};