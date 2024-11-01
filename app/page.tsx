"use client";

import { useState } from "react";
import FAQ from "@/components/FAQ";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { TextAnimate } from "@/components/ui/text-animate"
import { Typewriter } from "react-simple-typewriter";
import { toast } from "react-toastify";
import { DeepseekRequest } from "@/types/prompt";
import { ClipLoader } from "react-spinners";

export default function Hero() {
  const [text, setText] = useState("");
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const data: DeepseekRequest = {
    model: "deepseek-chat",
    messages: [
      {
        role: "system",
        content:
          "你是一个提示词生成专家，名为 promptate，擅长为用户优化和生成提示词",
      },
      {
        role: "user",
        content: `我正在尝试从以下提示词中获得 GPT-4 的良好结果：“${text}”。你能否写出更优化、能够产生更好结果的提示词？请直接回复您优化的提示词给我，不要加任何说明！`,
      },
    ],
    temperature: 0.1,
    stream: false,
  };

  const handleGenerate = () => {
    if (!text || text.trim() === "") {
      toast.error("you must enter a prompt to start generate");
      return;
    }
    setLoading(true);
    console.log("start generating");
    axios.post("https://api.deepseek.com/chat/completions", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_DEEPSEEK_API_KEY}`,
        },
      })
      .then((response: any) => {
        console.log("finished");
        setPrompt(response.data.choices[0].message.content);
        setLoading(false);
      })
      .catch((error: Error) => {
        toast.error("network error")
        console.error("Error:", error);
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl px-6 py-16">
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <TextAnimate 
              text="Promptate" 
              type="fadeIn" 
              className="text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            />
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            <Typewriter
              words={["Unlock your creativity with the ultimate AI prompt generator. Craft captivating prompts for your writing, art, or any creative endeavor."]}
              loop={1}
              typeSpeed={6}
              deleteSpeed={50}
              delaySpeed={500}
            />
          </p>
          <div className="flex flex-col space-y-4 justify-center md:flex-row md:space-x-6 md:space-y-0 md:h-[35vh] w-full max-w-5xl mx-auto">
            <Textarea
              className="w-[400px] resize-none text-gray-700 dark:text-gray-200 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:border-gray-200 dark:hover:border-gray-700 focus:border-gray-200 dark:focus:border-gray-700 focus:ring-0"
              placeholder="type your prompt here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <div className="flex items-center justify-center w-full md:w-[100px]">
              <button
                title="Generate prompt"
                onClick={handleGenerate}
                className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-purple-500 h-12 px-6 text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium"
              >
                Generate
              </button>
            </div>
            <div className="w-[400px] text-gray-700 dark:text-gray-200 flex min-h-[80px] rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm px-4 py-3 shadow-lg">
              {loading ? (
                <ClipLoader color="#6366f1" size={24} className="m-auto"/>
              ) : prompt ? (
                <Typewriter
                  words={[prompt]}
                  loop={1}
                  typeSpeed={50}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              ) : null}
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-3xl text-blue-600 font-bold dark:text-gray-100 mb-8 text-center">
            FAQ
          </h2>
          <FAQ />
        </div>
        <footer className="mt-16 text-center text-sm text-gray-500 dark:text-gray-400">
          © 2024 Promptate. All rights reserved.
        </footer>
      </div>
    </div>
  );
}