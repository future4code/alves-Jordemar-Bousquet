import { baseUrl } from "./url";
import axios from "axios";

//a. uma função asyncrona pois cria uma noticia de cada vez 

//b.
async function createNews(
    title: string,
    content: string,
    date: number
  ): Promise<void> {
    await axios.put(`${baseUrl}/news`, {
      title: title,
      content: content, 
      date: date
    });
  }