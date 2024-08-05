import menu from "@/const/menu";
import { Link } from "react-router-dom";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

const Menu = () => {
  return (
    <div className="flex flex-row gap-5">
      {menu.map((item) => (
        <Link to={item.link} key={item.link}>
          <HoverCard>
            <HoverCardTrigger>
              <div className="text-2xl p-2">{item.title}</div>
            </HoverCardTrigger>
            <HoverCardContent>{item.overlayText}</HoverCardContent>
          </HoverCard>
        </Link>
      ))}
    </div>
  );
};

export default Menu;
