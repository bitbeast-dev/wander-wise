const modelName = "gemini-2.0-flash";

const generationConfig = {
  temperature: 0.4,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
};

export { generationConfig, modelName };
