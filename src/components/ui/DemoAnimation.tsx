import { motion } from "framer-motion";

export function DemoAnimation() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Product Demo</h2>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/placeholder" // Replace with real video
            title="Demo"
            allowFullScreen
          />
        </motion.div>
      </div>
    </section>
  );
}
