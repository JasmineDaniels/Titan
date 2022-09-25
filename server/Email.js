import nodemailer from 'nodemailer'
//import dotenv from "dotenv"
const Send = (options) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        }
    });

    transporter.sendMail(options, (err, info) => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log(`email sent!`)
        }
    })
}


export default function Email ({name, phone, email, message}){
    const styles = {
        fontColor: `hotpink`
    }

    let options = {
        from: process.env.EMAIL,
        to: [`${process.env.EMAIL}, ${email}`],
        subject: 'Thank you so much for your Interest!',
        html: `<div>
            <h2>Hi there, ${name}</h2>

            <p>
                I will be in contact with you shortly at ${email} or ${phone}, if number was provided. <br></br>
                Feel free to reach out here or by phone ${process.env.PHONE}, and leave details on what you're looking for, and how I can be an asset to you and your team!
                <br>
                ${message}
            </p>

            <p>Thank You! <br></br> <span style=${styles}>Jasmine Daniels</span> </p>
        </div>`
    }

    Send(options)
}