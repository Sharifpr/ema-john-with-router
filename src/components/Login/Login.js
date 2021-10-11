import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './login.css'
const Login = () => {

    const { signInUsingGoogle } = useAuth()
    const location = useLocation();
    const history = useHistory()
    console.log("come from", location.state?.from);
    const redirect_uri = location.state?.from || "/shop"

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }


    return (
        <div className="login-from">
            <div className="login">
                <h1>Log in </h1>

                <form>
                    <input type="email" name="" id="" placeholder="type your email" /> <br />
                    <input type="password" name="" id="" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New to ema-john? <Link to="/register">Create Account </Link></p>
                <div>----------Or----------</div>
                <br />
                <button className="btn-regular"
                    onClick={handleGoogleLogin}
                >Sign in with google</button>
            </div>
        </div>
    );
};

export default Login;
