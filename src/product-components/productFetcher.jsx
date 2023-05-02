import { useState,useEffect } from "react";
const useFetch=(url)=>{
    
    const [isPending,handlePending]=useState(true)
    const [product,setProduct]=useState([]);

    useEffect(()=>{
       setTimeout(()=>{
        fetch(url)
        .then(res=>{
         return res.json()
        })
        .then(data=>{
        setProduct(data)
        handlePending(false)
        })
        .catch()
       },500)
        },[url]);
    return{product,isPending}
}
export default useFetch;