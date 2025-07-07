import WorkExperience from "@components/workexperience";
import { workData } from "@data/workData";

export default function Experience() {
  return (
    <section className="my-24">
      <div className="about-container max-w-[979px] mx-auto pb-24 w-full">
        <div className="about-grid text-center grid grid-cols-1 justify-items-center items-center">
          <h1 className="text-white text-center uppercase font-bold text-4xl sm:text-5xl md:text-6xl">
            Experience
          </h1>
          <p className="bg-gradient-to-r from-[#C11E1E] to-[#C9C9C9] bg-clip-text text-transparent uppercase">
            Explore Now.
          </p>

          <div className="experience-row">
           {
              workData.map((work, index) => (
                <WorkExperience
                  key={index}
                  title={work.title}
                  date={work.date}
                  descriptionOne={work.descriptionOne}
                  descriptionTwo={work.descriptionTwo}
                  technologies={work.techonologies} 
                />
              ))
           }
          </div>
        </div>
      </div>
    </section>
  );
}
