import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GetPhonesById from "../api/Phones/getPhoneById";
import PhoneDetails from "../types/PhoneDetails";
import { ImTruck } from "react-icons/im";
import { HiMiniShieldCheck } from "react-icons/hi2";
import Button from "../components/Button";
import { TbArrowBackUp } from "react-icons/tb";
import postPhone from "../api/Phones/postPhone";

const Showcase = () => {
    const params = useParams();

    const [phoneRendered, setPhoneRendered] = useState<PhoneDetails | undefined>();

    useEffect(() => {
        async function getDetails() {
            const phone: PhoneDetails = await GetPhonesById(params.id as string);
            setPhoneRendered(phone);
        }
        getDetails();
    }, [params]);

    const navigate = useNavigate();

    function goBack() {
        navigate(-1);
    }

    async function addItem() {
        const id: string | undefined = (phoneRendered?.id)?.toString()
        await postPhone(id as string);
    }


    return (
        phoneRendered ?
            <div className="relative flex flex-col items-center my-3 mx-auto max-w-7xl">
                <aside className="hidden sm:block self-start ml-5 mb-5 lg:absolute lg:-top-32">
                    <Button handleClick={goBack}>
                        <TbArrowBackUp />
                    </Button>
                </aside>
                <h1 className="text-2xl text-center font-semibold mt-3 mb-8 px-1">
                    Detalhes sobre o {phoneRendered.model}
                </h1>
                <div className="p-4 rounded shadow-normal grid grid-cols-1 sm:grid-cols-2-tight sm:gap-x-10 lg:grid-cols-3">
                    <img
                        className="w-64 justify-self-center"
                        src={phoneRendered.image}
                        alt={`Imagem do celular ${phoneRendered.model}`}
                    />
                    <ul className="my-10 justify-self-center">
                        <li>Câmera: {phoneRendered.main_camera} MP</li>
                        <li>Armazenamento: {phoneRendered.internal_storage} GB</li>
                        <li>Ram: {phoneRendered.ram} GB</li>
                        <li>Tela: {phoneRendered.screen} polegadas</li>
                        <li>Lançamento: {phoneRendered.release_year}</li>
                    </ul>
                    <div className="border-2 rounded-md border-light p-5 sm:mt-12 lg:mt-0 sm:col-span-2 sm:px-10 lg:col-span-1">
                        <h2 className="text-xl font-medium">
                            R$ {phoneRendered.price}
                        </h2>
                        <div className="my-2">
                            <p className="text-sm">
                                12x R$ {(phoneRendered.price / 12).toFixed(2).replace(".", ",")} sem juros
                            </p>
                            <p>
                                <strong className="text-green-600 font-bold">10% OFF</strong> no PIX ou à vista
                            </p>
                            <p className="flex items-center gap-x-2">
                                <ImTruck /> Receba em seu endereço
                            </p>
                            <p className="flex items-center gap-x-2">
                                <HiMiniShieldCheck /> 90 dias de garantia
                            </p>
                        </div>
                        <Button handleClick={addItem}>
                            Adicionar ao carrinho
                        </Button>
                    </div>
                </div>
            </div>
            :
            <div className="text-center">
                <h1 className=" text-4xl">Celular não encontrado</h1>
                <p>Falha na conexão com o servidor</p>
            </div>
    )
};

export default Showcase;