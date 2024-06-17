// lib/openai.js
import { OpenAI } from 'openai';

const openai = new OpenAI({
    apiKey: "sk-7d61f6c7fe12478781ab1e1d5d830942",
    baseURL: 'https://api.deepseek.com/', // 修改baseURL
  });

export default openai;