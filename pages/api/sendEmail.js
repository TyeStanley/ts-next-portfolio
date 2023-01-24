const nodemailer = require("nodemailer");

module.exports = async (req, res) => {
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SEND_FROM,
    to: process.env.SEND_TO,
    subject: `${name} sent a message`,
    html: `
      <p>Name: <b>${name}</b></p>
      <p>Email: <b>${email}</b></p>
      <p>Message: <b>${message}</b></p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent", info });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error sending email", error });
  }
};
