import skills from "@/const/skills";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import Skill from "./Skill";

const SkillsPreview = () => {
  return (
    <div className="flex flex-col gap-10 items-center">
      <div className="text-3xl font-bold">Skills</div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        {skills.slice(0, 12).map((skill) => (
          <Skill key={skill.label} {...skill} />
        ))}
      </div>

      <Link to="/skills">
        <Button variant="outline">Check my all skills 🛠</Button>
      </Link>
    </div>
  );
};

export default SkillsPreview;
