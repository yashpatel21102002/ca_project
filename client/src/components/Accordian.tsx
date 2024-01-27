import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Accordian = () => {
  return (
    <div className="w-full lg:w-1/2 flex flex-col py-8 gap-6">
      <h1 className="font-bold text-4xl text-center">FAQS</h1>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="lg:text-xl px-1">
            <div className="text-center">
              What services does your CA firm provide
            </div>
          </AccordionTrigger>
          
          <AccordionContent>
            <div className="text-justify px-1">
            Our CA firm offers a comprehensive range of services, including
            auditing, tax planning, financial consulting, and business advisory
            services tailored to meet the unique needs of businesses.

            </div>
            
          </AccordionContent>
          
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="lg:text-xl px-1">
            <div className="text-center">
              What services does your CA firm provide
            </div>
          </AccordionTrigger>
          
          <AccordionContent>
            <div className="text-justify px-1">
            Our CA firm offers a comprehensive range of services, including
            auditing, tax planning, financial consulting, and business advisory
            services tailored to meet the unique needs of businesses.

            </div>
            
          </AccordionContent>
          
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="lg:text-xl px-1">
            <div className="text-center">
              What services does your CA firm provide
            </div>
          </AccordionTrigger>
          
          <AccordionContent>
            <div className="text-justify px-1">
            Our CA firm offers a comprehensive range of services, including
            auditing, tax planning, financial consulting, and business advisory
            services tailored to meet the unique needs of businesses.

            </div>
            
          </AccordionContent>
          
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Accordian;
