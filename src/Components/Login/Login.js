import Logo from "../images/logo .png"
import Stress from "../images/stress.png"
import Gif from "../images/Photo-unscreen.gif"
import React, { useState } from 'react';
import '../Login/Login.css';
import {Link, useNavigate} from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../Firebase";

function Login() {

  const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState('');
    const [submitbuttondisable, setSubmitButtonDisable] = useState(false);
    const [values, setValues] = useState({
        email: "",
        password:"",
    });

    const handleSignup = () => {
        if(!values.password || !values.email ){
            setErrorMsg("Fill all fields")
            return;
        }
         setErrorMsg("");
        setSubmitButtonDisable(true);
         
        signInWithEmailAndPassword(auth,values.email,values.password)
        .then(async(res) =>{
          setSubmitButtonDisable(false);
          
          navigate("/");
        }).catch(err =>{
          setSubmitButtonDisable(false);
          setErrorMsg(err.message)
        })
    }
  return (
    <>
      <div className="header">
        <div className="headerdiv">
          <img src={Logo} alt="logo" className="logo" />
          <h2 className="logoname">PaybackPalace</h2>
        </div>
      </div> <hr />
      <div className="main">
        <div className="imgdiv">
          <img src={Gif} className="Gif" alt="Gif" />
          <img src={Stress} className="Stress" alt="Gif" />
        </div>
        <form className="formmain1">
          <div className="form1">
            <label className="emailname1">Email:</label>
            <input type="email"  onChange={(event) => setValues((prev) =>({...prev, email: event.target.value}))} placeholder="Enter the email" className="email1" />
            <br />
            <label className="passwordname1">Password:</label>
            <input type="password"   onChange={(event) => setValues((prev) =>({...prev, password: event.target.value}))} placeholder="Enter tne password" className="password1" />
            <br />
            <b className="errer1">{errorMsg}</b>
            <button type="button" className="button1" disabled={submitbuttondisable} onClick={handleSignup}>Login</button>
            <br />
            <Link to="/Signup"><p className="alreadyacc1"><u>Already have an account? <span className="movepage1">Sign up</span></u></p></Link>
          </div>
        </form>
      </div>

    </>
  );
}

export default Login;
