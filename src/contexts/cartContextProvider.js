import { createContext, useState } from 'react'

const cartContext=createContext();//creating the cart context,it is used to access value from the context in each componnet


const CartContextProvider=({children})=>{//it is used to wrap our app inside it 
    
    const [cartArray,setCartArray]=useState([]);//{item:{name:'',ingredients:''..},qty:'0'}

    const addToCart=({item,selectedQty})=>{//given item is of form {item:{name:'' ...}, selectedQty:3}
        for(let i=0;i<cartArray.length;i++){
            if(cartArray[i].item.name===item.name){
                const newCartArray=[...cartArray];
                newCartArray[i].qty=selectedQty+1;
                setCartArray(newCartArray);
                return;
            }
        }

        //if the item is not present already
        setCartArray((prevCartAraay)=>{
            return [...prevCartAraay,{item:item,qty:selectedQty+1}];
        })
    }

    const decreaseQtyFromCart=({item,selectedQty})=>{//given item is of form {item:{name:'' ...}, selectedQty:3}
        for(let i=0;i<cartArray.length;i++){
            if(cartArray[i].item==item){//if the cartArray has the given item 
                const newCartArray=[...cartArray];
                newCartArray[i].qty=selectedQty-1;
                if(newCartArray[i].qty<=0){
                    newCartArray.splice(i,1);
                }
                setCartArray(newCartArray);
                return;
            }
        }

        //if the item is not present already
        setCartArray((prevCartAraay)=>{
            return [...prevCartAraay,{item:item,qty:selectedQty-1}];
        })
    }

    const emptyTheCart=()=>{
        setCartArray([]);
    }
    return(
        <cartContext.Provider value={{cartArray,addToCart,decreaseQtyFromCart,emptyTheCart}}>
            {children}
        </cartContext.Provider>
    )
}

export {cartContext , CartContextProvider };