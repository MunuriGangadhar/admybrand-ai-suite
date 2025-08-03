"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Input } from "./ui/Input"; // Reuse from component library
import { Card } from "./ui/Card";

const categories = ["All", "AI Tips", "Marketing Guides", "Case Studies"];
const resources = [
  { title: "AI in Marketing 2025", desc: "Expert insights on trends.", category: "AI Tips", img: "/blog1.jpg" },
  { title: "Ultimate Guide to Campaigns", desc: "Step-by-step strategies.", category: "Marketing Guides", img: "/blog2.jpg" },
  { title: "Success Stories", desc: "Real-world case studies.", category: "Case Studies", img: "/blog3.jpg" },
  // Add 5+ more for a fuller section
];

export default function BlogResources() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const filteredResources = resources.filter(
    (res) => (filter === "All" || res.category === filter) && res.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Blog & Resources
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="flex gap-4 mb-4 md:mb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full ${filter === cat ? "bg-blue-600 text-white" : "bg-gray-200"}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <Input
            label=""
            placeholder="Search resources..."
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} // Added explicit type here
            className="max-w-xs"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredResources.map((res, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="glass overflow-hidden">
                <Image src={res.img} alt={res.title} width={400} height={250} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{res.title}</h3>
                  <p className="text-gray-600 mb-2">{res.desc}</p>
                  <span className="text-sm text-blue-600">{res.category}</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
