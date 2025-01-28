import axios from 'axios';
import { useFormik } from 'formik';
import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup'; // مكتبة Yup للتحقق
import { storeContext } from '../../context/StoreContext';

export default function Address() {
    let { id } = useParams();
    const navigate = useNavigate();
    let { pay } = useContext(storeContext);

    async function sendDateToApi(values) {
        let data = await pay(id, values);
        console.log(data);
        if (data.data.status === "success") {
            window.location.href = data.data.session.url;
        }
    }

    let Address = useFormik({
        initialValues: {
            details: '',
            phone: '',
            city: ''
        },
        validationSchema: Yup.object({
            details: Yup.string().required('Details are required'),
            phone: Yup.string()
                .matches(/^\d{11}$/, 'Phone must be exactly 11 digits') // التحقق على الرقم
                .required('Phone number is required'),
            city: Yup.string().required('City is required')
        }),
        onSubmit: (values) => {
            sendDateToApi(values);
        }
    });

    let [errMsg, setErrmsg] = useState("");

    return (
        <div>
            <div className="w-75 m-auto my-5">
                <h2>Address :</h2>
                <form onSubmit={Address.handleSubmit}>

                    <label htmlFor='details'>Details:</label>
                    <textarea
                        onBlur={Address.handleBlur}
                        onChange={Address.handleChange}
                        value={Address.values.details}
                        className={`form-control mb-3 ${Address.errors.details && Address.touched.details ? "is-invalid" : ""}`}
                        name='details'
                        id='details'>
                    </textarea>
                    {Address.errors.details && Address.touched.details ? (
                        <div className="invalid-feedback">{Address.errors.details}</div>
                    ) : null}

                    <label htmlFor='phone'>Phone:</label>
                    <input
                        onBlur={Address.handleBlur}
                        onChange={Address.handleChange}
                        value={Address.values.phone}
                        className={`form-control mb-3 ${Address.errors.phone && Address.touched.phone ? "is-invalid" : ""}`}
                        type="text"
                        name='phone'
                        id='phone'
                    />
                    {Address.errors.phone && Address.touched.phone ? (
                        <div className="invalid-feedback">{Address.errors.phone}</div>
                    ) : null}

                    <label htmlFor='city'>City:</label>
                    <input
                        onBlur={Address.handleBlur}
                        onChange={Address.handleChange}
                        value={Address.values.city}
                        className={`form-control mb-3 ${Address.errors.city && Address.touched.city ? "is-invalid" : ""}`}
                        type="text"
                        name='city'
                        id='city'
                    />
                    {Address.errors.city && Address.touched.city ? (
                        <div className="invalid-feedback">{Address.errors.city}</div>
                    ) : null}

                    {errMsg ? (
                        <div className="alert alert-danger">
                            {errMsg}
                        </div>
                    ) : ''}

                    <button disabled={!(Address.isValid && Address.dirty)} type="submit" className='btn-Address'>Pay</button>
                </form>
            </div>
        </div>
    );
}
