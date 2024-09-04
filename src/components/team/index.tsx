import { users } from "../../constants";
import Title from "../../ui/title";
import Member from './Member';

export default function Team(){
    return(
        <div className="bg-white p-3 rounded-2xl dark:bg-gray-600 dark:text-gray-300 flex-1 flex-col gap-5 flex">
            <Title>Usuários mais ativos</Title>
            {users.map((user,index)=>(
                <Member key={index} user={user} />
            ))}
        </div>
    )
}