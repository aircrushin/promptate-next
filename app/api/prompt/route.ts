// pages/api/openai.ts
import { NextResponse } from "next/server";
import openai from '@/lib/openai';

// 由于 Next.js 会自动处理请求方法，我们不需要在函数内部检查 req.method
export async function POST(req: Request) {
  //const { prompt } = req.body;
  try {
    const response = await openai.completions.create({
      model: 'deepseek-chat',
      prompt: "hello"
    });
    return NextResponse.json(response.choices[0]);
  } catch (error:any) {
    return NextResponse.json({ error: error });
  }
};

// export async function GET(req: Request) {
//   return NextResponse.json({ message: "hello" });
// };