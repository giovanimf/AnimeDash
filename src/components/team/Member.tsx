import { UserProps } from "../../constants";

interface UserPropsUsaraqui {
    user:UserProps,
}
  
  export default function Member({ user }:UserPropsUsaraqui) {
    return (
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={user.image} alt={user.name} className="w-12 h-12 rounded-full flex object-cover" />
          <div>
            <h2 className="font-bold">{user.name}</h2>
            <span className="font-semibold text-gray-400 text-sm">
              {user.country}
            </span>
          </div>
        </div>
        <span className={`${user.bgColor} p-3 rounded-full text-xs text-gray-700 font-semibold dark:bg-gray-500 dark:text-gray-300`}>
          {user.role}
        </span>
      </div>
    );
  }
  