import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../component/input";

// const SignUpCom = () =>{

// }

export const Signup = () => {
  const navigate = useNavigate();

  const [signUp, setSignUp] = useState({
    name: "",
    email: "",
    password: "",
  });

  const setField = (val, propName) => {
    setSignUp({ ...signUp, [propName]: val });
  };

  const signUpFunc = () => {
    let oldData = localStorage.getItem("userData");
    let flagUser = false;
    if (oldData == null) {
      oldData = [];
      let userData = { ...signUp };
      userData.uid = Math.floor(Math.random() * 1000);
      oldData.push(userData);
      localStorage.setItem("userData", JSON.stringify(oldData));
      navigate("/");
      console.log("user registered");
    } else {
      let oldArr = JSON.parse(oldData);
      for (var i = 0; i < oldArr.length; i++) {
        if (signUp.email === oldArr[i].email) {
          console.log("Email address already exist");
          flagUser = true;
        }
      }
      if (!flagUser) {
        let userData = { ...signUp };
        userData.uid = Math.floor(Math.random() * 10000);
        oldArr.push(userData);
        localStorage.setItem("userData", JSON.stringify(oldArr));
        navigate("/login");
        console.log("user registered");
      }
    }
  };

  return (
    <div className="main">
      <span className="circle_one"></span>
      <span className="circle_two"></span>
      <div className="container">
        <span className="home_heading">Sign up !</span>
        <span className="circle-1"></span>
        <span className="circle-2"></span>

        <div class="form">
          <form>
            <div class="inputbox">
              <p>Enter Name</p>
              <Input
                type="text"
                value={signUp.name}
                onChg={(val) => setField(val, "name")}
              />
            </div>
            <div class="inputbox">
              <p>Email Address</p>
              <Input
                type="text"
                value={signUp.email}
                onChg={(val) => setField(val, "email")}
              />
            </div>
            <div class="inputbox">
              <p>Enter Password</p>
              <Input
                type={"password"}
                value={signUp.password}
                onChg={(val) => setField(val, "password")}
              />
            </div>
            <div class="inputbox">
              <input type="submit" value="Sign up" onClick={signUpFunc} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
