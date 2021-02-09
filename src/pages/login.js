import React, { useState } from 'react';
import '../App.css';
import axios from 'axios';
import history from '../history';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Login = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submit');
    setLoading(true);
    const userData = {
      email: state.email,
      password: state.password,
    };

    axios
      .post(
        'https://europe-west1-mortyandrick-84fc9.cloudfunctions.net/api/login',
        userData
      )
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        history.push('/');
      })
      .catch((err) => {
        setErrors(err.response);
        console.log(err.response);
        setLoading(false);
      });
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
    // errors
    //   ? event.target.setCustomValidity(errors.event.target.name)
    //   : event.target.setCustomValidity('');
  };

  return (
    <div className="login-container">
      <div className="login-item">
        <p>Login</p>
      </div>
      <form noValidate onSubmit={handleSubmit} className="login-form">
        <div className="login-item">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            className="login-input"
            value={state.email}
            onChange={handleChange}
          ></input>
        </div>
        <div className="login-item">
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            className="login-input"
            value={state.password}
            onChange={handleChange}
          ></input>
        </div>
        <div className="login-item">
          <button type="submit" className="login-button">
            Login
          </button>
        </div>
        <div className="login-item">
          <small>
            Don't have an account? sign up <Link to="/signup">here</Link>
          </small>
        </div>
      </form>
    </div>
  );
};

// login.PropTypes = {};

export default Login;
