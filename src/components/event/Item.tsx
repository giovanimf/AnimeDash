import { eventProps } from "../../constants";

interface eventPropsHere{
    event:eventProps;
}
export function Item({event}:eventPropsHere){
    return(
        <div className="flex gap-5 items-normal">
            <span className="bg-gray-300 text-gray-700 p-2 rounded-lg w-auto md:w-1/6 font-bold text-center mt-1 flex items-center justify-center">
                {event.date}
            </span>
            <div className="w-4/6 md:w-5/6">
                <h1 className="text-x1 font-bold">{event.title}</h1>
                <p className="text-gray-400">{event.description}</p>
            </div>
        </div>
    )
}