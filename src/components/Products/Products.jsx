import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading'

export default function Products() {
    let[products,setProducts]=useState([])
    let[loading , setloading] = useState(true)

    async function getAllProducts(){
        let{data} =await  axios.get('https://ecommerce.routemisr.com/api/v1/products')
        setProducts(data.data)
        setloading(false)
    }
    useEffect(()=>{
        getAllProducts()
    },[])

    if(loading) return <Loading/>
    return (
    <>
        <div className="container my-5">
            <div className="row">
                {products.map(item=>(
                    <div key={item._id} className="col-md-2">
                    <div className="product cursor-pinter rounded-3 p-3">
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
                        <button className='btn bg-main w-100 text-white'>Add To cart</button>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </>
    )
}
