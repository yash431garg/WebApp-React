import React from "react";
import Registration from "./Registration";
import Header1 from "../Header1/Header1";
function Registration_Page() {
  return (
    <div>
      <Header1 />
      <Registration
        name="Aaryan Arhiyanth"
        emailId="boppesricharan@gmail.com"
        mobileNumber="+916309833542"
        businessType="Small Scale"
      />
    </div>
  );
}
export default Registration_Page;
