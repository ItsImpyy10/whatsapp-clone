import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "./firebase";
import "./Login.css";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {
    const [{state}, dispatch] = useStateValue()
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
          dispatch({
              type: actionTypes.SET_USER,
              user: result.user,
          })
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://cdn0.iconfinder.com/data/icons/cool-social-networks-logos-1/512/Whatsapp-512.png"
          alt=""
        />
        <div className="login__text">
          <h1>Login To WhatsApp Clone</h1>
        </div>
        <Button type="submit" onClick={signIn}>
          Sign In with Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
