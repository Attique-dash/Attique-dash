import React, { useEffect, useState, useRef } from "react";
import "../Userinfo/Userinfo.css";
import { auth } from "../../Firebase";
import Logo from "../images/logo .png";
import 'react-responsive-modal/styles.css';
import Adduser from "../images/adduser.png";
import view from "../images/view.png";
import edit from "../images/edit.png";
import delet from "../images/delet.png";
import cross from "../images/cross.png";
import User from "../images/user (3).png";
import inputuser from "../images/inpusr.png";
import money from "../images/money.png";
import phone from "../images/phone.png";
import { Link } from "react-router-dom";
import { storage, db } from "../../Firebase";
import { v4 } from "uuid";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { collection, addDoc, deleteDoc, updateDoc, doc } from "firebase/firestore";
import Home from "../Home/Home";

function Userinfo(){
 
    const [userinfodata, setUserInfoData] = useState("");
    const [action, setAction] = useState("Add");
    const [editIndex, setEditIndex] = useState("");
    const [Image, setImage] = useState("");
    const [defaultImage, setDefaultImage] = useState(User);
    const [userInfoImage, setUserInfoImage] = useState("");
    const [userinfo, setUserInfo] = useState({
      image: "",
      name: "",
      phone: "",
      date: "",
      revmoney: "",
      senmoney: ""
    });
  
    useEffect(() => {
      const storedData = JSON.parse(localStorage.getItem('userinfodata')) || [];
      setUserInfoData(storedData);
    }, []);
  
    useEffect(() => {
      localStorage.setItem('userinfodata', JSON.stringify(userinfodata));
    }, [userinfodata]);
  
  
    const adduser =  () => {
      const docRef =  addDoc(collection(db, "users"), { ...userinfo, image: userInfoImage });
      try {
        setUserInfo({ image: "", name: "", phone: "", date: "", revmoney: "", senmoney: "" });
        setUserInfoImage("");
      } catch (error) {
        console.error("Error submitting user data:", error);
      }
      setAction("Add");
      setDefaultImage(User);
    };
  
    const inputRef = useRef(null);

    const handelImageClick = () => {
      inputRef.current.click();
    };
  
    const handelImageChange = (event) => {
      const file = event.target.files[0];
      const imgs = ref(storage, `Imgs/${v4()}`);
      uploadBytes(imgs, file).then((data) => {
        getDownloadURL(data.ref).then((url) => {
          setUserInfoImage(url);
        });
      });
    };
  
    const updateuser = async () => {
      await updateDoc(doc(db, "users", userinfodata[editIndex].id), { ...userinfo, image: userInfoImage });
      const updatedUsers = [...userinfodata];
      setUserInfoData(updatedUsers);
      setUserInfo({
        image: "",
        name: "",
        phone: "",
        date: "",
        revmoney: "",
        senmoney: ""
      }); 
     setEditIndex(null);
    };
  
    return(
        <>
        <div className="header3">
        <img src={Logo} alt="logo" className="logohome" />
        <h2 className="logoname">PaybackPalace</h2>
        <h1 className="userName">Customer Information</h1>
      </div><hr className="hr3" />
      <div className="usermain">
          <>
            <div>
              <div className="mnusrinfodiv">
                <div className="infoimgdiv" onClick={handelImageClick}>
                  {userinfo.image ? (
                    <img src={userinfo.image} alt="upload" className="usrupldimg" />
                  ) : (
                    <img src={defaultImage} alt="upload" className="usrupldimg" />
                  )}
                  <input type="file" ref={inputRef} style={{ display: "none" }} onChange={handelImageChange} />
                  <button onClick={handelImageClick}>Select Image</button>
                </div>
                <form className="userform"  onSubmit={(e) => e.preventDefault()}>
                  <label className="namelab">
                    Name:
                    <img src={inputuser} width={20} height={20} className="inpimg1" /><input type="text" className="nameinp" placeholder="Enter Your Name" value={userinfo.name} onChange={(e) => setUserInfo({ ...userinfo, "name": e.target.value })} />
                  </label>
                  <br />
                  <label className="namelab">
                    Phone:
                    <img src={phone} width={20} height={20} className="inpimg4" />  <input type="number" maxLength={11} minLength={11} className="phoneinp" placeholder="Enter Your Tel." value={userinfo.phone} onChange={(e) => setUserInfo({ ...userinfo, "phone": e.target.value })} />
                  </label>
                  <br />
                  <label className="namelab">
                    Date:
                    <input type="date" className="dateinp" value={userinfo.date} onChange={(e) => setUserInfo({ ...userinfo, "date": e.target.value })} />
                  </label>
                  <br />
                <label className="moneylab">
                  I took money:
                  <img src={money} width={25} height={25} className="inpimglst" /> <input type="number" className="remoninp" value={userinfo.revmoney} onChange={(e) => setUserInfo({ ...userinfo, "revmoney": e.target.value })} />
                </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <label className="moneylab">
                  I gave money:
                  <img src={money} width={25} height={25} className="inpimglst" />    <input type="number" className="semoninp" value={userinfo.senmoney} onChange={(e) => setUserInfo({ ...userinfo, "senmoney": e.target.value })} />
                </label>
                <br />
              <Link  to="/"> {action === 'Add' && <button sx={{ height: 46, width: 120, fontSize: 25, marginLeft: 30, marginTop: 2.5, fontFamily: "cursive", cursor: "pointer", fontWeight: 800, backgroundColor: "rgb(64, 171, 204)" }} type="submit" onClick={() => adduser()}>Save</button>}
                {action === 'Edit' && <button  type="submit" onClick={() => updateuser()}>Update</button>}</Link> 
                <Link to="/calucalater"><button>Next</button></Link>
                <Link to="/"><button>Cancel</button></Link>
                </form>
              </div>
              </div>
          </>
      </div>
     
        </>
    )
}
export default Userinfo;