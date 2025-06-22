import instanceAxiosRequest from "../request";

async function postPhone(receivedId: string) {
    const response = await instanceAxiosRequest.post(`/celulares/${receivedId}`);

    return response.data;
}

export default postPhone;