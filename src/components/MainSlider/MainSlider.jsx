import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import'./MainSlider.css'
import { Navigation, Autoplay } from 'swiper/modules';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';

export default function MainSlider() {
    const [categories, setCategories] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get('https://ecommerce.routemisr.com/api/v1/categories')
            .then((response) => {
                setCategories(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

if(isLoading) return <Loading/>

    return (
        <div className="MainSlider" style={{margin:"auto",width:"70%",height:"225px",display:"flex",flexDirection:"column",gap:"5px"}}>
            <h5 className='title'>categories</h5>
            <Swiper
                navigation={true} // تفعيل السهمين
                modules={[Navigation, Autoplay]}
                breakpoints={{
                    320: {
                        slidesPerView: 4,
                    },
                    768: {
                        slidesPerView: 6,
                    },
                    1024: {
                        slidesPerView: 8,
                    },
                }}
                loop={true}
                speed={1150}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                spaceBetween={0}
                className="mySwiper"
                id='Swiper-mainSlider'
            >
                {categories.map((category) => (
                    <SwiperSlide key={category._id}>
                        <Link to={'/products'} className="category-card   text-D">
                            <img src={category.image} alt={category.name} />
                            <p>{category.name}</p>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
