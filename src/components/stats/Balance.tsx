import { FiSend } from "react-icons/fi";
import Title from "../../ui/title";
import { BarChart } from "./BarChart";

interface DarkModeProps {
    darkMode: boolean;
  }
export default function Balence({ darkMode }: DarkModeProps){
    return (
        <div className="bg-white p-5 xl:w-2/3 rounded-2xl dark:bg-gray-600 dark:text-gray-300 flex-1">
            <div className="flex justify-between items-center">
                <Title>Balanço</Title>
                <FiSend className="bg-gray-500 p-2 rounded-full text-gray-300 w-8 h-8"/>
            </div>
            <div>
                <h1 className="font-bold text-2xl">$600,000<span className="font-medium text-xl"> (USD)</span></h1>
                <span>Julho de 2024</span>
            </div>
            <BarChart darkMode={darkMode}/>
        </div>
    )
}