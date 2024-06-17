"use client";

import { useState } from "react";
import Link from "next/link";
import FAQ from "@/components/FAQ";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { Typewriter } from 'react-simple-typewriter'

export default function Hero() {
  const [text, setText] = useState("");
  const [prompt, setPrompt] = useState("");

  interface DeepseekRequest {
    model: string;
    messages: Array<{
      role: "system" | "user";
      content: string;
    }>;
    stream: boolean;
  }

  const data: DeepseekRequest = {
    model: "deepseek-chat",
    messages: [
      { role: "system", content: "你是一个提示词生成专家，名为 promptate，擅长为用户优化和生成提示词" },
      { role: "user", content: `我正在尝试从以下提示词中获得 GPT-4 的良好结果：“${text}”。你能否写出更优化、能够产生更好结果的提示词？请直接回复您优化的提示词给我。` },
    ],
    stream: false,
  };

  const handleGenerate = () => {
    axios
      .post("https://api.deepseek.com/chat/completions", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_DEEPSEEK_API_KEY}`,
        },
      })
      .then((response: any) => {
        setPrompt(response.data.choices[0].message.content);
      })
      .catch((error: Error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="max-w-3xl px-6 py-12">
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-bold text-[#d0ebff]">Promptate</h1>
          <p className="text-lg text-[#a5d8ff]">
            Unlock your creativity with the ultimate AI prompt generator. Craft
            captivating prompts for your writing, art, or any other creative
            endeavor.
          </p>
          <div className="flex justify-center space-x-4 h-[30vh]">
            <Textarea
              placeholder="Enter text here"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              title="Generate prompt"
              onClick={handleGenerate}
              className="justify-center items-center my-auto px-4 py-2 h-10 text-sm text-blue-500 border border-gray-200 rounded-md shadow-sm bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:scale-105 transition-transform duration-300"
            >
              generate
            </button>
            <div className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
              {prompt && (
                <Typewriter
                  words={[prompt]}
                  loop={1}
                  cursor
                  cursorStyle="_"
                  typeSpeed={50}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              )}
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-200">
            Frequently Asked Questions
          </h2>
          <FAQ />
        </div>
      </div>
    </div>
  );
}
