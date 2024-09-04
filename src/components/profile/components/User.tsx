import userLogo from '../../../assets/user01.jpg';

export function User(){
    return(
        <div className="flex gap-3 items-center bg-white p-4 rounded-full dark:bg-gray-600 dark:text-gray-300">
            <img src={userLogo} alt="Foto do usuário" className="h-14 w-14 rounded-full"/>
            <div>
                <h3 className='font-semibold text-xl'>Giovani Matos</h3>
                <p>Developer</p>
            </div>
        </div>
    )
}