import { useEffect, useState } from "react";
import Phone from "../types/Phone";
import getCart from "../api/Cart/getCart";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoCloseCircleSharp } from "react-icons/io5";
import deleteCart from "../api/Cart/deleteCart";

const Carrinho = () => {

    const [cartPhones, setCartPhones] = useState<Phone[]>([]);

    useEffect(() => {

        requestToApi();
    }, [])

    async function requestToApi() {
        const phones: Phone[] = await getCart()
        setCartPhones(phones);
    }

    async function handleDelete(id: number) {
        const parsedId: string = id.toString();
        const response: string = await deleteCart(parsedId);
        console.log(response);
        requestToApi();
    }

    return (
        <div className="mt-16 mb-4 w-full min-h-[80vh]">
            <h1 className="text-3xl font-semibold text-center mb-8 flex flex-row items-end justify-center">
                Carrinho de compras <span className="text-highlight"><AiOutlineShoppingCart /></span>
            </h1>
            <ul className="w-fit mx-auto flex flex-col gap-y-4">
                {
                    cartPhones.length > 1 ?

                        cartPhones.map((phone, index) => {
                            return (
                                <li key={index} className="relative px-4 py-2 rounded shadow-normal flex flex-row items-center gap-x-2 max-w-96">
                                    <img
                                        className="w-[100px]"
                                        src={phone.image}
                                        alt={`Imagem do celular ${phone.model}`}
                                    />
                                    <div>
                                        <p className="text-xl">
                                            {phone.model}
                                        </p>
                                        <p>
                                            R$: <strong className="text-highlight">{phone.price}</strong>
                                        </p>
                                    </div>
                                    <button onClick={() => handleDelete(phone.id)} className="text-2xl text-red-600 absolute top-1 right-1 cursor-pointer hover:scale-110 ease-in-out duration-100">
                                        <IoCloseCircleSharp className="hover:border-2 border-red-600 rounded-full" />
                                    </button>
                                </li>
                            )
                        })
                        :
                        <h2>Vazio</h2>
                }
            </ul>
        </div>
    )
};

export default Carrinho;