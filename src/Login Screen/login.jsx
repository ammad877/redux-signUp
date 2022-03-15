import React, { useState } from "react";
import { connect } from "react-redux";

function Login(prop) {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const signUpUser = () => {
    let { email, password } = state;
    localStorage.setItem("userData", JSON.stringify({ email, password }));
  };


  console.log(state);

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        onChange={(val) => setState({ ...state, email: val.target.value })}
      />
      <input
        type="text"
        onChange={(val) => setState({ ...state, password: val.target.value })}
      />

      <button
        onClick={ () =>
          prop.dispatch({
            type: "UPDATE_USER_DATA",
            email: state.email,
            pass: state.password,
          })
          
        }
        // onChange={signUpUser()}
      >
        Button
      </button>
    </div>
  );
}

const newApp = connect()(Login);

export default newApp;
