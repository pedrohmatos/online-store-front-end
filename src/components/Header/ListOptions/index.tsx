import { FaHouse } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

type DisplayOptionsType = {
    displayOptions: string;
}

type IsActiveType = {
    isActive: boolean;
};

const ListOptions = ({ displayOptions }: DisplayOptionsType) => {

    const navLinkCssClasses = ({ isActive }: IsActiveType): string => {
        return `px-5 flex items-center gap-1 cursor-pointer hover:drop-shadow hover:border-b ${isActive ? "text-blue-500" : ""}`;
    };

    return (
        <ul className={`list-none ${displayOptions} font-medium gap-y-5`}>
            <li>
                <NavLink to={"/"} className={navLinkCssClasses}>
                    <span><FaHouse /></span> Início
                </NavLink>
            </li>
            <li className="px-5 cursor-pointer hover:drop-shadow hover:border-b">
                <NavLink to={"/celulares"} className={({ isActive }) => isActive ? "text-blue-500" : ""}>
                    Celulares
                </NavLink>
            </li>
            <li>
                <NavLink to={"/carrinho"} className={navLinkCssClasses}>
                    <span><FaShoppingCart /></span> Carrinho
                </NavLink>
            </li>
        </ul>
    )
}

export default ListOptions;