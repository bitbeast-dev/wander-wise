import { sms } from "../config/auth.js";

// Send SMS route
const sendMsg = (req, res) => {
  const { to, message } = req.body;

  sms
    .send({ to, message, enque: true })
    .then((response) => {
      console.log(response);
      res.json(response);
    })
    .catch((error) => {
      console.log(error);
      res.json(error.toString());
    });
};

export { sendMsg };
