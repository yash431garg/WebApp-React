import React from "react";
import Profile from "./Profile";
import Header1 from "../Header1/Header1";
import Sidebar from "../Sidebar/Sidebar";
function Page() {
  return (
    <div>
      <Header1 />

      <Profile
        name="Aaryan Arhiyanth"
        emailId="boppesricharan@gmail.com"
        mobileNumber="+916309833542"
        businessType="Small Scale"
      />
    </div>
  );
}
export default Page;
