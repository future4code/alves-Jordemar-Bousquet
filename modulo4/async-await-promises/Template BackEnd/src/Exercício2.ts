import { baseUrl } from "./url";
import axios from "axios";

//a. o tempo de resposta das requisioçẽs entre as funções são diferentes // 

//b//

const getSubscribers = async (): Promise<any[]> => {
    const response = await axios.get(`${baseUrl}/subscribers`);
    return response.data;
  };