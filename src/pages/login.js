import React, { useState } from 'react';
import '../App.css';
import history from '../history';
import { Link } from 'react-router-dom';
// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../redux/actions/userAction';

const Login = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    email: '',
    password: '',
  });
  // const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      email: state.email,
      password: state.password,
    };
    dispatch(loginUser(userData, history));
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

export default Login;
