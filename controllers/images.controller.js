import { compareImages } from "../middleware/geminiClassifier.js";
import { sendMsg } from "./send.sms.js";
import dotenv from "dotenv";
import PocketBase from "pocketbase";
dotenv.config();

const pb = new PocketBase(process.env.POCKETBASE_URL);

const verifyImage = async (req, res) => {
  const { img_id, uname } = req.body;
  try {
    const result = await compareImages("06mhg57q8sk1476", img_id);
    const conclusion = result.the_same || false;

    const numbers = await pb.collection("users").getFullList();
    const phoneNumbers = numbers.map((user) => user.phone);

    if (conclusion) {
      const message = result.congrats || "has made a discovery";

      //   console.log(phoneNumbers);
      const sms_rslt = sendMsg(phoneNumbers, uname + " " + message);

      return res.status(200).json({
        message: "You made a discovery and message has been broadcasted",
        sms_result: sms_rslt,
        prediction_result: result,
      });
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ msg: "Error in run:", full_error: error });
  }
};

export { verifyImage };
