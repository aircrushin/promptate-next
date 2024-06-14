"use client";

import { useState } from "react";
import Link from "next/link";
import FAQ from "@/components/FAQ";
import { Textarea } from "@/components/ui/textarea";

export default function Hero() {
  const [text, setText] = useState("");
  const [prompt, setPrompt] = useState("");

  const handleGenerate = () => {};
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
          {/* <Link
            href="/main"
            className="inline-flex items-center justify-center px-6 py-3 text-gray-200 border border-transparent rounded-md shadow-sm bg-[#7950f2] rounded-md hover:bg-[#6741d9] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            prefetch={false}
          >
            Get Started
          </Link> */}
          <div className="flex justify-center space-x-4 h-[30vh]">
            <Textarea
              placeholder="Enter text here"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Textarea
              readOnly
              placeholder="prompt:"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-200">
            Frequently Asked Questions
          </h2>
          <FAQ></FAQ>
        </div>
      </div>
    </div>
  );
}
