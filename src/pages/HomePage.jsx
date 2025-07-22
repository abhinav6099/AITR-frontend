import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { FcDepartment } from "react-icons/fc";
import { FcBusiness } from "react-icons/fc";
import { PiStudentDuotone } from "react-icons/pi";
import { BiSolidInstitution } from "react-icons/bi";

function HomePage() {
  return (
    <div className="homepage min-h-screen bg-[#002147] overflow-hidden">
      <div className="flex flex-col text-white  items-center justify-center ">
      <h1 className="text-3xl font-bold pt-16">Categories</h1>
      <p className="w-1/2 text-center pt-3 font-semibold">
        Discourse assurance estimable applauded to so. Him everything melancholy
        uncommonly but solicitude inhabiting projection off. Connection
        stimulated estimating excellence an to impression.
      </p></div>
      <div className="flex mt-24  gap-16  justify-center items-center">                
        <Card children={<PiStudentDuotone />} title={"Student"} link="/student"/>
        <Card children={<FcBusiness />} title={"Faculty"} link="/faculty"/>
        <Card  children={<FcDepartment />} title={"Department"} link="/department"/>
        <Card children={<BiSolidInstitution />} title={"Institute"} link="/institute"/>
      </div>
    </div>
  );
}

export default HomePage;
