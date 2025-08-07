  "use client";
import Image from "next/image";
import HeroImage from "@image/Me.png";
import { Button } from "@components/ui/button";
import Link from "next/link";
import {motion} from "framer-motion"; 

export default function Hero() {
  return (
    <section className="px-4 py-16 mt-24">
      <div
        data-test-id="hero-container"
        className="hero-container max-w-[979px] mx-auto w-full text-center grid gap-8"
      >
        <motion.div 
        className="mx-auto"
         animate={{ rotate: 360 }}
         transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <Image
            src={HeroImage}
            alt="hero_image"
            width={231}
            height={231}
            loading="lazy"
            quality={100}
            className="rounded-full w-[150px] sm:w-[180px] md:w-[231px] h-auto mx-auto border border-[#585858]"
          />
        </motion.div>

        <div className="text-[#E1E1E1] space-y-3">
          <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl">
            Uttam Pun!
          </h1>
          <p className="font-semibold text-xl sm:text-2xl md:text-3xl">
            I do code &{" "}
            <span className="bg-gradient-to-r from-[#C11E1E] to-[#C9C9C9] bg-clip-text text-transparent">
              design stuffs
            </span>
          </p>
        </div>

        <p className="text-[#E1E1E1] font-medium text-sm sm:text-base leading-relaxed max-w-[700px] mx-auto">
          Passionate Full Stack Developer with a focus on React, Next.js, React
          Native, and Laravel + MySQL development — dedicated to crafting
          elegant and user-friendly interfaces for web and mobile applications.
        </p>

        {/* CTA Button */}
        <div>
          <Button
            asChild
            className="bg-black border border-[#585858] text-white px-6 py-3 rounded-full hover:bg-[#1a1a1a] transition font-medium"
          >
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
