import { motion } from "framer-motion";

const Hello = () => {
  const text =
    "A versatile and passionate full-stack developer with a strong foundation in both front-end and back-end technologies".split(
      " ",
    );

  return (
    <div className="flex flex-col w-full items-center justify-center pt-8 gap-6">
      <div className="text-[76px] font-bold">
        <span className="bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 bg-clip-text text-transparent pr-4">
          Hi, I'm Max Levchuk
        </span>
        <span>👋</span>
      </div>

      <div className="text-3xl max-w-[600px] font-light text-center">
        {text.map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: i / 10,
            }}
            key={el + i}
          >
            {el + " "}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default Hello;
