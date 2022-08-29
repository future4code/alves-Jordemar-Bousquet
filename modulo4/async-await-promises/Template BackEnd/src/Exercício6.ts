import { baseUrl } from "./url";
import axios from "axios";

//a. Recebe um array de Promises e retorna outra Promise, que resolve em um array de respostas//
//b. o codigo não vai preceisar esperar uma requisição termiar para execultar a seguinte // 

//c. 
type user = {
	id: string;
	name: string;
	email: string;
}


const sendNotifications = async (
    users: user[],
    message: string
  ): Promise<void> => {
  
      try {
        const promises = users.map(user =>{
          return axios.post(`${baseUrl}/notifications`, {
            subscriberId: user.id,
            message: message,
          })
        })
      
        await Promise.all(promises);
  
      } catch {
          console.log("Error");
      }
  };