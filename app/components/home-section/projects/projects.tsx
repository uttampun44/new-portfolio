import { projectsData } from "@data/projectsData";
import { Card, CardContent } from "@components/ui/card";
import Link from "next/link";

export default function Projects() {
  return (
    <section className="py-24 px-4">
      <div
        data-test-id="projects-container"
        className="max-w-[979px] mx-auto w-full"
      >
        <div className="text-center">
          <h1 className="text-white uppercase font-bold text-4xl sm:text-5xl md:text-6xl mb-2">
            Projects
          </h1>
          <p className="bg-gradient-to-r from-[#C11E1E] to-[#C9C9C9] bg-clip-text text-transparent uppercase text-base sm:text-lg">
            Explore Now.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 mt-14">
          {projectsData.map((project, index) => (
            <Link
              key={index}
              href={project.link}
              className="transition-transform hover:scale-[1.01] hover:shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card className="bg-[#1a1a1a] border border-[#2c2c2c]">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="flex-shrink-0 w-32 h-20 bg-white rounded-md overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="text-left">
                    <h6 className="text-white font-bold text-lg">
                      {project.name}
                    </h6>
                    <p className="text-[#878787] text-sm">
                      {project.developedBy}
                    </p>
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
