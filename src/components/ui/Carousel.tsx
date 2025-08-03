"use client";

import { useState, ReactNode } from "react";

type CarouselProps = {
  items: ReactNode[];
};

export function Carousel({ items }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        {items.map((item, i) => (
          <div key={i} className={`min-w-full transition-transform duration-300 ${i === current ? "translate-x-0" : "translate-x-full"}`}>
            {item}
          </div>
        ))}
      </div>
      <button onClick={() => setCurrent((prev) => (prev - 1 + items.length) % items.length)}>Prev</button>
      <button onClick={() => setCurrent((prev) => (prev + 1) % items.length)}>Next</button>
    </div>
  );
}
