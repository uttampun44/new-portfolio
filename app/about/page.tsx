import Image from "next/image";
import HeroImage from "@image/Me.png";

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center text-white px-4">
      <div className="max-w-3xl w-full text-center space-y-8">
        <div>
          <h1 className="text-5xl font-bold">ABOUT ME</h1>
          <p className="text-gray-400 mt-2 text-lg">
            Explore my journey as a developer.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-900 shadow-lg">
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
        </div>

        <p className="text-gray-300 text-base leading-relaxed">
          I’m Uttam Pun — a passionate Full Stack Developer focused on building
          user-friendly web and mobile applications using React, Next.js,
          React Native, Laravel, and MySQL. I love creating beautiful and
          functional UI, always pushing to stay current with modern tech trends.
        </p>

        <div className="flex justify-center">
          <a
            href="/contact"
            className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-300 transition-all"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}