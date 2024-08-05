import skills from "@/const/skills";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import Skill from "./Skill";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SkillsPreview = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className="flex flex-col gap-10 items-center">
      <div className="text-3xl font-bold">Skills</div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2 }}
      >
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              opacity: 0,
              scale: 0.8,
            },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {skills.slice(0, 12).map((skill) => (
            <Skill key={skill.label} {...skill} />
          ))}
        </motion.div>
      </motion.div>

      <Link to="/skills">
        <Button variant="outline">Check my all skills 🛠</Button>
      </Link>
    </div>
  );
};

export default SkillsPreview;
