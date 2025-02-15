import { sms } from "../config/auth.js";

const sendMsg = async (members, broadcast_message) => {
  const options = {
    to: members,
    message: broadcast_message,
  };

  //   return console.log(options);

  try {
    const ans = await sms.send(options);

    return ans;
    // console.log(ans);
  } catch (err) {
    console.log(err);
  }
};

export { sendMsg };
