import React from "react";
import Form from "../components/login/form/Form";
import img from "../assets/images/sign_up--01 1.png";
import img1 from "../assets/images/Vector.png";
import "../styles/login/form.css";
import "../components/login/form/mobile.css";
const Login = () => {
  return (
    <div className="login">
      <img className="fist_img" src={img} alt="img" />
      <img className="last_img" src={img1} alt="img" />
      <Form />
    </div>
  );
};

export default Login;
