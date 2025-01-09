import axios from 'axios';
import { useFormik } from 'formik'
import { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { storeContext } from '../../context/StoreContext';




export default function Address() {
    let {id}=useParams()
    const navigate = useNavigate();
    let{pay}=useContext(storeContext)

    async function sendDateToApi(values){
    let data = await pay(id,values)
    console.log(data);
    if(data.data.status === "success"){
        window.location.href=data.data.session.url
    }
    }



    let Address = useFormik({
        initialValues:{
            details : '',
            phone: '',
            city:''
        },
        onSubmit:(values)=>{
            sendDateToApi(values)
        }
    })
    let [errMsg,setErrmsg]=useState("")
    // console.log(Address.errors);







    return (
    <div>
        <div className="w-75 m-auto my-5" >
            <h2>Address  :</h2>
            <form onSubmit={Address.handleSubmit}>

                <label htmlFor='details'> details: </label>
                <textarea onBlur={Address.handleBlur} onChange={Address.handleChange} className={`form-control mb-3 ${Address.errors.name ?"is-invalid":""}`} type="text" name='details' id='details'></textarea>
    

                <label htmlFor='phone'> phone: </label>
                <input onBlur={Address.handleBlur} onChange={Address.handleChange} className='form-control mb-3' type="text" name='phone' id='phone' />
            

                <label htmlFor='city'> city: </label>
                <input onBlur={Address.handleBlur} onChange={Address.handleChange} className='form-control mb-3' type="password" name='city' id='city' />
                
                

                {errMsg?
                    <div className="alert alert-danger">
                    { errMsg }  
                </div>
                :''
                }

                <button disabled={!(Address.isValid && Address.dirty)} type="submit" className='btn-Address'>pay</button>
            </form>
        </div>
    </div>
    )
}
