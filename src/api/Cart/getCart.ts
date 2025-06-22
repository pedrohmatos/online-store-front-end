import Phone from "../../types/Phone";
import instanceAxiosRequest from "../request";

async function getCart(): Promise<Phone[]> {
    const response = await instanceAxiosRequest.get("/carrinho");

    return response.data;
}

export default getCart;