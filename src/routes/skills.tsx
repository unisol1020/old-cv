import Skill from "@/components/Skill";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import skillsOptions from "@/const/skills";
import { useEffect, useState } from "react";

const SkillsPage = () => {
  const [skills, setSkills] = useState(skillsOptions);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    setSkills(
      skillsOptions.filter((skill) =>
        skill.label.toLowerCase().includes(search.toLowerCase()),
      ),
    );
  }, [search]);

  return (
    <div className="flex flex-col gap-20 items-center pt-20">
      <div className="w-full flex flex-row justify-between">
        <div className="text-3xl font-bold w-full">All my skills 🛠</div>

        <Input
          className="max-w-64"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

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
