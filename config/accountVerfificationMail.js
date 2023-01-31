import sgMail from "@sendgrid/mail";
const url = process.env.url
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

function accountVerificationMail(req, res) {
    console.log(req.verify_code)
    console.log(req.mail)
    const message = {
        
        to: req.mail,
        from: "parchemos3@gmail.com",
        subject: "Confirm your email address",
        text: "Please click the confirmation link",

        html: `<p>Welcome to Minga, the best comic book page in the entire known universe! Click here to confirm your email address and be a part of our community of comic and manga curators, the best in the world:  <a href="${url}/verify/${req.verify_code}">press</a><p>See u :)</a></p>`,
      };
    try {
        sgMail.send(message);
    } catch (err) {
        return res.status(err.code).send(err.message);
    }
}

export default accountVerificationMail