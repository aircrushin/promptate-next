import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionDemo() {
  return (
    <Accordion 
      type="single" 
      collapsible 
      className="w-full max-w-4xl text-gray-600 dark:text-gray-300 space-y-4"
    >
      <AccordionItem value="item-1" className="border border-gray-200 dark:border-gray-700 rounded-xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm shadow-md">
        <AccordionTrigger className="px-6 hover:no-underline hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-xl transition-colors">
          What is Promptate?
        </AccordionTrigger>
        <AccordionContent className="px-6 pb-4">
          Promptate is an AI-powered prompt generator that helps you create more effective prompts for writing, artistic creation, and other projects.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2" className="border border-gray-200 dark:border-gray-700 rounded-xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm shadow-md">
        <AccordionTrigger className="px-6 hover:no-underline hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-xl transition-colors">
          How does Promptate work?
        </AccordionTrigger>
        <AccordionContent className="px-6 pb-4">
          Promptate uses advanced natural language processing and machine learning algorithms to generate unique, personalized prompts based on your input and preferences. Simply enter a few keywords or a brief description, and Promptate will provide you with various creative inspirations.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3" className="border border-gray-200 dark:border-gray-700 rounded-xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm shadow-md">
        <AccordionTrigger className="px-6 hover:no-underline hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-xl transition-colors">
          Is Promptate free?
        </AccordionTrigger>
        <AccordionContent className="px-6 pb-4">
          Yes, Promptate is completely free to use. We believe everyone should have access to creative tools for inspiration, which is why we offer our service at no cost.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
