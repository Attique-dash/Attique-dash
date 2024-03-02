import Logo from "../images/logo .png"
import Stress from "../images/stress.png"
import Gif from "../images/Photo-unscreen.gif"
import React, { useState } from 'react';
import "../Signup/Signup.css";
import {Link, useNavigate} from "react-router-dom";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../../Firebase";

function Signup () {
    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState('');
    const [submitbuttondisable, setSubmitButtonDisable] = useState(false);
    const [values, setValues] = useState({
        name:"",
        password:"",
        phone:"",
        email: "",
    });

    // const handleSignup = () => {
    //     if(!values.name || !values.password || !values.email || !values.phone){
    //         setErrorMsg("Fill all fields")
    //         return;
    //     }
    //      setErrorMsg("");
    //     setSubmitButtonDisable(true);
         
    //     createUserWithEmailAndPassword(auth,values.email,values.password)
    //     .then(async(res) =>{
    //       setSubmitButtonDisable(false);
    //       const user = res.user;
    //      await updateProfile(user,{
    //         displayName: values.name,
    //       });
    //       navigate("/");
    //     })
    //     .catch(err =>{
    //       setSubmitButtonDisable(false);
    //       setErrorMsg(err.message)
    //     })
    // }

    return(
        <>
     <div className="header">
      <div className="headerdiv">
      <img src={Logo} alt="logo" className="logo"/>
      <h2 className="logoname">PaybackPalace</h2>
      </div>
     </div> <hr/>
     <div className="main">
      <div className="imgdiv">
        <img src={Gif} className="Gif" alt="Gif"/>
        <img src={Stress} className="Stress" alt="Gif"/>
      </div>
     <form className="formmain2">
      <div className="form2">   
      <label className="namename2">Name:</label>
          <input type="Text"  onChange={(event) => setValues((prev) =>({...prev, name: event.target.value}))} placeholder="Enter your name" className="Name2" />
        <br />
      <label className="emailname2">Email:</label>
          <input type="email"  onChange={(event) => setValues((prev) =>({...prev, email: event.target.value}))} placeholder="Enter the email"  className="email2"/>
        <br />
        <label className="Phonename2">Phone No:</label>
          <input type="Phone"  onChange={(event) => setValues((prev) =>({...prev, phone: event.target.value}))} placeholder="Enter phone number " className="Phoneno2" />
        <br />
        <label className="passwordname2">Password:</label>
          <input type="password"  onChange={(event) => setValues((prev) =>({...prev, password: event.target.value}))} placeholder="Enter tne password" className="password2" />
        <br />
        <b className="errer2">{errorMsg}</b>
        {/* <button type="button" className="button2" onClick={handleSignup} disabled={submitbuttondisable}>Signup</button> */}
        <br/>
        <Link to="/Login"> <p className="alreadyacc2"> <u>Already have an account? <span className="movepage2">Login</span></u></p></Link>
      </div>
     </form>
     </div>
        </>
    )
}
export default Signup;