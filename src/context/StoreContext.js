import axios from "axios";
import { createContext, useState } from "react";


export let storeContext = createContext(0)


function addToCart(productId) {
    return axios.post('https://ecommerce.routemisr.com/api/v1/cart', { productId },{
        headers: {
        token: localStorage.getItem('token')
    }}
    ).then(data =>
        data
    ).catch(err => err)
}

export function StoreContextProvider({ children }) {

    let [counter, setCounter] = useState(0)

    return <storeContext.Provider value={{ counter, setCounter,addToCart }}>
        {children}
    </storeContext.Provider>
}