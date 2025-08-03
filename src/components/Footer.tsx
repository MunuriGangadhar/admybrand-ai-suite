import { FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 bg-gray-800 text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2025 ADmyBRAND AI Suite</p>
        <nav className="flex gap-4 my-4 md:my-0">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </nav>
        <div className="flex gap-4">
          <FaTwitter />
          <FaLinkedin />
        </div>
      </div>
    </footer>
  );
}
