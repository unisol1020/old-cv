import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Menu from "./Menu";
import { ModeToggle } from "./ModeToggle";

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
    <header className="sticky top-2 z-50 w-full flex justify-center p-2 md:p-0">
      <div
        className={cn(
          "container pl-4 pr-2 md:pl-8 md:pr-4 rounded-full flex flex-row justify-between h-16 max-w-screen-xl items-center border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-500",
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
