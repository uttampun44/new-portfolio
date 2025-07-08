import { projectsData } from "@data/projectsData";
import { Card, CardContent } from "@components/ui/card";
import Link from "next/link";

export default function Projects() {
  return (
    <section>
      <div data-test-id="projects-container" className="project-container max-w-[979px] mx-auto pb-24 w-full">
        <div className="about-grid text-center grid grid-cols-1 justify-items-center items-center">
          <h1 className="text-white text-center uppercase font-bold text-4xl sm:text-5xl md:text-6xl">
            Projects
          </h1>
          <p className="bg-gradient-to-r from-[#C11E1E] to-[#C9C9C9] bg-clip-text text-transparent uppercase">
            Explore Now.
          </p>
        </div>

        <div className="projectsGrid grid md:grid-cols-2 gap-4 mt-14">
          {projectsData.map((project, index) => (
            <Link
              key={index}
              href={project.link}
              className="project-card">
                <Card
              key={index}
              className="border-none"
            >
              <CardContent className="flex items-center gap-4">
                 <div className="img flex-shrink-0 bg-white w-32 h-20 rounded-md">
                   <img src={project.image} alt="project_image" className="w-full h-full" />
                 </div>
                 <div className="project-name flex-1">
                    <h6 className="text-base font-bold text-white">{project.name}</h6>
                    <p className="text-[#878787] text-sm">{project.developedBy}</p>
                 </div>
              </CardContent>
              </Card>
              </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
