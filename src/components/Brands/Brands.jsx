import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';

export default function Brands() {
    const [brands, setBrands] = useState([]); // إنشاء حالة لتخزين البيانات
    const [loading, setLoading] = useState(true); // حالة التحميل
    const [error, setError] = useState(null); // حالة الخطأ

    // وظيفة جلب العلامات التجارية
    async function getBrands() {
        try {
            const response = await axios.get('https://ecommerce.routemisr.com/api/v1/brands', {
                headers: {
                    token: localStorage.getItem('token'), // استرجاع التوكن من التخزين المحلي
                },
            });
            setBrands(response.data.data); // تحديث حالة البيانات
        } catch (err) {
            setError('حدث خطأ أثناء تحميل العلامات التجارية'); // تعيين رسالة الخطأ
        } finally {
            setLoading(false); // إنهاء حالة التحميل
        }
    }

    useEffect(() => {
        getBrands(); // استدعاء الوظيفة عند تحميل المكون
    }, []);

    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    {loading ? (
                       <Loading/> // عرض رسالة أثناء التحميل
                    ) : error ? (
                        <p>{error}</p> // عرض رسالة الخطأ
                    ) : (
                        brands.map((item) => (
                            <div className="col-md-3" key={item._id}>
                                <div className="card">
                                    <img
                                        src={item.image}
                                        className="card-img-top"
                                        alt={item.name}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
