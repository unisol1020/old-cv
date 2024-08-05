import { Mouse } from "lucide-react";

const ScrollForMoreInfo = () => {
  return (
    <div className="flex-row gap-3 items-center w-full justify-center opacity-70 absolute bottom-0 animate-bounce hidden md:flex">
      <div>Scroll for more</div>

      <Mouse />
    </div>
  );
};

export default ScrollForMoreInfo;
