import React, { useState,useEffect } from "react";
import axios from "axios";

export const useRequestData = (InitialData ,url) =>{
    const[Data,SetData] = useState(InitialData)

    useEffect(() =>{
        axios.get(url,{
            headers:{
                Authorization: localStorage.getItem('token')
            }
        }).then((resp) =>{
            SetData(resp.data)
        }).catch((err) =>{
            console.log(err)
            alert('Ocorreu um Erro, Tente Novamente!!')
        })

    },[url])

    return (Data)
}

