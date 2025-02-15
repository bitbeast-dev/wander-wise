import africastalking from "africastalking";
import dotenv from "dotenv";
dotenv.config();
const env = process.env;

const credentials = {
  apiKey: env.API_KEY,
  username: env.UNAME,
};

const AfricasTalking = africastalking(credentials);

const sms = AfricasTalking.SMS;

export { sms };
