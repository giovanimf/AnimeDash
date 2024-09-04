import Card from "./Card"; // Importação padrão
import { empolyeesData } from "../../constants";
import Balence from "./Balance";

interface DarkModeProps {
    darkMode: boolean;
}

export function Stats({ darkMode }: DarkModeProps){
    return(
        <div className="flex flex-col md:flex-row gap-5">
            <div className="xl:w-1/3 flex flex-col gap-4 h-full">
                    {empolyeesData.map((data,index)=>(
                        <Card key={index} data={data}/>
                    ))}
            </div>
            <Balence darkMode={darkMode} />
        </div>
    )
}