import { baseUrl } from "./url";
import axios from 'axios'


//a. GET//
//b. any[]//
//c.

async function getSubscribers(): Promise<any[]> {
    const response = await axios.get(`${baseUrl}/subscribers`);
    return response.data;
  };
