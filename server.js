const dotenv = require('dotenv');
dotenv.config();
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// the server that is used to send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASSWORD
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});

router.post("/contact", async (req, res) => {
    console.log("RUNNING /contact")
    const name = req.body.firstName + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;
    const company = req.body.company;
    const mail = {
        from: email,
        to: process.env.GMAIL_EMAIL,
        subject: "Contact Form Submission - Zac Cooper Portfolio",
        html: `<p>Name: ${name}</p>
               <p>Email: ${email}</p>
               <p>Phone: ${phone}</p>
               <p>Company: ${company}</p>
               <p>Message: ${message}</p>`
    };
    await contactEmail.sendMail(mail, (error) => {
        if (error) {
            console.log(error)
            res.json(error);
        } else {
            res.json({ code: 200, status: "Message Sent" });
        }
    });
});