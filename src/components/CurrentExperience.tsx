import experience from "@/const/experience";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import Experience from "./Experience";

const CurrentExperience = () => {
  return (
    <div className="flex flex-col gap-10 items-center">
      <div className="text-3xl font-bold">I`m working at</div>
      <Experience {...experience[0]} />
      <Link to="/experience">
        <Button variant="outline" size="lg">
          View my experience 👨‍💻
        </Button>
      </Link>
    </div>
  );
};

export default CurrentExperience;
