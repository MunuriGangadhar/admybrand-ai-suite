import { motion } from "framer-motion";
import { Card } from "./ui/Card";
import { FaRobot, FaChartLine } from "react-icons/fa"; // Example icons

const features = [
  { icon: <FaRobot />, title: "AI Automation", desc: "Automate campaigns effortlessly." },
  { icon: <FaChartLine />, title: "Analytics", desc: "Real-time insights." },
  // Add 4+ more similarly
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }}>
              <Card>
                {feat.icon}
                <h3 className="text-xl font-semibold">{feat.title}</h3>
                <p>{feat.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
