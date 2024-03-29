import nodemailer from 'nodemailer';
import bcryptjs from 'bcryptjs';
import User from '@/modules/userSchema';
export const sendEmail = async ({ email, emailType, userId }) => {
  if (emailType === 'VERIFY') {
    console.log(emailType);
  }

  // create a hased token
  try {
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    // const dt = await User.findByIdAndUpdate(userId, {
    //   verifyToken: hashedToken,
    //   verifyTokenExpiry: Date.now() + 3600000,
    // });

    if (emailType === 'VERIFY') {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === 'RESET') {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    }

    var transport = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: '425cde65991a6b',
        pass: '27275ba0feafaf',
      },
    });
    const mailOptions = {
      from: 'vishalpal@gmail.com', // sender address
      to: email,
      subject:
        emailType === 'VERIFY' ? 'Verify your email' : 'Reset your password',

      html: `<p>Click <a href="${
        process.env.NEXT_PUBLIC_DOMAIN
      }/api/users/verifyemail?token=${hashedToken}">here</a> to ${
        emailType === 'VERIFY' ? 'verify your email' : 'reset your password'
      }
         or copy and paste the link below in your browser. <br> ${
           process.env.NEXT_PUBLIC_DOMAIN
         }/api/users/verifyemail?token=${hashedToken}
         </p>`,
    };

    const mailresponse = await transport.sendMail(mailOptions);
    return mailresponse;
  } catch (error) {
    console.log(error.message);
  }
};
