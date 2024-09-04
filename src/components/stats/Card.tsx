import { EmpolyeesDataProps } from "../../constants";

interface DataProps {
  data: EmpolyeesDataProps;
}

export default function Card({ data }: DataProps) {
  return (
    <div className="bg-white p-6 rounded-2xl flex items-center gap-4 dark:bg-gray-600 dark:text-gray-200">
      <span className={`${data.bgColor} px-3 py-6 text-2xl rounded-2xl dark:bg-gray-500`}>
        <data.icon />
      </span>
      <div>
        <h2 className="text-2xl">
          <span className="text-2xl font-bold">{data.count}</span>/500
        </h2>
        <p className="font-bold">{data.title}</p>
      </div>
    </div>
  );
}
