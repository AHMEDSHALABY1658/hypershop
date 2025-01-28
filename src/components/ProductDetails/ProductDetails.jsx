    import axios from "axios";
    import React, { useEffect, useState, useContext } from "react";
    import { storeContext } from "../../context/StoreContext";
    import { useParams } from "react-router-dom";
    import Loading from "../Loading/Loading";
    import { toast } from 'react-toastify';
    // استيراد Swiper
    import { Swiper, SwiperSlide } from "swiper/react";
    import "swiper/css";
    import "swiper/css/pagination";
    import { Pagination } from "swiper/modules";

    export default function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { counter, setCounter,addToCart } = useContext(storeContext);

    async function getProduct() {
    try {
        const { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/products/${id}`
        );
        setProduct(data.data);
        console.log(data);
    } catch (error) {
        console.error("Error fetching product:", error);
    } finally {
        setLoading(false);
    }
    }
    async function addProductToCart(productId){
            let data = await addToCart(productId)
            console.log(data.data.status);
    
            if (data.data.status === 'success') {
                toast.success('Product added successfully');
                {setCounter(data.data.numOfCartItems) }
            }
    
        }
    useEffect(() => {
    getProduct();
    }, [id]);

    if (loading) return <Loading />;

    return (
    <div className="container  boder-top">
        <div className="row mt-5">
        <div className="col-md-3">
            {/* استخدام Swiper لعرض الصور */}
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            {product.images?.map((img, index) => (
                <SwiperSlide key={index}>
                <img src={img} className="w-100" alt={`Slide ${index + 1}`} />
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
        <div className="col-md-9">
            <h4>{product.title}</h4>
            <p className="my-3">{product.description}</p>
            <div>
            <div
                style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginBottom: "40px",
                }}
            >
                <span>{product.category?.name || "No category available"}</span>
                <div className="d-flex justify-content-between">
                {product.price} EGP
                <div>
                    <i className="fa-solid fa-star rating-color"></i>
                    {product.ratingsAverage}
                </div>
                </div>
            </div>
            </div>
            <button
            onClick={() =>{ 
                setCounter(counter + 1)
                addProductToCart(product._id);
            }}
            className="btn-cart bg-main w-100 text-white"
            >
            Add To Cart
            </button>
        </div>
        </div>
    </div>
    );
    }
