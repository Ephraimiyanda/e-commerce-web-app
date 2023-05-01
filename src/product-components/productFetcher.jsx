import { useState,useEffect } from "react";
const useFetch=(url)=>{
    const [product,setProduct]=useState([]);

    useEffect(()=>{
        fetch(url)
        .then(res=>{
         return res.json()
        })
        .then(data=>{
        setProduct(data)
        })
        .catch()
        },[url]);
    return{product}
}
export default useFetch;