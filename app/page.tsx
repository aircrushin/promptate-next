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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="max-w-3xl px-6 py-12">
        <div className="text-center space-y-4">
          <TextAnimate text="Promptate" type="fadeIn" className="text-6xl font-bold text-[#d0ebff] text-center justify-center items-center"></TextAnimate>
          <p className="text-lg text-[#a5d8ff]">
            <Typewriter
                  words={["unlock your creativity with the ultimate AI prompt generator. Craft captivating prompts for your writing, art, or any other creativeendeavor."]}
                  loop={1}
                  typeSpeed={6}
                  deleteSpeed={50}
                  delaySpeed={500}
                />
          </p>
          <div className="flex flex-col space-y-4 justify-center md:flex-row md:space-x-4 md:space-y-0 md:h-[30vh] min-w-[300px]">
            <Textarea
              className="text-gray-200 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"
              placeholder=""
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              title="Generate prompt"
              onClick={handleGenerate}
              className="bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 my-auto h-full text-sm text-slate-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 hover:scale-105 transition-transform duration-300"
            >
              generate
            </button>
            <div className="text-gray-200 text-start flex min-h-[80px] w-full rounded-md border border-input bg-gradient-to-tl from-indigo-500 via-purple-500 to-pink-500 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
              {loading ? (
                <ClipLoader color="#ffffff" size={20} className="m-auto"/>
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
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-200">
            Frequently Asked Questions
          </h2>
          <FAQ />
        </div>
        <footer className="mt-12 text-center text-xs text-gray-200">
          © 2024 Promptate. All rights reserved.
        </footer>
      </div>
    </div>
  );
}