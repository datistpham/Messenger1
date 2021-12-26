import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const reqPath = path.join(__dirname, '../../../.env')
dotenv.config({path: reqPath})
export const transporter= nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: `${process.env.GMAIL_ACCOUNT}`,
        pass: `${process.env.GMAIL_PASSWORD}`
    }
})

