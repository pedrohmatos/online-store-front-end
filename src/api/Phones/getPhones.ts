import Phone from "../../types/Phone";
import instanceAxiosRequest from "../request";

async function getPhones(): Promise<Phone[]> {
    const response = await instanceAxiosRequest.get("/celulares");

    return response.data;
};

export default getPhones;