import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate, Navigate, useLocation} from 'react-router-dom'



const Register = ({setUser, user}) => {

    if(user!= null){
        return<Navigate to ="/"/>
      }

    const navigate = useNavigate() //instansierar navigate i komponenten så att vi kan använda den 
    const { state } =useLocation()



const [formData, setFormData] = useState({
    firstName: '', //matchar med name fälten som finns i formuläret
    lastName:'',
    email:'',
    password:''

})

const handleChange = e =>{ 
    setFormData(prevData =>{ 
        return{ 
            ...prevData, 
            [e.target.name]: e.target.value  
        }
    })
}

const handleSubmit = async e =>{
    e.preventDefault()

    const res = await axios.post('https://blog-test-api-nt7u.onrender.com/register', formData) // MED AXIOS
    console.log(res);

    console.log(res.data); //om vi får positivt svar kommer vi ha data i res.data
    if(res.data){
        setUser(res.data)
        // localStorage.setItem('token', res.data.token) //sparar in våran token 
        // navigate('/') //navigerar till startsidan om res.data OK
        navigate(state?.from || '/')
    }


    // MED FETCH

    // const res = await fetch('http://localhost:3000/users/register', { 
    //     method: 'post',
    //     headers: {
    //         'content-type': 'application/json'
    //     },

    //     body:JSON.stringify(formData)
    // })

    // const data = await res.json()
}





  return (
    <div className='register-form-page'>
        <div className='form-heading'>
        <h1>Welcome to blog</h1>
        <h3>Register a new User</h3>
        </div>
        
        <form onSubmit={handleSubmit}>
            <div className="form-group-register">
                <label htmlFor="firstName">First name:</label>
                <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange}/>
            </div>
            <div className="form-group-register">
                <label htmlFor="lastName">Last name:</label>
                <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange}/>
            </div>
            <div className="form-group-register">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange}/>
            </div>
            <div className="form-group-register">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" value={formData.password} onChange={handleChange}/>
            </div>
            <button className="login-btn">REGISTER</button>
        </form>
    </div>
  )
}

export default Register