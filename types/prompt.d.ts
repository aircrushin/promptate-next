export interface DeepseekRequest {
    model: string;
    messages: Array<{
      role: "system" | "user";
      content: string;
    }>;
    temperature: number;
    stream: boolean;
  }