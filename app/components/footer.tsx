import { Facebook, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
     <footer>
       <div className="container max-w-[979px] mx-auto py-8">
           <div className="icon-row flex justify-center items-center gap-4">
              <Link href="https://github.com/uttampun44/"><Github className="icon" size={24} style={{color: "#E1E1E1"}} /></Link>
              <Link href="https://www.linkedin.com/notifications/?filter=all"><Linkedin className="icon" size={24} style={{color: "#E1E1E1"}} /></Link>
           </div>
       </div>
       <div className="copyrights boder-2 border-[#E1E1E1] border-t-[1px] w-full">
          <div className="text-copyrights text-white text-center py-4 font-normal text-sm">
            Copyright © 2023 Uttam Pun. All rights reserved.
          </div>
       </div>
     </footer>
  )
}