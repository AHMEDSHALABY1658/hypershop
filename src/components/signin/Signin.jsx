import axios from 'axios';
import { useFormik } from 'formik'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';




export default function Signin() {

    const navigate = useNavigate();


    function sendDateToApi(values){
        axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin',values).then(data =>{
            console.log(data)
            if(data.data.message === 'success'){
            localStorage.setItem('token',data.data.token)
            //to signin
            navigate('/home')
        }
        }).catch(erro=>{
            setErrmsg(erro.response.data.message)
            console.log(erro.response.data.message) 
        })

    }

    function validationSchema(){
        let errors = Yup.object({
            email:Yup.string().email().required(),
            password:Yup.string().matches(/^[A-Z][a-zA-Z0-9]{6,}$/,"password is a required field").required(),
        })
        return errors
    }

    let login = useFormik({
        initialValues:{
            email: '',
            password:'',
        },
        validationSchema,
        // validate,
        onSubmit:(values)=>{
            console.log(values)
            sendDateToApi(values)
        }
    })
    let [errMsg,setErrmsg]=useState("")
    // console.log(login.errors);
    return (
    <div>
        <div className="w-75 m-auto my-5" >
            <h2>login Now :</h2>
            <form onSubmit={login.handleSubmit}>

                <label htmlFor='email'> email: </label>
                <input onBlur={login.handleBlur} onChange={login.handleChange} className={'form-control mb-3'} type="text" name='email' id='email' />
                {login.errors.email&&login.touched.email?<div className="alert alert-danger">{login.errors.email} </div> :""}


                <label htmlFor='password'> password: </label>
                <input onBlur={login.handleBlur} onChange={login.handleChange} className='form-control mb-3' type="password" name='password' id='password' />
                {login.errors.password&&login.touched.password?<div className="alert alert-danger">{login.errors.password} </div> :""}


                {errMsg?
                    <div className="alert alert-danger">
                    { errMsg }  
                </div>
                :''
                }

                <button type="submit" className='btn-login'>Signin</button>
            </form>
        </div>
    </div>
    )
}
