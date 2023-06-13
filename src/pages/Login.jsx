
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const Login = ({ setUser, user }) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const { state } = useLocation();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = e => {
    setFormData(prevData => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));

    setErrorMessage(null);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await axios.post('https://blog-test-api-nt7u.onrender.com/login', formData);
      setUser(response.data);
      navigate(state?.from || '/');
    } catch (error) {
      console.error('Login error:', error.response);
      setErrorMessage(error.response.data);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <div className="register-form-page">
      <div className="form-heading">
        <h1>Hello!</h1>
        <h3>Login to your account</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group-register">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group-register">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} />
        </div>
        <button className="login-btn">LOGIN</button>
        {errorMessage && <p className="error">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Login;
