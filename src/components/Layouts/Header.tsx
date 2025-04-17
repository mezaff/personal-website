import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "../theme-provider";

const Header = () => {
  const { setTheme } = useTheme();
  const theme = localStorage.getItem("vite-ui-theme" as string) || null;
  return (
    <header className="border-border flex h-16 items-center justify-between border-b-2 px-20">
      <a href="/" className="text-2xl font-bold">
        Zaf<span className="text-[#58C4DC]">Code</span>.
      </a>
      <ul className="flex flex-row items-center gap-8 text-lg font-semibold">
        <li>Home</li>
        <li>About Me</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="flex flex-row items-center gap-1">
        <Button className="bg-[#58C4DC] hover:bg-[#58C4DC]/80 hover:scale-105 text-white font-semibold transition-all duration-200 ease-in-out">
          Connect With Me
        </Button>
        {theme === "dark" ? (
          <Button
            variant={"link"}
            onClick={() => {
              setTheme("light");
            }}
          >
            <Sun />
          </Button>
        ) : (
          <Button
            variant={"link"}
            onClick={() => {
              setTheme("dark");
            }}
          >
            <Moon />
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
