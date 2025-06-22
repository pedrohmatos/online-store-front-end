import { useState } from "react";
import ListOptions from "./ListOptions";

const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className=" flex justify-center bg-gray-100 px-10 h-12 xl:h-14 shadow-normal relative">
            <div className="flex flex-row justify-between items-center max-w-7xl w-full">

                <p className="font-semibold">TechStore</p>

                <nav>
                    <button onClick={handleClick} className={`flex flex-col px-1.5 py-2.5 bg-slate-200 md:hidden rounded group hover:bg-stone-800 transition`}>
                        <span className={`bg-stone-800 group-hover:bg-slate-200 block md:hidden transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} ></span>
                        <span className={`bg-stone-800 group-hover:bg-slate-200 block md:hidden transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`} ></span>
                        <span className={`bg-stone-800 group-hover:bg-slate-200 block md:hidden transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`} ></span>
                    </button>

                    <aside className={`absolute transition ease-out right-10 ${isOpen ? 'translate-y-3' : '-translate-y-48'} block md:hidden p-4 bg-gray-100 w-60 rounded z-[1]`}>
                        <ListOptions
                            displayOptions="flex md:hidden flex-col"
                        />
                    </aside>

                    <ListOptions
                        displayOptions="hidden md:flex md:flex-row"
                    />
                </nav>
            </div>
        </header>
    )
}

export default Header;