import { DonutChart } from "./components/Donutchart";
import { ShortCuts } from "./components/Shortcuts";
import { User } from "./components/User";

interface DarkModeProps {
  darkMode: boolean;
}
export default function Profile({darkMode}:DarkModeProps) {
  return (
    <div className="h-fit px-2 py-4 bg-gray-200 rounded-lg w-full dark:bg-gray-700 lg:w-6 xl:w-72 flex flex-col justify-start gap-4">
      <User/>
      <ShortCuts/>
      <DonutChart darkMode={darkMode} />
    </div>
  );
}