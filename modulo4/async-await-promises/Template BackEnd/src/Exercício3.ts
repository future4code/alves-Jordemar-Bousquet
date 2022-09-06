import { baseUrl } from "./url";
import axios from "axios";

type user = {
	id: string;
	name: string;
	email: string;
}

//a. não //
//b. E uma boa pratica pra mapear os tipos de dados retornado 

//c.
const getSubscribers = async (): Promise<user[]> => {
    const response = await axios.get(`${baseUrl}/subscribers`);
    return response.data.map((res: any) => {
      return {
        id: res.id,
        name: res.name,
        email: res.email,
      };
    });
  };