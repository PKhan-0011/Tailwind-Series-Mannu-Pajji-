"use client";
import Grid from "@/common/grid";

export default function Home() {
  //const { theme, setTheme } = useTheme();

  return (
    <>
      {/* <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="absolute flex items-center justify-center top-4 right-4"
      >
        {theme == "light" ? <SunIcon /> : <MoonIcon />}
      </button> */}
      <Grid />
    </>
  );
}
