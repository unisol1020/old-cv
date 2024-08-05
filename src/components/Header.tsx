import { ModeToggle } from "./ModeToggle";

const Header = () => {
  return (
    <header className="sticky top-2 z-50 w-full">
      <div className="container rounded-3xl flex h-16 max-w-screen-xl items-center border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="w-full"></div>
        <div>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
