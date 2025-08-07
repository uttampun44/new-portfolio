import Link from "next/link";
import { Button } from "./ui/button";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";

export default function Header() {

  const {scrollYProgress} = useScroll();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b-2 border-[#2c2c2c]">
     
      <motion.div 
        className="h-1 bg-gradient-to-r from-red-500 to-blue-500 origin-left "
        style={{ scaleX: scrollYProgress }}
      />
      
      <div className="max-w-[1168px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 pb-7 ">

        <div className="text-white text-2xl font-bold text-center sm:text-left w-full sm:w-auto">
          <Link href="/">Uttam Pun</Link>
        </div>

        <div className="flex flex-wrap justify-center sm:justify-end gap-3">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-black text-white hover:bg-transparent hover:text-white font-medium"
          >
            <Link href="/blog">Blog</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-black text-white hover:bg-transparent hover:text-white font-medium"
          >
            <Link href="/about">About me</Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-black bg-white hover:bg-gray-200 font-medium"
          >
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </div>
      
    </header>
  );
}
