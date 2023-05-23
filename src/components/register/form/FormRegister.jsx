import React from "react";
import { Link } from "react-router-dom";
import "./formregister.css";
import "./mobile.css";
const FormRegister = () => {
  return (
    <div className="container">
      <h1 className="login_name">Create Your Account</h1>

      <Link to="/" className="create_now">
        Already have an account? <span> Login</span>
      </Link>
      <label className="email">First name</label>
      <input type="Firstname" placeholder="Martin" />
      <label className="email">Last Name</label>
      <input type="Firstname" placeholder="Cooper" />
      <label className="Firstname">Email</label>
      <input type="Firstname" placeholder="cooper.martin@gmail.com" />
      <label className="password">Password</label>
      <div class="input-wrapper">
        <input type="LastName" id="password-input" placeholder="Password" />
        <span id="toggle-password" class="toggle-password">
          {/* tạo ra icon mắt gạch ngang  */}
          <i class="fa-regular fa-eye-slash"></i>
        </span>
      </div>
      <label className="password">Confirm Password</label>
      <div class="input-wrapper">
        <input
          type="LastName"
          id="password-input"
          placeholder="Confirm Password"
        />
        <span id="toggle-password" class="toggle-password">
          <i class="fa-regular fa-eye"></i>
        </span>
      </div>

      <div className="login-btn">Register</div>

      <div className="line">
        <hr />
        <span>Or</span>
        <hr />
      </div>

      <button className="facebook-btn">
        <i class="fa-brands fa-facebook"></i>
        Continue with Facebook
      </button>
      <button className="google-btn">
        <i class="fa-brands fa-google"></i>
        Continue with Google
      </button>
    </div>
  );
};

export default FormRegister;
