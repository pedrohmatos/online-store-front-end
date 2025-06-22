import { useEffect, useState } from "react";
import getPhones from "../api/Phones/getPhones";
import Phone from "../types/Phone";
import Product from "../components/Product";

function Phones() {

    const [phones, setPhones] = useState<Phone[]>([]);

    useEffect(() => {
        requestToApi();
    }, []);

    async function requestToApi() {
        const allPhones: Phone[] = await getPhones();
        setPhones(allPhones);
    }

    return (
        <div className=" grid grid-cols-2-tight gap-x-2 gap-y-4 sm-plus:gap-x-5 sm-plus:gap-y-7 px-5 py-5 justify-center sm:grid-cols-3-tight lg:grid-cols-4-tight xl:grid-cols-6-tight">
            {
                phones.map((phone, index) => {
                    return (
                        <Product
                            key={index}
                            id={phone.id}
                            image={phone.image}
                            model={phone.model}
                            price={phone.price}
                        />
                    )
                })
            }
        </div>
    )
}

export default Phones;