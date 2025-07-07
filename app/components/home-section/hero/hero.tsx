import Image from "next/image";
import HeroImage from "@image/Me.png";
import { Button } from "@components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="px-4 py-12">
      <div className="hero-container max-w-[979px] mx-auto w-full">
        <div className="hero-grid grid grid-cols-1 justify-items-center gap-6 items-center text-center">
          <div className="hero-image">
            <Image
              src={HeroImage}
              alt="hero_image"
              width={231}
              height={231}
              loading="lazy"
              quality={100}
              className="w-[150px] sm:w-[180px] md:w-[231px] h-auto mx-auto"
            />
          </div>

          <div className="details pt-6 text-[#878787]">
            <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl">
              Uttam Pun!
            </h1>
            <p className="font-semibold text-xl sm:text-2xl md:text-3xl my-2.5">
              I do code &{" "}
              <span className="bg-gradient-to-r from-[#C11E1E] to-[#C9C9C9] bg-clip-text text-transparent">
                design stuffs
              </span>
            </p>
          </div>

          <div className="passionate my-5 mb-7 text-[#E1E1E1] font-medium text-sm sm:text-base leading-relaxed px-4">
            Passionate Full Stack Developer with a focus on React, Next.js, React Native,
            and Laravel + MySQL development — dedicated to crafting elegant and user-friendly
            interfaces for web and mobile applications.
          </div>

          <div className="contact-me">
            <Button
              asChild
              className="bg-black rounded-full py-3 px-6 text-white border border-[#585858] font-medium hover:bg-[#1a1a1a] transition"
            >
              <Link href="/contact" className="text-white">
                Contact Me
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </section>

  );
}
