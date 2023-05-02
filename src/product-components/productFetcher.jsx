import { useState,useEffect } from "react";
const useFetch=(url)=>{
    
   
    const [product,setProduct]=useState([]);

    useEffect(()=>{
       setTimeout(()=>{
        fetch(url)
        .then(res=>{
         return res.json()
        })
        .then(data=>{
        setProduct(data)
        })
        .catch()
       },500)
        },[url]);
    return{product}
}
export default useFetch;