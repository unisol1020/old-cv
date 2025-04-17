import { motion } from "framer-motion";
import { Hand, Sparkles } from "lucide-react";

const Hello = () => {
  const text =
    "A versatile and passionate full-stack developer with a strong foundation in both front-end and back-end technologies".split(
      " ",
    );

  const waveAnimation = {
    initial: { rotateZ: 0 },
    animate: {
      rotateZ: [0, 20, -10, 15, -5, 0],
      transition: {
        delay: 1,
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop" as const,
        repeatDelay: 5,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col w-full items-center justify-center pt-8 gap-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative text-[66px] md:text-[76px] lg:text-[86px] font-bold flex flex-wrap items-center justify-center text-center px-2 md:px-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="absolute -top-8 -right-6 md:top-0 md:right-10 text-yellow-400 opacity-80"
          animate={{
            rotate: [0, 5, -5, 0],
            scale: [1, 1.2, 1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <Sparkles className="w-12 h-12" />
        </motion.div>

        <span className="bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 bg-clip-text text-transparent pr-2 md:pr-4 drop-shadow-sm">
          Hi, I'm Max Levchuk
        </span>

        <motion.div
          className="origin-bottom"
          initial="initial"
          animate="animate"
          variants={waveAnimation}
        >
          <Hand className="size-20 text-yellow-400" strokeWidth={1.5} />
        </motion.div>
      </motion.div>

      <motion.div
        className="text-xl md:text-2xl lg:text-3xl max-w-[800px] font-light text-center px-4 text-muted-foreground"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {text.map((word, i) => (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.2,
              delay: 0.8 + i / 15,
            }}
            key={word + i}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Hello;
