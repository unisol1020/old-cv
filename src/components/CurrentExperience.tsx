import experience from "@/const/experience";
import { Button } from "./ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

const CurrentExperience = () => {
  const [exp] = useState(experience.at(-1));

  return (
    <div className="flex flex-col gap-10 items-center">
      <div className="text-3xl font-bold">I`m working at</div>

      <div className="flex flex-col gap-5 items-center w-full">
        <div className="text-sm">
          <span className="pr-1">🗓️</span>
          {exp?.startDate + " - " + exp?.endDate}
        </div>

        <div className="text-sm">
          <span className="pr-1">📍</span>
          {exp?.location}
        </div>

        <div className="flex flex-row gap-2 items-center">
          <img className="size-6" src={exp?.logo} alt={exp?.company} />

          <div className="text-2xl font-bold">
            <a
              className="hover:underline"
              href="https://www.linkedin.com/company/yukon-software-ukraine/"
              target="_blank"
            >
              {exp?.company}
            </a>
          </div>
        </div>

        <div className="text-base font-bold">
          <a
            className="hover:underline"
            href="https://www.linkedin.com/in/max-levchuk-69109a1ab/"
            target="_blank"
          >
            {exp?.title}
          </a>
        </div>
      </div>

      <Link to="/experience">
        <Button variant="outline">View my experience 👨‍💻</Button>
      </Link>
    </div>
  );
};

export default CurrentExperience;
