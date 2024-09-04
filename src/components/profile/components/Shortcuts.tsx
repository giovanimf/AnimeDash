import { IoIosArrowForward } from "react-icons/io";
import { shortcutLink } from "../../../constants";
import Title from "../../../ui/title";

export function ShortCuts(){
    return(
        <div className="flex gap-4 flex-col bg-white rounded-lg p-4 dark:bg-gray-600">
            <Title>Atalhos</Title>
            {shortcutLink.map((List,index)=>(
                <div
                    key={index}
                    className="flex justify-between items-center cursor-pointer rounded-sm"
                >
                    <div className="flex gap-4 items-center">
                        <span className="bg-blue-100 p-2 rounded-full w-8 h-8 flex items-center justify-center dark:bg-gray-800 dark:text-gray-300">
                            <List.icon/>
                        </span>
                        <h3 className="font-medium dark:text-gray-300">{List.title}</h3>
                    </div>
                    <span className="bg-gray-300 p-2 rounded-sm dark:bg-gray-700 dark:text-gray-300 hover:mr-3 transition-all duration-500">
                        <IoIosArrowForward/>
                    </span>
                </div>
            ))}
        </div>
    )
}