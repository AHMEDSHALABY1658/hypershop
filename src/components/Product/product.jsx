import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { storeContext } from '../../context/StoreContext';
import { useContext } from 'react';
import { toast } from 'react-toastify';
export default function Product({item}) {
    let {counter,setCounter,addToCart} =useContext(storeContext)
    let [btnLoading , setBtnLoading] = useState(true)
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
                        <button disabled={!btnLoading} onClick={()=>addProductToCart(item._id)}  className='btn bg-main w-100 text-white'>
                            
                            {btnLoading?" Add To cart":"loading..."}
                            </button>

                    </div>
                </div>
    </>
    )
}
