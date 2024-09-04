import { links } from '../../constants';
import { LinkItem } from './LinkItem';
import { useState } from 'react';
import { IoIosLogOut,IoIosSettings } from "react-icons/io";
import { VscSymbolClass } from "react-icons/vsc";


interface isSidebarOpenProps{
    isSidebarOpen:boolean;
}

export function Sidebar({isSidebarOpen}:isSidebarOpenProps){
        // Estado que controla a visibilidade de cada dropdown
        const [openDropdowns, setOpenDropdowns] = useState<{ [key: number]: boolean }>({});

        // Função para alternar o dropdown específico
        const toggleDropdown = (index: number) => {
            setOpenDropdowns((prev) => ({
                ...prev,
                [index]: !prev[index], // Alterna o dropdown específico
            }));
        };

    return(
        <aside className={`fixed left-0 top-0 z-40 w-64 h-screen pt-20 bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700 transition-transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}> 
            <div className="h-full px-3 pb-4 overflow-y-auto">
                <ul className="space-y-2 font-semibold">
                    {links.map((link, index)=>(
                        <LinkItem key={index} {...link}/>
                    ))}
                    <li>
                        <button
                            onClick={() => toggleDropdown(0)} // Índice 0 para o primeiro dropdown
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left"
                        >
                            <VscSymbolClass  className="mr-2" /> 
                            <span className="flex-1 me-3">Dropdown</span>
                            <svg className={`w-5 h-5 transition-transform ${openDropdowns[0] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>

                        {/* Itens do Dropdown */}
                        {openDropdowns[0] && (
                            <ul className="pl-8 mt-2 space-y-2">
                                <li>
                                    <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Opção 1</a>
                                </li>
                                <li>
                                    <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Opção 2</a>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <IoIosLogOut className="mr-2"/> <span className="flex-1 me-3">Sair</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    )       
}