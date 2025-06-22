import PhoneDetails from "../../types/PhoneDetails";
import instanceAxiosRequest from "../request";

async function GetPhonesById(receivedId: string): Promise<PhoneDetails> {
    const response = await instanceAxiosRequest.get(`/celulares/${receivedId}`);

    return response.data;
}

export default GetPhonesById;