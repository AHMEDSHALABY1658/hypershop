import React, { useContext, useEffect, useState } from 'react';
import { storeContext } from '../../context/StoreContext';
import { toast } from 'react-toastify';
import { GoHeartFill } from "react-icons/go";
export default function Wishlist() {
    let { getWishlist ,DeleteWishlist,setCountertWishlist} = useContext(storeContext);
    let [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        (async () => {
            let response = await getWishlist();
            console.log(response);
            setWishlist(response.data.data); // تخزين البيانات مباشرة
        })();
    }, []);


        async function deleteProduct(id){
                    let data = await DeleteWishlist(id)
                    console.log(data);
                    if(data.data.status=='success'){
                        toast.error('product deleted successfully.')
                        setWishlist((prve)=>{
                            return prve.filter(x => x.id !==  id)
                        })
                        {setCountertWishlist(x=>x-1)}
                    }
                }


    return (
        <div className='container my-2 p-3 rounded-1 mainBack'>
            <h2>WishList</h2>
            <p className='text-main'>Total WishList: {wishlist?.count}</p>

            <div>
            {wishlist?.map(item => (
                <div key={item._id} className="row py-2 border-bottom">
                    <div className="col-md-1">
                        <img src={item.imageCover} className='w-100' alt={item.title} />
                    </div>
                    <div className="col-md-11 flex">
                        <div>
                            <p className='m-1'>{item.title}</p>
                            <p className='text-main m-1 p-0'>Price: {item.price} EGP</p>
                        </div>
                        <div>
                            <GoHeartFill className="text-main fontIcon" onClick={()=>deleteProduct(item._id)} />
                            {/* يمكنك إضافة أي محتوى إضافي هنا إذا احتجت */}
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}
