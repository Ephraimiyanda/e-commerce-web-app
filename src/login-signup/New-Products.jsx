import { useState } from "react"
import Alert from "../alert";
import { Redirect } from "react-router-dom";
export default function AddProducts(){
    const[name,setProductName]=useState("");
    const[photo,setPhotoUrl]=useState("");
    const[price,setPrice]=useState("");
    const[description,setDescription]=useState("");
    const[fruit,setFruit]=useState("fruit");
    const[Vegetable,setVegetable]=useState("vegetable");
    const[Cereal,setCereal]=useState("cereal");
    const[Grain,setGrain]=useState("grain");
    const[Spice,setSpice]=useState("spice");
    const[type,setType]=useState("");
    const[message,setMessage]=useState(false);
    const[NeedValue,setMessageValue]=useState(false);
    const handleSubmitForNewProduct=(e)=>{
        const NewProduct = {name,photo,price,description,type}
       
        fetch(`http://localhost:3000/product`,{
          method:"POST",
          headers:{"content-Type":"application/json"},
          body:JSON.stringify(NewProduct)
        }).then()
    .catch()
    }
    
      return(
        <div>
             {message ?<Alert type="success"><p className='addToCartMessage'>Added to shopping menu<span>✔️</span></p></Alert>:""}
             {NeedValue?<Alert type="success"><p className='addToCartMessage unsuccessful-message'>Need to add missing value<span>❌</span></p></Alert>:""}
              <form className="newProduct-form" onSubmit={(e)=>{
                if(name.length>0 &&
                   photo.length>0 && 
                   type.length>0 && 
                   price.length>0 && 
                   description.length>0){
                    handleSubmitForNewProduct();
                    setMessage(true);
                    setTimeout(()=>{
                    setMessage(false);
                    <Redirect to="/Profile"/>
                    },1500) 
                }else{
                    e.preventDefault();
                    setMessageValue(true)
                    setTimeout(()=>{
                    setMessageValue(false)
                    },1500) 
                    
                }
           }}>
               <label htmlFor="name">Product Name</label>
               <input type="text" name="name" value={name} placeholder="product name" onChange={(e)=>setProductName(e.target.value)} />
               <label htmlFor="photo">Photo Url</label>
               <input value={photo} type="text" name="photo" placeholder="photo url"  onChange={(e)=>setPhotoUrl(e.target.value)}></input>
               <label htmlFor="type">Product Type</label>
              <div className="radio-div"> <input type="radio" name="type" value={fruit} onChange={(e)=>setType(fruit)}/><p>fruit</p></div>
              <div className="radio-div"><input type="radio" name="type" value={Vegetable}  onChange={(e)=>setType(Vegetable)}/><p>vegetable</p></div>
              <div className="radio-div"> <input type="radio" name="type" value={Cereal}  onChange={(e)=>setType(Cereal)}/><p>cereal</p></div>
              <div className="radio-div"> <input type="radio" name="type" value={Grain}  onChange={(e)=>setType(Grain)}/><p>grain</p></div>
              <div className="radio-div"> <input type="radio" name="type" value={Spice}  onChange={(e)=>setType(Spice)}/><p>spice</p></div>
               <label htmlFor="price">Price</label>
               <input type="number" name="price" value={price} placeholder="₦000"  onChange={(e)=>setPrice(e.target.value)} />
               <label htmlFor="Description">Description</label>
               <input value={description} type="text" name="Description" placeholder="Description of product"  onChange={(e)=>setDescription(e.target.value)} ></input>
              
             <button className="signup-btn">Add product</button>
           </form>
        </div>
      )
}