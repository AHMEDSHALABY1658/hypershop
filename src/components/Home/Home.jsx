import React, { useEffect ,useState} from 'react'

import MainSwiper from '../MainSwiper/MainSwiper'
import MainSlider from '../MainSlider/MainSlider'


// import img
import BagShop from"../../imgs/bagShop.jpg"
import smallCover from"../../imgs/smallCover.jpeg"
import SubProducts from '../SubProducts/SubProducts'


export default function Home() {

    return (
        <div className='home' style={{display:"flex",flexDirection:"column",gap:"15px"}}>
        <div className=' MainSwiper boder-top flex' style={{height:"450px",width:"70%",margin:"auto",paddingInline:"10px"}}> 
            <MainSwiper/>
            <div  className='imageswiper' style={{width:"30%",height:"100%"}}>
                <div style={{height:"50%"}}> <img src={BagShop} alt="" style={{height:"100%",width:"100%"}} /> </div>
                <div style={{height:"50%"}}> <img src={smallCover} alt="" style={{height:"100%",width:"100%"}}/> </div>
            </div>
        </div>
        <MainSlider/>

        <SubProducts/>

        </div>
    )
    }
