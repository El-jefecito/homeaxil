import { useTheme } from "next-themes";
import { Button } from "./button";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        <SunIcon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all duration-300 dark:rotate-90 dark:scale-0" />
        <MoonIcon className="absolute w-[1.2rem] h-[1.2rem] scale-0 rotate-90 transition-all duration-300 dark:rotate-0 dark:scale-100" />
      </Button>
    </div>
  );
};

export default ThemeToggler;
