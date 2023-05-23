import React from "react";
import img from "../assets/images/sign_up--01 1.png";
import img1 from "../assets/images/Vector.png";
import FormRegister from "../components/register/form/FormRegister";
import "../styles/register/form.css";
const Register = () => {
  return (
    <div className="register">
      <img className="fist_img" src={img} alt="img" />
      <img className="last_img" src={img1} alt="img" />
      <FormRegister />
    </div>
  );
};

export default Register;
