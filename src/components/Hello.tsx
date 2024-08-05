const Hello = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center pt-8 gap-6">
      <div className="text-[76px] font-bold">
        <span className="bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 bg-clip-text text-transparent pr-4">
          Hi, I'm Max Levchuk
        </span>
        <span>👋</span>
      </div>

      <div className="text-3xl max-w-[600px] font-light text-center">
        A versatile and passionate full-stack developer with a strong foundation
        in both front-end and back-end technologies
      </div>
    </div>
  );
};

export default Hello;
