import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" text-white">
    
      <div className="container max-w-[979px] mx-auto px-4 py-8">
        <div className="flex justify-center items-center gap-6">
          <Link
            href="https://github.com/uttampun44/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={24} className="text-gray-300 hover:text-white transition-colors" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/uttampun/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} className="text-gray-300 hover:text-white transition-colors" />
          </Link>
        </div>
      </div>

    
      <div className="border-t border-gray-700">
        <div className="text-center py-4 text-sm font-normal text-gray-400">
          © {new Date().getFullYear()} Uttam Pun. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
