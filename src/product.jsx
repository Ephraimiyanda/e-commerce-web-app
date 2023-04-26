

const Item=({product,addToCart, productType})=>{
   
   const handleCart=()=>{
    addToCart(product);
   }

    return( 

            <div className="product-container">
             <section key={product.name} className={product.type === productType ? ("white-background"):("no-display")}>
                 <img src={product.photo} alt="" />

             <div>
                 <button className="like-btn"></button>
                 <h2>{product.name}</h2>
                 <h3>${product.price}</h3>
                 <button onClick={handleCart} >Add to cart</button>
             </div>                
         </section>
            
        </div>
    )
    

}
export default Item;