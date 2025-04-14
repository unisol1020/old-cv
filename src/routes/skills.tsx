import Skill from "@/components/Skill";
import { Card, CardContent } from "@/components/ui/card";
import skills from "@/const/skills";
import { motion } from "framer-motion";

const SkillsPage = () => {
  return (
    <div className="flex flex-col gap-20 items-center pt-20">
      <div className="text-3xl font-bold">All my skills 🛠</div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
            }}
          >
            <Card className="h-full">
              <CardContent className="h-full flex justify-center">
                <Skill {...skill} />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsPage;
