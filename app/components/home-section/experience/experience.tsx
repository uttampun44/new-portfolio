import WorkExperience from "@components/workexperience";
import { workData } from "@data/workData";

export default function Experience() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-[979px] mx-auto w-full text-center">
     
        <h1 className="text-white uppercase font-bold text-4xl sm:text-5xl md:text-6xl mb-2">
          Experience
        </h1>
        <p className="bg-gradient-to-r from-[#C11E1E] to-[#C9C9C9] bg-clip-text text-transparent uppercase mb-10 text-base sm:text-lg">
          Explore Now.
        </p>

        <div className="grid gap-10">
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
      </div>
    </section>
  );
}
