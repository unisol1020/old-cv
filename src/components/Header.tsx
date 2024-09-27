import { useEffect, useState } from "react";
import { ModeToggle } from "./ModeToggle";
import { cn } from "@/lib/utils";
import Menu from "./Menu";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-2 z-50 w-full">
      <div
        className={cn(
          "container rounded-full flex flex-row justify-between h-16 max-w-screen-xl items-center border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-500",
          scrolled && "border border-[cadetblue]",
        )}
      >
        <div className="flex flex-row items-center gap-10">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "border border-[cadetblue] rounded-full transition-all duration-200"
                : ""
            }
          >
            <img
              className="size-10 rounded-full"
              src="https://avatars.githubusercontent.com/u/66306912?v=4"
              alt="profile-pic"
            />
          </NavLink>

          <Menu />
        </div>

        <div>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
