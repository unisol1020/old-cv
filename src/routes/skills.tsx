import Skill from "@/components/Skill";
import { Card, CardContent } from "@/components/ui/card";
import skills from "@/const/skills";

const SkillsPage = () => {
  return (
    <div className="flex flex-col gap-20 items-center pt-20">
      <div className="text-3xl font-bold w-full">All my skills 🛠</div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {skills.map((skill) => (
          <Card key={skill.label}>
            <CardContent className="pt-6 h-full flex justify-center">
              <Skill {...skill} />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
