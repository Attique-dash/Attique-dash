import "../Home/Home.css";
import React, { useEffect, useState } from 'react';
// import { auth } from "../../Firebase";
import Logo from "../images/logo .png";
import 'react-responsive-modal/styles.css';
import Adduser from "../images/adduser.png";
// import edit from "../images/edit.png";
// import delet from "../images/delet.png";
// import Userinfo from "../Userinfo/Userinfo";
// import cross from "../images/cross.png";
// import User from "../images/user (3).png";
// import inputuser from "../images/inpusr.png";
// import money from "../images/money.png";
// import phone from "../images/phone.png";
import { Link } from "react-router-dom";
// import { storage, db } from "../../Firebase";
// import { v4 } from "uuid";
// import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
// import { collection, addDoc, deleteDoc, updateDoc, doc } from "firebase/firestore";
// import Button from '@mui/material/Button';

function Home() {

  // const [userName, setUserName] = useState("");
  // const [action, setAction] = useState("");
  // const [editIndex, setEditIndex] = useState("");
  // const [Image, setImage] = useState("");
  // const [defaultImage, setDefaultImage] = useState(User);
  // const [userInfoImage, setUserInfoImage] = useState("");
  const [userinfodata, setUserInfoData] = useState([]);



  // useEffect(() => {
  //   // Set up listener for changes to a Firestore document
  //   const unsubscribe = db.collection('users').doc('yourDocument')
  //     .onSnapshot((doc) => {
  //       // Update state with the new data from the snapshot
  //       setData(doc.data());
  //     });

  //   // Clean up listener when component unmounts
  //   return () => unsubscribe();
  // }, []);


  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userinfodata')) || [];
    setUserInfoData(storedData);
  }, []);

  useEffect(() => {
    localStorage.setItem('userinfodata', JSON.stringify(userinfodata));
  }, [userinfodata]);

  // const editUser = (index) => {
  //   setAction("Edit");
  //   const selectedUser = userinfodata.find((x, i) => i === index);
  //   setUserInfoData(selectedUser);
  //   setEditIndex(index);
  // }

  // const deleteUser = async (index) => {
  //   try {
  //     const userIdToDelete = userinfodata[index].id;
  //     const userDocRef = doc(collection(db, "users"), userIdToDelete);
  //     await deleteDoc(userDocRef);
  //     const newUsers = userinfodata.filter((x, i) => i !== index);
  //     setUserInfoData(newUsers);
  //     console.log('User data deleted successfully from Firestore');
  //   } catch (error) {
  //     console.error('Error deleting user data from Firestore:', error);
  //   }
  // };

  // useEffect(() => {
  //   auth.onAuthStateChanged(user => {
  //     if (user) {
  //       setUserName(user.displayName)
  //     } else {
  //       setUserName("");
  //     }
  //     console.log(user)
  //   })
  // }, [])

  return (
    <>

      <div className="header3">
        <img src={Logo} alt="logo" className="logohome" />
        <h2 className="logoname">PaybackPalace</h2>
        {/* <h1 className="userName">Wellcome to {userName}</h1> */}
        <Link to="/Login" className="logbutref"><button className="LogOut">Log Out</button></Link>
      </div><hr className="hr3" />
      <div className="usermain">
        <div className="newdivusr">
          <Link to="/userinfo" className="userinfobutref"><button className="adduser">
            <img src={Adduser} alt="Users" className="newusricon" />
            &nbsp;ADD CUSTOMER
          </button></Link>
        </div><hr className="hrline" />
        <div>
          {userinfodata.length > 0 && userinfodata.map((userinfo, index) => {
            return (<div key={index}>
              {/* <img src={userinfo.image ? userinfo.image : defaultImage} alt="user" width={70} height={70} /><br /> */}
              <span>Name:</span>{userinfo.name}            <br />
              <span>Phone:</span> {userinfo.phone}            <br />
              <span>Date:</span> {userinfo.date}            <br />
              <span>I took money:</span> {userinfo.revmoney}            <br />
              <span>I gave money:</span> {userinfo.senmoney}            <br />
              {/* <button onClick={() => editUser(index)}><img src={edit} alt="edit" width={20} height={20} /><span>Edit</span></button> */}
              {/* <button onClick={() => deleteUser(index)}><img src={delet} alt="delete" width={20} height={20} /><span>Delete</span></button> */}
            </div>)
          })}
        </div>
      </div>
    </>
  )
}
export default Home;
