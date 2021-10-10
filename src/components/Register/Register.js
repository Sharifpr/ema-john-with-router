import React from 'react';
import { Link } from 'react-router-dom';
import './register.css'
const Register = () => {
    return (
        <div className="register-from">
            <div className="register">
                <h1>Create Account </h1>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="type your email" />
                    <br />
                    <input type="password" name="" id="" placeholder="enter password" /> <br />
                    <input type="password" name="" id="" placeholder="Re-enter password" /> <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Alrady have a account? <Link to="/Login">Login</Link></p>
                <div>-----Or-----</div> <br />
                <button className="btn-regular">Google Sign in</button>
            </div>
        </div>
    );
};

export default Register;