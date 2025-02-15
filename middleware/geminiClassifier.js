import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import dotenv from "dotenv";
import PocketBase from "pocketbase";
import { generationConfig, modelName } from "../config/modelConfig.js";
dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);
const pb = new PocketBase(process.env.POCKETBASE_URL);

const model = genAI.getGenerativeModel({
  model: modelName,
});

async function getImageFromPocketBase(recordId) {
  try {
    const record = await pb.collection("images").getOne(recordId);
    const imageUrl = pb.files.getURL(record, record.img);
    const response = await fetch(imageUrl);
    const arrayBuffer = await response.arrayBuffer();
    const mimeType = response.headers.get("content-type");

    return {
      inlineData: {
        data: Buffer.from(arrayBuffer).toString("base64"),
        mimeType: mimeType,
      },
    };
  } catch (error) {
    console.error("Error fetching image:", error);
    throw error;
  }
}

async function compareImages(imageId1, imageId2) {
  try {
    const image1 = await getImageFromPocketBase(imageId1);
    const image2 = await getImageFromPocketBase(imageId2);

    const prompt =
      'Compare these two images and return a JSON response in this exact format: {"the_same": boolean, "confidence": number, "congrats": string}. The confidence should be between 0 and 1. the congrats should be a simple rewarding text starting with "has" and must contain "keep on your discovery", and its not all about classfication, its about touring and advanture. Do not include any additional text or explanation.';

    const result = await model.generateContent({
      contents: [
        {
          parts: [
            { text: prompt },
            {
              inline_data: {
                data: image1.inlineData.data,
                mime_type: image1.inlineData.mimeType,
              },
            },
            {
              inline_data: {
                data: image2.inlineData.data,
                mime_type: image2.inlineData.mimeType,
              },
            },
          ],
        },
      ],
      generationConfig,
    });

    const responseText = result.response.text().trim();
    const jsonMatch = responseText.match(/\{[^]*\}/);

    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }

    // If no valid JSON found, return a default response
    return {
      the_same: false,
      confidence: 0,
      error: "No valid JSON found in response",
    };
  } catch (error) {
    console.error("Error comparing images:", error);
    throw error;
  }
}

export { compareImages };
