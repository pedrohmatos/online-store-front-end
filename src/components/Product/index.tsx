import { Link, useLocation } from "react-router-dom";
import Phone from "../../types/Phone";

const Product = ({ id, image, model, price }: Phone) => {

    const { pathname } = useLocation();

    return (
        <Link to={`${pathname}/${id}`}>
            <figure className="bg-gray-50 h-[400px] max-w-52 shadow-light py-3.5 px-2.5 flex flex-col justify-between cursor-pointer hover:shadow-hovering">
                <img src={image} alt={model} className="w-full" />
                <figcaption>
                    <h2 className="text-center text-xl text-highlight font-semibold">
                        {model}
                    </h2>
                    <div className="border-t border-t-light pt-2.5 flex flex-col">
                        <small>A partir de</small>
                        <strong>R$ {price}</strong>
                        <p className="text-xs mt-2.5">
                            12x de R$ {(price / 12).toFixed(2)} sem juros ou no pix 10% off R$ {(price * 0.9).toFixed(2)}
                        </p>
                    </div>
                </figcaption>
            </figure>
        </Link>
    )
};

export default Product;