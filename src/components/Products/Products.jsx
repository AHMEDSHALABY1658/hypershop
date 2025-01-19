import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading'
import Product from '../Product/product'
import { useQuery } from '@tanstack/react-query';
export default function Products() {
    const [searchTerm, setSearchTerm] = useState("");
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

    const products = data?.data.data || [];

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if(isLoading) return <Loading/>
    return (
    <>
            <div className="container my-1 boder-top">
            <input
                type="text"
                placeholder="Search for a product..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                    padding: '10px',
                    width: '300px',
                    marginBottom: '20px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                }}
            />
            <div className="row">
                {filteredProducts?.length > 0 ? (
                    filteredProducts.map((item) => (
                        <Product item={item} key={item._id} />
                    ))
                ) : (
                    <p>No products found.</p>
                )}
            </div>
        </div>
    </>
    )
}
