import { ReactNode } from "react";

type ButtonType = {
    children: string | ReactNode;
    handleClick: () => void;
}

const Button = ({ children, handleClick }: ButtonType) => {

    function effect() {
        handleClick();
    }


    return (
        <button onClick={effect} type="button" className="bg-light-blue font-semibold py-4 px-10 rounded-md duration-100 hover:shadow-hovering lg:px-7">
            {children}
        </button>
    )
}

export default Button;