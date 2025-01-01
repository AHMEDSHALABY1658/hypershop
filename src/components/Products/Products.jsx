import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading'
import Product from '../Product/product'
import { useQuery } from '@tanstack/react-query';
export default function Products() {
    function getProducts() {
        return axios.get('https://ecommerce.routemisr.com/api/v1/products');
        }

        const { data, isError, isFetching, isLoading } = useQuery({
            queryKey: ['getProducts'], // مفتاح الاستعلام
            queryFn: getProducts,   // الدالة التي تنفذ الاستعلام
            refetchOnMount: false 
        }
    );


    // let[products,setProducts]=useState([])
    // let[loading , setloading] = useState(true)

    // async function getAllProducts(){
    //     let{data} =await  axios.get('https://ecommerce.routemisr.com/api/v1/products')
    //     setProducts(data.data)
    //     setloading(false)
    // }
    // useEffect(()=>{
    //     getAllProducts()
    // },[])

    if(isLoading) return <Loading/>
    return (
    <>
        <div className="container my-5">
            <div className="row">
                {data?.data.data.map(item=>{
                    return <Product item={item} key={item._id}  />
                })}
            </div>
        </div>
    </>
    )
}
