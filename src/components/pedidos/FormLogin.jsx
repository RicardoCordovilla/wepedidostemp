import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'


const FormLogin = () => {

    const navigate = useNavigate()

    const { register, handleSubmit, reset } = useForm()

    const submit = (data) => {
        const url = `http://localhost:9000/api/v1/orders/${data.phone}`
        axios.get(url)
            .then(res => {
                console.log(res.data)
                localStorage.setItem('phone', data.phone)
                navigate('/project')
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        // const nombre=localStorage.getItem(`${data.email}`)
        // console.log(nombre)
    }, [])


    return (
        <div>
            <form onSubmit={handleSubmit(submit)} className='loginForm'>
                <h2>Welcome! Enter your email and password to continue</h2>
                <label htmlFor="phone">Celular</label>
                <input {...register('phone')} type="text" id='phone' />
                {/* <label htmlFor="pass">Password</label> */}
                {/* <input {...register('password')} type="password" id='pass' /> */}

                <button className='btnlogin btn' type='submit'>Login</button>
            </form>
        </div>
    )
}

export default FormLogin