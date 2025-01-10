import React, { useContext, useEffect, useState } from 'react'
import { storeContext } from '../../context/StoreContext';
import Loading from '../Loading/Loading';
// icons
import { RiDeleteBin6Line } from "react-icons/ri";
import { GoHeart } from "react-icons/go";

import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

export default function Cart() {
    let {getCart,DeleteItem,setCounter,updateQTY} =useContext(storeContext)
    let [data,setData]=useState(null)
    let[loading,setLoading]=useState(true)

    
        useEffect(()=>{
            (async()=>{
                let data = await getCart()
                console.log(data)
                if(data?.response?.data.statusMsg == 'fail'){
                    setData(null)
                }else{
                    setData(data)
                }
                setLoading(false)
            })()
        },[])

        async function deleteProduct(id){
            let data = await DeleteItem(id)
            console.log(data);
            if(data.data.status=='success'){
                toast.error('product deleted successfully.')
                setCounter(data.data.numOfCartItem)
                setData(data)
            }
        }
        async function updateProductQuantity(id,count){
            let data = await updateQTY(id,count)
            console.log(data);
            if(data.data.status=='success'){
                toast.success('product updated successfully.')
                setCounter(data.data.numOfCartItem)
                setData(data)
            }
        }
        





        if(loading) return <Loading/>
        // if(data==null || data.numOfCartItem == 0)return <h2 className='text-center  my-5 text-main'>no item  in cart.</h2>
        if (!data?.data?.data?.products || data.data.data.products.length === 0) {
            return <h2 className='text-center my-5 text-main'>no item in cart.</h2>;
            }
        //   if (!data?.data?.data?.products || data.data.data.products.length === 0) {
        //     return <h2 className='text-center my-5 text-main'>no item in cart.</h2>;
        //   }

    return (
    <div className='container my-2 p-3 rounded-1 mainBack'>
        <h2>Shop Cart</h2>
        <p className='text-main'>Total Cart price : {data?.data.data.totalCartPrice}</p>
        {data?.data.data.products.map(item =>{
            return <div key={item._id} className="row py-2 border-bottom">
                <div className="col-md-1">
                        <img src={item.product.imageCover}  className='w-100' alt="" />
                </div>
                    <div className="col-md-11 d-flex justify-content-between ">
                        <div>
                            <p className='m-1'>{item.product.title}</p>
                            <p className='text-main m-1 p-0'>price : {item.price} EGP</p>
                            <button className='btn' onClick={()=>deleteProduct(item.product._id)}>   <RiDeleteBin6Line className="text-main" />Remove</button>
                        </div>
                        <div>
                            <button  onClick={()=>updateProductQuantity(item.product._id,item.count+1)} className=' brdr'>+</button>
                            <span className='px-2'>{item.count}</span>
                            <button   disabled={item.count<=1} onClick={()=>updateProductQuantity(item.product._id,item.count-1)} className=' brdr'>-</button>
                        </div>
                    </div>
                </div>
            })}
        <Link to={`/address/${data.data.data._id}`} style={{ background: "#13901d", color: "white", border: "none", padding: "10px 20px", borderRadius: "5px" ,textDecoration:"none"}}>
            Place order
        </Link>
    </div>
    )
}
