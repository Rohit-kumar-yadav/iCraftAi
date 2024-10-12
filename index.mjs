import { MailtrapClient } from "mailtrap";

const TOKEN ='a816dc27e8b9093f448826f7f9e5c28b'
const SENDER_EMAIL ='hello@demomailtrap.com'
const RECIPIENT_EMAI ='ry256423@gmail.com'

if(!TOKEN){
    throw new Error('MAILTRAP_TOKEN environment variable is not set')
}

const client = new MailtrapClient({
    token: TOKEN,
  });
  
  const sender = {
    email: SENDER_EMAIL,
    name: "Mailtrap Test",
  };
  const recipients = [
    {
      email: RECIPIENT_EMAI,
    }
  ];

  client
  .send({
    from: sender,
    to: recipients,
    subject: "welcome From iCraft",
    text: "welcome to iCraft , hope you'll enjoy",
    category: "Integration Test",
  })
  .then(console.log, console.error);