import { useState,useEffect } from "react";
const useFetch=(url)=>{
    
    const [isPending,handlePending]=useState(true) 
    const [product,setProduct]=useState([]);
    {isPending && <div className="loading"></div>}
    useEffect(()=>{
        fetch(url)
        .then(res=>{
         return res.json()
        })
        .then(data=>{
            handlePending(false)
        setProduct(data);
        })
        .catch()
        },[url]);
    return{product}
}
export default useFetch;