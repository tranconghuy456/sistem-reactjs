// MODULES //
import React from "react";

// COMPONENTS //

// ASSETS //
import "../assets/styles/login.css";
import bg from "../assets/images/bg.jpg";
import bg1 from "../assets/images/bg1.jpg";

function LoginPage() {
  return (
    <section className="vh-100 login__section">
      <div className="container-fluid h-custom w-custom">
        <div className="row d-flex justify-content-center align-items-center h-100 bg-white p-3 rounded">
          <div className="col-md-8 col-lg-6 col-xl">
            {/* Sign in Form */}
            <form>
              {/* Social sign in */}
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start social__buttons">
                <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                <button className="btn btn-primary btn-floating mx-1 d-flex align-items-center justify-content-center rounded-circle shadow">
                  <i className="ri-facebook-line"></i>
                </button>
                <button className="btn btn-primary btn-floating mx-1 d-flex align-items-center justify-content-center rounded-circle shadow ">
                  <i className="ri-google-line"></i>
                </button>
              </div>

              {/* End social sign in */}
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div>

              {/* Email input */}
              <div className="input-group mb-4">
                <input
                  type="email"
                  id="emailInput"
                  className="form-control shadow-none border-2"
                  placeholder="Enter Email"
                />
              </div>

              {/* Password input */}
              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="passwordInput"
                  className="form-control shadow-none border-2"
                  placeholder="Enter password"
                />
              </div>

              <div className="d-flex justify-content-between align-items-center">
                {/* Checkbox */}
                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    id="rememberCheck"
                  />
                  <label className="form-check-label" for="rememberCheck">
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-body">
                  Forgot password?
                </a>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  className="btn btn-primary shadow login-btn">
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?
                  <a href="#!" className="link-danger">
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
