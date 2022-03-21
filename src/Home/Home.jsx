import React from "react";
// import {LoginButton} from '../Links/loginButton'
import { Link } from "react-router-dom"
// import { Login } from "../Login/login";
import './Home.css';

export const Home = () => {
    return (
        <div className="main">
            <span className="circle_one"></span>
            <span className="circle_two"></span>
            <div className="container">
                <span className="home_heading">Welcome !</span>
                <span className="circle-1" ></span>
                <span className="circle-2" ></span>
                <button><Link to='/login' className="login_button">Login</Link></button>
                <p>or another app</p>
            <div className="button">
                <button className="fb">facebook</button>
                <button className="gmail">G mail</button>
            </div>
            <div className="signup_link">
                <p>Don't have an account? <Link to='/signup' className="links">Sign Up</Link></p>
            </div>
            </div>
        </div>
    )
}