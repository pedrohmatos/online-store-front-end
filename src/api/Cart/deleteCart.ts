import instanceAxiosRequest from "../request";

async function deleteCart(receivedId: string): Promise<string> {
    const response = await instanceAxiosRequest.delete(`/carrinho/${receivedId}`);

    return response.data;
}

export default deleteCart;