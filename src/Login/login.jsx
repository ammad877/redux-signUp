import React,{ useState } from "react";
import { connect } from "react-redux";
import Input from "../component/input";
import { Link, useNavigate } from "react-router-dom";
import './login.css'

const Login = (prop) => {

    const navigate = useNavigate();

    // const [data, setData] =useState("");

    const [login, setLogin] = useState({
        email:"",
        password:""
    })

    const setField = (val, propName) => {
        setLogin({ ...login, [propName]: val });
      };

    const loginFunc = () => {
        let oldData = localStorage.getItem("userData");
        let flagUser = false
        if(oldData == null){
            alert("No user is registered")
        }
        else {
            let oldArr = JSON.parse(oldData);
            for (var i = 0; i < oldArr.length; i++) {
                if (login.email === oldArr[i].email && login.password === oldArr[i].password) {
                    // prop.dispatch({type:"LOGIN_USER_DATA",payload:oldArr[i]})
                    // setData(oldArr[i].email);
                    localStorage.setItem("loginUser", JSON.stringify(oldArr[i]));
                    navigate('/profile')
        


                    flagUser = true;
                }    
            }
            if (!flagUser) {
                console.log("Email or password is incorrect")
            }
        }
    }

    return (
        <div className="main">
            <span className="circle_one"></span>
            <span className="circle_two"></span>
            <div className="container">
            <span className="heading">Log in !</span>
                <span className="circle-1" ></span>
                <span className="circle-2" ></span>
                
                <div class="form">
                <form>
                    <div class="inputbox">
                        <p>Email Address</p>
                        <Input type="text" 
                        value={login.email}
                        onChg={(val) => setField(val, "email")}/>
                    </div>
                    <div class="inputbox">
                        <p>Enter Password</p>
                        <Input type={"password"} 
                        value={login.password}
                        onChg={(val) => setField(val, "password")}/>
                    </div>
                    <div class="inputbox">
                        <input type="submit" value="Login" onClick={loginFunc} />
                        {/* <button onClick={loginFunc} ><Link to="/profile">login</Link></button> */}
                    </div>
                    <p class="forget">Forgot Password? <Link to='/' className="links">Click Here</Link> </p>
                </form>
            </div>
            <div className="signup_link">
                <p>Don't have an account? <Link to='/signup' className="links">Sign Up</Link></p>
            </div>
            </div>
        </div>
    )
}

const newApp = connect()(Login);

export default Login;