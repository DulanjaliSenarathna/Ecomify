import {createContext, useEffect, useState} from 'react';
import {useLocation} from "react-router-dom"

export const Context = createContext();

const AppContext = ({children}) =>{
    //state management
    const [categories, setCategories] = useState();
    const [products, setProducts] = useState();
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartSubTotal, setCartSubTotal] = useState(0);
    const location = useLocation();

    //scroll the page to top when click related item
    useEffect(()=>{
        window.scrollTo(0,0)
    },[location])

    //update the sub total
    useEffect(()=>{

        let count = 0;
        cartItems.map(item => count += item.attributes.quantity);
        setCartCount(count);

        let subTotal = 0;
        cartItems.map(item =>subTotal += item.attributes.price * item.attributes.quantity )
        setCartSubTotal(subTotal)
    },[cartItems])

    const handleAddToCart = (product,quantity) =>{
        let items = [...cartItems];//assume cart has already 2 products
        let index = items.findIndex(p => p.id === product.id)//check the newly adding item already in cart or not
        if(index !== -1){ //if cart already has item
            items[index].attributes.quantity += quantity//increase the cart quantity
        }else{
            product.attributes.quantity = quantity; //add quantity to product
            items= [...items, product];//update the items array
        }
        setCartItems(items);//set the state
    }

    const handleRemoveFromCart = (product) =>{
        let items = [...cartItems];//assume cart has already 2 products
        items = items.filter(p => p.id !== product.id);
        setCartItems(items);
    }

    const handleCartProductQuantity= (type,product) =>{
        let items = [...cartItems];//assume cart has already 2 products
        let index = items.findIndex(p => p.id === product.id)//check the newly adding item already in cart or not
        if(type === 'inc'){
            items[index].attributes.quantity +=1
        }else if(type === 'dec'){
            if(items[index].attributes.quantity ===1) return;
            items[index].attributes.quantity -=1
        }
        setCartItems(items);
    }

    return <Context.Provider value={{
        categories,
        setCategories,
        products,
        setProducts,
        cartItems,
        setCartItems,
        cartCount,
        setCartCount,
        cartSubTotal,
        setCartSubTotal,
        handleAddToCart,
        handleRemoveFromCart,
        handleCartProductQuantity
    }}>{children}</Context.Provider>
    
};

export default AppContext;