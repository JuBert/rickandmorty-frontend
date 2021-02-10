import React, { useState } from 'react';
import '../App.css';
import history from '../history';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//REDUX
import { useSelector, useDispatch } from 'react-redux';
import { signupUser } from '../redux/actions/userAction';

const Login = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    handle: '',
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const newUserData = {
      email: state.email,
      password: state.password,
      confirmPassword: state.confirmPassword,
      handle: state.handle,
    };
    dispatch(signupUser(newUserData, history));
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
        <p>Signup</p>
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
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            className="login-input"
            value={state.confirmPassword}
            onChange={handleChange}
          ></input>
        </div>
        <div className="login-item">
          <input
            id="handle"
            name="handle"
            type="text"
            placeholder="User Name"
            className="login-input"
            value={state.handle}
            onChange={handleChange}
          ></input>
        </div>
        <div className="login-item">
          <button type="submit" className="login-button">
            Signup
          </button>
        </div>
        <div className="login-item">
          <small>
            Already have an account? Login <Link to="/login">here</Link>
          </small>
        </div>
      </form>
    </div>
  );
};

// login.PropTypes = {};

export default Login;
