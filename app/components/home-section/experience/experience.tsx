"use client";

import WorkExperience from "@components/workexperience";
import { workData } from "@data/workData";
import { motion } from "framer-motion";

export default function ExperienceSection() {
  return (
    <section className="py-24 px-4" data-testid="experience-section">
      <motion.div
        className="experience-container max-w-[979px] mx-auto w-full text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <h1 className="text-white uppercase font-bold text-4xl sm:text-5xl md:text-6xl mb-2">
          Experience
        </h1>
        <p className="bg-gradient-to-r from-[#C11E1E] to-[#C9C9C9] bg-clip-text text-transparent uppercase mb-10 text-base sm:text-lg">
          Explore Now.
        </p>

        <div className="grid gap-10" data-testid="experience-list">
          {workData.map((work, index) => (
            <WorkExperience
              key={index}
              title={work.title}
              date={work.date}
              descriptionOne={work.descriptionOne}
              descriptionTwo={work.descriptionTwo}
              technologies={work.techonologies}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
