import Experience from "@/components/Experience";
import { Card, CardContent } from "@/components/ui/card";
import experience from "@/const/experience";
import { motion } from "framer-motion";

const ExperiencePage = () => {
  return (
    <div className="flex flex-col gap-20 items-center pt-20">
      <div className="text-3xl font-bold flex items-center gap-2">
        My experience
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full"
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
        {experience.map((e) => (
          <motion.div
            key={e.title}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
            }}
          >
            <Card className="h-full">
              <CardContent className="h-full flex justify-center">
                <Experience {...e} />
              </CardContent>
            </Card>
          </motion.div>
        ))}

        <Card className="h-full">
          <CardContent className="h-full flex justify-center items-center">
            Coming soon...
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default ExperiencePage;
