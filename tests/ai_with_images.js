import { compareImages } from "../middleware/geminiClassifier.js";

async function run() {
  try {
    const result = await compareImages("8fts4s05mol5d9s", "9l269349z162w0c");
    console.log("Comparison result:", result);
  } catch (error) {
    console.error("Error in run:", error);
  }
}

run();
