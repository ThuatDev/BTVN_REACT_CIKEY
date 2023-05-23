import React from "react";
import { Link } from "react-router-dom";
import "./form.css";
import "./mobile.css";

const Form = () => {
  return (
    <div className="container">
      <h1 className="login_name">Login</h1>

      <Link to="/register" className="create_now">
        Don't have an account? <span> Create Now</span>
      </Link>
      <label className="email">Email</label>
      <input type="email" />
      <label className="password">Password</label>
      <div class="input-wrapper">
        <input type="password" id="password-input" />
        <span id="toggle-password" class="toggle-password">
          <i class="fa-regular fa-eye"></i>
        </span>
      </div>

      <div className="login-btn">Login</div>

      <a href="#" className="forgot-password">
        Forgot a password?
      </a>
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

export default Form;
