import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

export default function ChangePassword() {
  const [originalPass, setOriginalPass] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [userId, setUserId] = useState("");
  const [userType, setUserType] = useState("");
  const [redirectToProfile, setRedirectToProfile] = useState(false);
  const currentuser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (currentuser && currentuser.length > 0) {
      setOriginalPass(currentuser[0].password);
      setUserId(currentuser[0].id);
      setUserType(currentuser[0].isCustomer);
    }
  }, [currentuser]);

  const onChangePasswordForCustomer = () => {
    const changedPassword = { password: newPassword };
    fetch(`http://localhost:3000/users?id=${userId}&password=${oldPassword}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(changedPassword),
    })
      .then((response) => {
        if (response.ok) {
          setRedirectToProfile(true);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onChangePasswordForFarmer = (changedPassword) => {
    fetch(`http://localhost:3000/farmers?id=${userId}&password=${oldPassword}`, {
      method: "PUT",
      body: changedPassword,
    })
      .then((response) => {
        if (response.ok) {
          setRedirectToProfile(true);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  if (redirectToProfile) {
    return <Redirect to="/Profile" />;
  }

  return (
    <div>
      <form className="newProduct-form"
        onSubmit={(event) => {
          event.preventDefault();
          if (originalPass === oldPassword && userType === true) {
            onChangePasswordForCustomer();
          } else {
            onChangePasswordForFarmer(newPassword);
          }
        }}
      >
        <label htmlFor="original password">Current Password</label>
        <input
          type="password"
          name="original password"
          value={oldPassword}
          onChange={(event) => {
            setOldPassword(event.target.value);
          }}
          minLength={5}
        />
        <label htmlFor="new password">New Password</label>
        <input
          type="password"
          name="new password"
          value={newPassword}
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
