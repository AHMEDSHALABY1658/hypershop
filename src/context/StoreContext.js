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
async function DeleteWishlist(productId) {
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`, {
        headers: {
        token: localStorage.getItem('token')
    }}
    ).then(data =>
        data
    ).catch(err => err)
}











async function getAllOrders() {
    try {
        // احصل على التوكن من localStorage
        const token = localStorage.getItem('token');
        
        // إذا التوكن غير موجود، أوقف العملية
        if (!token) {
            console.error('Token not found');
            return null;
        }
        
        // فك التشفير للحصول على الـ id من التوكن
        const base64Payload = token.split('.')[1]; // الجزء المشفر من التوكن
        const decodedPayload = JSON.parse(atob(base64Payload)); // فك تشفير Base64
        const userId = decodedPayload.id; // استخراج الـ id
        
        // تحقق من وجود الـ id
        if (!userId) {
            console.error('User ID not found in token');
            return null;
        }
        
        // استخدام الـ id في عنوان URL
        const response = await axios.get(
            `https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`, // وضع الـ id هنا
            {
                headers: {
                    token: token, // استخدم التوكن في الترويسة
                },
            }
        );

        return (response.data) // إذا كانت الاستجابة ناجحة، أعد البيانات
    } catch (error) {
        console.error('Error fetching orders:', error);
        return null; // إذا كان هناك خطأ، أعد null
    }
}






















export function StoreContextProvider({ children }) {

    let [counter, setCounter] = useState(0)
    let [Wishlist, setCountertWishlist] = useState(0)

    return <storeContext.Provider value={{ counter, setCounter,addToCart ,getCart,DeleteItem,updateQTY,pay,addToWishlist,getWishlist,Wishlist,setCountertWishlist,DeleteWishlist,getAllOrders}}>
        {children}
    </storeContext.Provider>
}