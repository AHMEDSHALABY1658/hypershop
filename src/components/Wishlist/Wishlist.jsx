import React, { useContext,useEffect } from 'react'
import { storeContext } from '../../context/StoreContext';


export default function Wishlist() {
    let {getWishlist} =useContext(storeContext)
        useEffect(()=>{
            (async()=>{
                let data = await getWishlist()
                console.log(data);
                
            })()
        },[])
    return (
    <div>
        
    </div>
    )
}
