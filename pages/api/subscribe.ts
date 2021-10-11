// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'

sgMail.setApiKey("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")


type Data = {
  name: string
}

export default async (req: NextApiRequest, res: NextApiResponse) => {

  const { email, subject, message, name } = req.body
  const msg = {
    to: 'wilcirom@gmail.com',
    from: "support@kiwipeluditos.com",
    subject,
    name,
    text: message + "\nFrom: " + email + "\n" + name,
  };

  try {
    await sgMail.send(msg);
    res.json({ message: `Email has been sent` })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error sending email' })
  }
}
