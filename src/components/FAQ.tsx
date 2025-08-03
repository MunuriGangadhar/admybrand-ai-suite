"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Accordion } from "./ui/Accordion"; // Reuse from component library
import { Input } from "./ui/Input";
import { FaQuestionCircle } from "react-icons/fa"; // For icons

const faqCategories = {
  General: [
    { question: "What is ADmyBRAND AI Suite?", answer: "An AI-powered marketing tool for automation and insights. Learn more [here](#)." },
    { question: "How do I get started?", answer: "Sign up via our hero section. Check our quick guide image: <Image src='/faq-guide.jpg' alt='Guide' width={300} height={200} />" },
  ],
  Pricing: [
    { question: "What are the pricing tiers?", answer: "Basic: $9/mo, Pro: $29/mo, Enterprise: $99/mo. Use our calculator for custom quotes." },
  ],
  Support: [
    { question: "How can I contact support?", answer: "Via the contact form or email at support@admybrand.com." },
    // Add 5+ more across categories for depth
  ],
};

export default function FAQ() {
  const [search, setSearch] = useState("");
  const filteredFAQs = Object.entries(faqCategories).reduce((acc, [cat, items]) => {
    const filteredItems = items.filter((faq) => faq.question.toLowerCase().includes(search.toLowerCase()));
    if (filteredItems.length > 0) acc[cat] = filteredItems;
    return acc;
  }, {} as typeof faqCategories);

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Frequently Asked Questions
        </motion.h2>
        
        {Object.entries(filteredFAQs).map(([category, faqs], catIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: catIndex * 0.2 }}
            className="mb-8"
          >
            <h3 className="text-2xl font-semibold mb-4 flex items-center"><FaQuestionCircle className="mr-2" /> {category}</h3>
            {faqs.map((faq, i) => (
              <Accordion key={i} title={faq.question}>
                <p>{faq.answer}</p>
              </Accordion>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
