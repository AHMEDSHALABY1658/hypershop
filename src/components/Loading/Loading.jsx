import React from 'react'
import './Loading.css'

export default function Loading() {
    return (
    <div className='my-5'>
        <div className="center" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <div className="loader" style={{width:"20%"}}></div>
        </div>    
        
    </div>
    )
}
