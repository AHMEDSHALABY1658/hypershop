import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from '../Product/product';

export default function SubProducts() {
    const [products, setProducts] = useState([]); // لتخزين البيانات
    const [loading, setLoading] = useState(true); // لتتبع حالة التحميل

    function getAllProducts() {
        axios
            .get('https://ecommerce.routemisr.com/api/v1/products?limit=12')
            .then((response) => {
                const data = response.data.data;
                setProducts(data); // تخزين البيانات في state
                console.log(response.data.data); // طباعة البيانات
            })
            .catch((error) => {
                console.error('Error fetching products:', error); // طباعة الخطأ إن وجد
            })
            .finally(() => {
                setLoading(false); // إنهاء حالة التحميل
            });
    }

    useEffect(() => {
        getAllProducts(); // جلب البيانات عند تحميل المكون
    }, []);

    return (
        <div className="container my-5 " style={{display:"flex",flexDirection:"column",gap:"20px"}}>
            <h5 className='title'>Best Selling</h5>
            {loading ? (
                <p>Loading...</p> // عرض رسالة أثناء التحميل
            ) : (
                <div className="row">
                    {products.map((item) => (
                        <Product item={item} key={item._id} />
                    ))}
                </div>
            )}
        </div>
    );
}
