import React, { useEffect, useState } from "react";
import InputField from "../InputSection/InputField";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const [state, setState] = useState({});
  useEffect(() => {
    // Check if user data is saved in localStorage
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");

    if (savedEmail && savedPassword) {
      //   setEmail(savedEmail);
      //   setPassword(savedPassword);
      //   setRememberMe(true);
    }
  }, []);
  const onChangeHandler = (name, value) => {
    setState({ ...state, [name]: value });
    console.log(state);
  };
  const gotoSignupPageHandler = () => {
    navigate("/createAccount", {
      state: {
        type: "createAccount",
      },
    });
  };
  const onSubmitHandler = () => {
    navigate("/home");
  };

  return (
    <>
      <h1 className="form--title mb-60">Hi, Welcome Back!</h1>
      <div className="form--input mb-20">
        <InputField
          onChangeHandler={(name, value) => {
            onChangeHandler(name, value);
          }}
          name={"email"}
          value={state["email"] || ""}
          label={"Email"}
          inputType={"email"}
          placeholder={"example@gmail.com"}
        />
        <InputField
          onChangeHandler={(name, value) => {
            onChangeHandler(name, value);
          }}
          name={"password"}
          value={state["password"] || ""}
          label={"Password"}
          inputType={"password"}
          placeholder={"Enter Your Password"}
        />
      </div>
      <div className="remember--section">
        <InputField
          inputType={"checkbox"}
          label={"Remember Me"}
          name={"remember"}
          onChangeHandler={(name, value) => {
            onChangeHandler(name, value);
          }}
          value={state["remember"] || false}
        />

        <button type="button" className="btn--forgot">
          Forgot Password?
        </button>
      </div>
      <div className="form--submit">
        <button
          onClick={() => {
            onSubmitHandler();
          }}
          type="button"
          className="btn--submit"
        >
          Login
        </button>
        <div
          onClick={() => {
            gotoSignupPageHandler();
          }}
          className="sign-up-block"
        >
          <span className="signup--text">Don`t have an account ? </span>
          <button type="button" className="btn--sign-up">
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
