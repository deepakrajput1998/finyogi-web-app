import React from "react";
import logoImage from "../assets/image/logo.svg";
import AccountCreate from "./AccountCreate";
import CreatePassword from "./CreatePassword";
import LoginPage from "./LoginPage";
import "./LoginPage.css";
import ForgetPage from "./ForgetPage.js";
import VerificationRequired from "./VerificationRequired";
import { useLocation } from "react-router-dom";

export default function LoginSection({ route, ...props }) {
  const location = useLocation();
  const { type = null } = location.state || {};
  console.log(type, "props");
  const RenderFormType = () => {
    switch (type) {
      case "createAccount":
        return <AccountCreate />;
      case "createPassword":
        return <CreatePassword />;
      case "forgetPage":
        return <ForgetPage />;
      case "verificationRequired":
      case "loginPage":
        return <LoginPage />;

      default:
        return <LoginPage />;
    }
  };

  return (
    <>
      <div className="login--container">
        <div className="logo--section">
          <img src={logoImage} alt="logo" width={383} height={308} />
        </div>
        <div className="login--form">
          <div className="login--form-inner">
            {RenderFormType()}
            {/* <LoginPage /> */}
            {/* <AccountCreate /> */}
            {/* <CreatePassword /> */}
            {/* <ForgetPage /> */}
            {/* <VerificationRequired /> */}
          </div>
        </div>
      </div>
    </>
  );
}
