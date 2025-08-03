"use client";

import { useState, ReactNode } from "react";

type AccordionProps = {
  title: string;
  children: ReactNode;
};

export function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button className="w-full py-4 text-left font-semibold" onClick={() => setIsOpen(!isOpen)}>
        {title}
      </button>
      {isOpen && <div className="pb-4">{children}</div>}
    </div>
  );
}
