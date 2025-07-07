import { Badge } from "./ui/badge";

type WorkExperienceProps = {
  title: string;
  date: string;
  technologies: string[];
  descriptionOne?: string;
  descriptionTwo?: string;
};

export default function WorkExperience({
  title,
  date,
  descriptionOne,
  descriptionTwo,
  technologies,
}: WorkExperienceProps) {
  return (
    <div className="experience-container mt-14">
      <div className="row flex justify-between items-center">
        <div className="workTitle font-bold text-white text-lg">
          <h5>{title}</h5>
        </div>
        <div className="workDate font-light text-[#E1E1E1] text-sm">
          <span>{date}</span>
        </div>
      </div>
      <div className="description mt-8 font-normal text-[#E1E1E1] text-base text-left">
        <p>{descriptionOne}</p>
        <p className="mt-2">{descriptionTwo}</p>
      </div>
      <div className="technology-badge flex gap-2 mt-4">
        {technologies.map((technology, index) => (
          <Badge
            key={index}
            className="bg-black text-white border-[1px] border-[#E1E1E1] px-2.5 py-1.5 text-xs font-medium cursor-pointer hover:bg-[#1a1a1a] transition"
            variant="destructive"
          >
            {technology}
          </Badge>
        ))}
      </div>
    </div>
  );
}
