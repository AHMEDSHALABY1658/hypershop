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
async function getCart() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/cart',{
        headers: {
        token: localStorage.getItem('token')
    }}
    ).then(data =>
        data
    ).catch(err => err)
}
async function DeleteItem(productId) {
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
        headers: {
        token: localStorage.getItem('token')
    }}
    ).then(data =>
        data
    ).catch(err => err)
}
async function updateQTY(productId, count) {
    return axios.put(
        `https://ecommerce.routemisr.com/api/v1/cart/${productId}`, 
        { count: count }, // إرسال `count` كجسم الطلب
        {
            headers: {
                token: localStorage.getItem('token')
            }
        }
    )
    .then(response => response)
    .catch(error => error);
}
async function pay(cartId, shippingAddress) {
    return axios.post(
        `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}`, 
        { shippingAddress}, // إرسال `count` كجسم الطلب
        {
            headers: {
                token: localStorage.getItem('token')
            }
        }
    )
    .then(response => response)
    .catch(error => error);
}

function addToWishlist(productId){
    return axios.post('https://ecommerce.routemisr.com/api/v1/wishlist', { productId },{
        headers: {
        token: localStorage.getItem('token')
    }}
    ).then(data =>
        data
    ).catch(err => err)
}
async function getWishlist() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/wishlist',{
        headers: {
        token: localStorage.getItem('token')
    }}
    ).then(data =>
        data
    ).catch(err => err)
}








export function StoreContextProvider({ children }) {

    let [counter, setCounter] = useState(0)
    let [Wishlist, setCountertWishlist] = useState(0)

    return <storeContext.Provider value={{ counter, setCounter,addToCart ,getCart,DeleteItem,updateQTY,pay,addToWishlist,getWishlist,Wishlist,setCountertWishlist}}>
        {children}
    </storeContext.Provider>
}