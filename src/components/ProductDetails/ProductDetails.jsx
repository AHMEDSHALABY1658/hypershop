import axios from 'axios';
import React, { useEffect, useState ,useContext} from 'react'
import { storeContext } from '../../context/StoreContext';
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading';
export default function ProductDetails() {
    let ProductId =useParams()
    let[product,SetProduct] = useState({})
    let[loading,setloading]=useState(true)
    let {counter,setCounter} =useContext(storeContext)



    async function getProduct(){
    let{data} =await  axios.get(`https://ecommerce.routemisr.com/api/v1/products/${ProductId.id}`)
    SetProduct(data.data)
    setloading(false)
    console.log(data.data);
    
}
useEffect(()=>{
    getProduct()
},[])
        if(loading)return<Loading/>

        
        return (
    <div>
        <div className="container my-5">
            <div className="row mt-5">
                <div  className="col-md-3">
                    <img src={product.imageCover} className='w-100' alt="" />
                </div>
                <div className="col-md-9">
                    <h4>{product.title}</h4>
                    <p className='my-3'>{product.description}</p>
                    <div>
                        <div style={{display:"flex",flexDirection:"column",gap:"10px",marginBottom:"40px"}}>
                            <span  >{product.category.name}</span>
                            <div className='d-flex justify-content-between'>
                                {product.price} EGP
                                <div>
                                <i className="fa-solid fa-star rating-color"></i>
                                {product.ratingsAverage}
                            </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={()=>{
                        setCounter(counter+1)
                    }} className='btn-cart bg-main w-100 text-white'>Add To cart</button>
                </div>
            </div>
        </div>
        </div>
    )
}
