import React, { useContext, useEffect, useState } from 'react';
import { storeContext } from '../../context/StoreContext';
import Loading from '../Loading/Loading';
export default function AllOrders() {
    const { getAllOrders } = useContext(storeContext);
    const [orders, setOrders] = useState(null); // اجعل القيمة الافتراضية null
    const [loading, setLoading] = useState(true); // لتتبع حالة التحميل

    useEffect(() => {
        (async () => {
            const data = await getAllOrders();
            setOrders(data); // قم بتحديث البيانات
            setLoading(false); // أوقف التحميل
        })();
    }, []);

    if (loading) {
        return  <Loading/>; // عرض رسالة أثناء التحميل
    }

    if (!orders || orders.length === 0) {
        return <p>No orders found.</p>; // عرض رسالة إذا لم توجد طلبات
    }

    return (
        <div className="container my-2 p-3 rounded-1" style={{ background: "#8080800a" }}>
            <h2>ALLOrders</h2>
            {orders.map((order) => (
                <div key={order._id} className="my-3 p-3 border rounded-2" style={{ background: "#fff" }}>
                    <h6>User Name: {order.user.name}</h6>
                    <p>Address: {order.shippingAddress.city}</p>
                    <p>phone: {order.shippingAddress.phone}</p>
                    <h5>Order ID: {order._id}</h5>
                    <p>Total Price: {order.totalOrderPrice} EGP</p>
                    <p>Payment Method: {order.paymentMethodType}</p>
                    <h6>Products:</h6>
                    {order.cartItems.map((item) => (
                        <div key={item._id} className="row py-2 border-bottom">
                            <div className="col-md-2">
                                <img
                                    src={item.product.imageCover}
                                    className="w-100"
                                    alt={item.product.title}
                                />
                            </div>
                            <div className="col-md-10">
                                <p className="m-1">{item.product.title}</p>
                                <p className="text-main m-1">Price: {item.price} EGP</p>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
