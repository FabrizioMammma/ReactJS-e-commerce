import { createContext, useState } from "react";

const cartContext = createContext({
    cart: [],
});

function CartContextProvider(props) {

    const [cartProducts, setCartProducts] = useState([]);

    function addItem(product, count) {

        const newCart = JSON.parse(JSON.stringify(cartProducts));
        product.count = count;

        if (inCart(product.id)) {
            let indexValue = cartProducts.findIndex((isIn) => isIn.id === product.id);
            newCart[indexValue].count = newCart[indexValue].count + count;

        } else {
            newCart.push(product);
        };

        setCartProducts(newCart);
        
    };

    function inCart(id) {
        return cartProducts.some((product) => product.id === id);
    }

    function clearCart() {
        clearCart = [];
        setCartProducts(clearCart);
    };

    function removeProduct(id){
        const foundedId = cartProducts.find((item) => item.id === id); 
        const newCart = cartProducts.filter((item) => {
            return item !== foundedId;
        });

        setCartProducts(newCart);
    };

    function totalPrice(){
        const total = cartProducts.reduce((acc, cur) => acc + (cur.price * cur.count), 0); 
        return total;
    }; 

    
    return (
        <cartContext.Provider value={{ cart: cartProducts, setProducts: setCartProducts, addItem: addItem, clearCart: clearCart, removeProduct : removeProduct, totalPrice : totalPrice }}>
            {props.children}
        </cartContext.Provider>
    )
}

export { CartContextProvider };

export default cartContext;