import Image from "next/image";
import { Button } from "./ui/Button";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white overflow-hidden">
      <div className="glass absolute inset-0" />
      <div className="z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">ADmyBRAND AI Suite</h1>
        <p className="text-xl md:text-2xl mb-8">Revolutionize your marketing with AI power</p>
        <Button variant="primary">Get Started</Button>
      </div>
      <Image
        src="/hero.jpg"
        alt="Hero background"
        fill
        className="object-cover opacity-50"
        priority
      />
    </section>
  );
}
