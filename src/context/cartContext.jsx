import { createContext, useMemo, useState } from "react";

export const CartContext = createContext();

export  function CartProvider({children}){

    const [productsCart,setProductsCart] = useState([]);
    //contem a id, qtd:1

    const productsCount  = useMemo(()=>{
        return productsCart.reduce((acc,curr)=> acc + curr.qtd, 0);
      })
    
      const productsTotal  = useMemo(()=>{
        return productsCart.reduce((acc,curr)=> acc + curr.qtd * (curr.value/curr.qtd) , 0);
      })

    function addProductToCart(id,name,value){  
        const copyProductsCart = [...productsCart];
        const item =  copyProductsCart.find((product)=> product.id === id)
        if(!item){
            copyProductsCart.push({id: id, qtd:1,name,value})
            console.log("inserido")
        }
        else{
            parseFloat(item.value);
            item.qtd = item.qtd +1;
            value *= item.qtd
            item.value = value;
            
        }
        setProductsCart(copyProductsCart);
    }

    function removeProductToCart(id){

        const copyProductsCart = [...productsCart];
        const item =  copyProductsCart.find((product)=> product.id === id)
        
        if (item.qtd > 1) {
            let valueUnity = item.value/item.qtd 
                item.qtd = item.qtd -1;
                item.value -=valueUnity;
                setProductsCart(copyProductsCart)
                
                
        } else {
            const arrayFiltered = copyProductsCart.filter(product=> product.id !== id);
            setProductsCart(arrayFiltered)
        }
    }
    /*
    */

    return(<CartContext.Provider value={{productsCart,addProductToCart,removeProductToCart,productsCount,productsTotal}}>
        {children}
    </CartContext.Provider>);

}