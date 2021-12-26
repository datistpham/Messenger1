import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import twilio from 'twilio'
import Vonage from '@vonage/server-sdk'
const vonage= new Vonage({
    apiKey: `${process.env.API_KEY1}`,
    apiSecret: `${process.env.API_SECRET}`
})
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const reqPath = path.join(__dirname, '../../../.env')
const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
dotenv.config({ path: reqPath })
const client= twilio(accountSid, authToken)

client.messages
// .create({
//     body: "This is message is sent from 0388015984",
//     from: "0388015984",
//     to: "0388015984"
// })
// .then(message=> console.log(12345))
.create({
    body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
    from: '+8427206922',
    to: '+84388015984'
  })
 .then(message => console.log(message.sid));

const from = "Vonage APIs"
const to = "84327206922"
const text = 'A text message sent using the Vonage SMS API'

vonage.message.sendSms(from, to, text, (err, responseData) => {
    if (err) {
        console.log(err);
    } else {
        if(responseData.messages[0]['status'] === "0") {
            console.log("Message sent successfully.");
        } else {
            console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
        }
    }
})