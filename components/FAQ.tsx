import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full text-gray-300">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is Promptate?</AccordionTrigger>
        <AccordionContent>
          Promptate is an AI-powered prompt generator that helps you create
          engaging and effective prompts for your writing, art, and other
          creative projects.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How does Promptate work?</AccordionTrigger>
        <AccordionContent>
          Promptate uses advanced natural language processing and machine
          learning algorithms to generate unique and personalized prompts based
          on your input and preferences. Simply enter a few keywords or a brief
          description, and Promptate will provide you with a variety of prompts
          to inspire your creativity.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is Promptate free to use?</AccordionTrigger>
        <AccordionContent>
          Yes, Promptate is completely free to use. We believe that everyone
          should have access to the tools they need to unleash their creativity,
          which is why we offer our service at no cost.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
