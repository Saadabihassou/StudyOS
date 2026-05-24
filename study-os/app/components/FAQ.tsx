"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is StudyOS?",
    answer:
      "StudyOS is an all-in-one study workspace designed to help students organize notes, manage tasks, and learn more efficiently.",
  },
  {
    question: "Is StudyOS free?",
    answer:
      "Yes. StudyOS offers a free plan with essential features and optional premium upgrades.",
  },
  {
    question: "Can I use StudyOS on mobile devices?",
    answer:
      "Absolutely. StudyOS works seamlessly on phones, tablets, and desktops.",
  },
  {
    question: "Does StudyOS use AI?",
    answer:
      "Yes. StudyOS includes AI-powered study assistance, summaries, and productivity features.",
  },
  {
    question: "Who is StudyOS for?",
    answer:
      "Students, university learners, and anyone looking for a better way to organize their learning.",
  },
  {
    question: "Can I import my existing notes?",
    answer:
      "Yes. You can easily bring your notes and study materials into StudyOS.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 text-gray-200 z-50">
      <div className="container mx-auto px-6">
        {/* Header */}

        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center px-4 py-2 text-md tracking-[2px] font-semibold text-sky-400 rounded-xl">
            FAQ
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold">
            Questions before you <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-blue-500 border-b-2 pb-1 border-sky-400/30">start?</span>
          </h2>

          <p className="mt-5 text-lg text-gray-400">
            Everything you need to know about StudyOS.
          </p>
        </div>

        {/* FAQ List */}

        <Accordion
          
          className="max-w-4xl mx-auto mt-16 grid gap-4 grid-cols-1"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="
                border-b
                border-sky-900
                px-6
                transition-all
                duration-300
                hover:border-primary/40
                hover:bg-muted/30
              "
            >
              <AccordionTrigger className="py-6 text-left text-lg font-medium hover:no-underline">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="pb-6 text-gray-400 text-base leading-relaxed transition-opacity duration-300">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}