import axios from 'axios';
import { useFormik } from 'formik'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';




export default function Signup() {

    const navigate = useNavigate();
//     function validate(values){
//         const myError={}
//         if(!values.name)    
//         {
//             myError.name = "Name is Required"
//         }
//         if(!values.email)    
//         {
//             myError.email = "email is Required"
//         }
//         if (!/^[A-Z][a-zA-Z0-9]{6,}$/.test(values.password)) {
//             myError.password = "Password must start with an uppercase letter and be at least 7 characters long.";
//         }
//         if(values.password != values.rePassword)    
//         {
//             myError.rePassword = "password and rePassword not match."
//         }    
//         return myError
// }

    function sendDateToApi(values){
        axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup',values).then(data =>{
            console.log(data)
            if(data.data.message === 'success'){
            
            //to signin
            navigate('/Signin')
        }
        }).catch(erro=>{
            setErrmsg(erro.response.data.message)
            console.log(erro.response.data.message) 
        })

    }

    function validationSchema(){
        let errors = Yup.object({
            name:Yup.string().min(2).max(20).required(),
            email:Yup.string().email().required(),
            password:Yup.string().matches(/^[A-Z][a-zA-Z0-9]{6,}$/,"password is a required field").required(),
            rePassword:Yup.string().oneOf([Yup.ref('password')])
        })
        return errors
    }

    let Register = useFormik({
        initialValues:{
            name : '',
            email: '',
            password:'',
            rePassword:''
        },
        validationSchema,
        // validate,
        onSubmit:(values)=>{
            console.log(values)
            sendDateToApi(values)
        }
    })
    let [errMsg,setErrmsg]=useState("")
    // console.log(Register.errors);
    return (
    <div>
        <div className="w-75 m-auto my-5" >
            <h2>Register Now :</h2>
            <form onSubmit={Register.handleSubmit}>

                <label htmlFor='Name'> Name: </label>
                <input onBlur={Register.handleBlur} onChange={Register.handleChange} className={`form-control mb-3 ${Register.errors.name ?"is-invalid":""}`} type="text" name='name' id='name'  />
                {Register.errors.name&&Register.touched.name?<div className="alert alert-danger">{Register.errors.name} </div> :""}
                
                    

                <label htmlFor='email'> email: </label>
                <input onBlur={Register.handleBlur} onChange={Register.handleChange} className={'form-control mb-3'} type="text" name='email' id='email' />
                {Register.errors.email&&Register.touched.email?<div className="alert alert-danger">{Register.errors.email} </div> :""}


                <label htmlFor='password'> password: </label>
                <input onBlur={Register.handleBlur} onChange={Register.handleChange} className='form-control mb-3' type="password" name='password' id='password' />
                {Register.errors.password&&Register.touched.password?<div className="alert alert-danger">{Register.errors.password} </div> :""}

                <label htmlFor='rePassword'> rePassword: </label>
                <input onBlur={Register.handleBlur} onChange={Register.handleChange} className='form-control mb-3' type="password" name='rePassword' id='rePassword' />
                {Register.errors.rePassword&&Register.touched.rePassword?<div className="alert alert-danger">{Register.errors.rePassword} </div> :""}
                

                {errMsg?
                    <div className="alert alert-danger">
                    { errMsg }  
                </div>
                :''
                }

                <button disabled={!(Register.isValid && Register.dirty)} type="submit" className='btn-Register'>Signup</button>
            </form>
        </div>
    </div>
    )
}
