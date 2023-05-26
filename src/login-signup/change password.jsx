import { useState,useEffect } from "react";
import { Redirect } from "react-router-dom";
export default function ChangePassword() {
    const [originalPass, setOriginalPass] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [newpassword, setNewPassword] = useState("");
    const [userId,setUserId]=useState("");
    const [userType,setUserType]=useState("");
    const currentuser = JSON.parse(localStorage.getItem("user"));
  
    useEffect(() => {
      if (currentuser && currentuser.length > 0) {
        setOriginalPass(currentuser[0].password);
        setUserId(currentuser[0].id)
        setUserType(currentuser[0].isCustomer)
      }
    }, [currentuser]);
  
    const OnChangePasswordForCustomer = () => {
      const changedPassword = { newpassword };
      fetch(`http://localhost:3000/users?id=${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(changedPassword),
      })
        .then((response)=>{
            if(response.ok){
                <Redirect to="/Profile" />;
            }
        })
        .catch((error)=>{
            console.error(error)
        });
    };
  const OnChangePasswordForFarmer=()=>{
    const changedPassword = { newpassword };
    fetch(`http://localhost:3000/farmers?id=${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(changedPassword),
    })
      .then((response)=>{
          if(response.ok){
              <Redirect to="/Profile" />;
          }
      })
      .catch((error)=>{
          console.error(error)
      });
  };
    return (
      <div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (originalPass === oldPassword && userType === true) {
              OnChangePasswordForCustomer()
            }else{
                OnChangePasswordForFarmer()
            }
          }}
        >
          <label htmlFor="original password">Current Password</label>
          <input
            type="text"
            name="original password"
            value={oldPassword}
            onChange={(event) => {
              setOldPassword(event.target.value);
            }}
            minLength={5}
          />
          <label htmlFor="new password">New Password</label>
          <input
            type="text"
            name="new password"
            value={newpassword}
            onChange={(event) => {
              setNewPassword(event.target.value);
            }}
            minLength={5}
          />
          <button className="signup-btn">Done</button>
        </form>
      </div>
    );
  }
