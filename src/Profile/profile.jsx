import React from "react";
import "./profile.css";
import { connect } from "react-redux";

const Profile = (prop) => {
  return (
    <div className="main">
      <span className="circle_one"></span>
      <span className="circle_two"></span>
      <div className="container">
        <span className="home_heading">Profile !</span>
        <span className="circle-1"></span>
        <span className="circle-2"></span>
        <h1>Welcome To My Profile</h1>
        <div className="user_detail">
          <h2>My Name : {prop.name}</h2>
          <h2>Email : {prop.email}</h2>
        </div>
      </div>
    </div>
  );
};

// const mapReduxStateToProps = (state) => {
//     console.log(state)
//   return {
//     name: state.name,
//     email: state.email,
//   };
// };
// const newProfile = connect(mapReduxStateToProps)(Profile);

// export default newProfile;

export default Profile;
