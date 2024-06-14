"use client";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
export default function Home() {
  const [leftText, setLeftText] = useState("");
  const [rightText, setRightText] = useState("");

  const handleGenerate = () => {
    // 这里可以添加生成右侧textarea内容的逻辑
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-col mr-10">
        <Textarea
          placeholder="Enter text here"
          className="h-[200px] w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg"
          value={leftText}
          onChange={(e) => setLeftText(e.target.value)}
        />
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleGenerate}
        >
          Generate
        </button>
      </div>
      <div>
        <Textarea
          readOnly
          placeholder="Generated text will appear here"
          className="h-[200px] w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg"
          value={rightText}
          onChange={(e) => setRightText(e.target.value)}
        />
      </div>
    </div>
  );
}
