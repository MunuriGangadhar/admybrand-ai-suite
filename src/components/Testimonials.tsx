"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Button } from "./ui/Button";

const testimonials = [
  {
    quote: "ADmyBRAND AI Suite transformed our marketing workflow completely! Highly recommended.",
    author: "Jane Smith",
    photo: "/jane.jpg",
    role: "Marketing Manager",
  },
  {
    quote: "The AI-powered features saved us so much time and boosted our ROI.",
    author: "Michael Lee",
    photo: "/michael.jpg",
    role: "CEO",
  },
  {
    quote: "Fantastic tool with excellent customer support.",
    author: "Sophia Brown",
    photo: "/sophia.jpg",
    role: "Product Owner",
  },
  {
    quote: "Our campaigns have never been more effective. Truly a game-changer.",
    author: "David Wilson",
    photo: "/david.jpg",
    role: "Growth Hacker",
  },
  {
    quote: "The interactive pricing calculator is a gem. Makes budgeting easy.",
    author: "Emma Johnson",
    photo: "/emma.jpg",
    role: "Finance Lead",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="relative bg-gradient-to-r from-blue-50 to-purple-50 glass p-8 rounded-xl shadow-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <blockquote className="italic text-lg mb-6">“{testimonials[current].quote}”</blockquote>
              <div className="flex items-center justify-center gap-4">
                <Image
                  src={testimonials[current].photo}
                  alt={testimonials[current].author}
                  width={64}
                  height={64}
                  className="rounded-full object-cover"
                  priority
                />
                <div>
                  <p className="font-semibold">{testimonials[current].author}</p>
                  <p className="text-sm text-gray-600">{testimonials[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4">
            <Button
              variant="secondary"
              onClick={prevTestimonial}
              aria-label="Previous Testimonial"
              className="opacity-70 hover:opacity-100"
            >
              <FaChevronLeft size={20} />
            </Button>
            <Button
              variant="secondary"
              onClick={nextTestimonial}
              aria-label="Next Testimonial"
              className="opacity-70 hover:opacity-100"
            >
              <FaChevronRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
