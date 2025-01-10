import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { storeContext } from '../../context/StoreContext';
import { useContext } from 'react';
import { toast } from 'react-toastify';


import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";

export default function Product({item}) {
    let {counter,setCounter,addToCart,addToWishlist,getWishlist,setCountertWishlist,Wishlist} =useContext(storeContext)
    let [btnLoading , setBtnLoading] = useState(true)
    const [isLiked, setIsLiked] = useState(false);


    async function addProductToCart(productId){
        setBtnLoading(false)
        let data = await addToCart(productId)
        console.log(data.data.status);

        if (data.data.status === 'success') {
            toast.success('Product added successfully');
            {setCounter(data.data.numOfCartItems) }
            setBtnLoading(true)
        }

    }

    
    async function addProductToWishlist(productId){
        let data = await addToWishlist(productId)
        console.log(data.data);
        if (data.data.status === 'success') {
            console.log(data.data);
            toast.success('Product added successfully to your wishlist');
            {setCountertWishlist(x=>x+1)}
        }
        setIsLiked(!isLiked)
    }










    return (
    <>
            <div  className="col-md-2">
                    <div className="product cursor-pinter rounded-3 p-3" >
                        <Link to={'/product-details/'+item._id} className="custom-link" >
                        <img src={item.imageCover} className='w-100' alt="" />
                        <span className='text-main'>{item.category.name}</span>
                        <h5 className='my-2 fw-bold'>{item.title.split(' ').slice(0, 2).join(' ')}</h5>
                        <div className='d-flex  justify-content-between my-3'>
                            <div>
                                {item.price} EGP
                            </div>
                            <div>
                                <i className="fa-solid fa-star rating-color"></i>
                                {item.ratingsAverage}
                            </div>
                        </div>
                        </Link>
                        <div className='btn-product flex'> 
                        <button disabled={!btnLoading} onClick={()=>addProductToCart(item._id)}  className='   btn  w-100 text-white ' style={{background:" rgb(48, 197, 34)"}}>
                            {btnLoading?" Add To cart":"loading..."}
                            </button>
                            <div onClick={()=>addProductToWishlist((item._id))}>
                                {isLiked ? (
                                <GoHeartFill className="text-red-500 fontIcon" />
                                ) : (
                                <GoHeart className="text-main fontIcon" />
                                )}
                            </div>


                        </div>
                    </div>
                </div>
    </>
    )
}
