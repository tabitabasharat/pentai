import React from "react";
import Mainsection from "./Mainsection";
import Oursupport from "./Oursupport";
import Dashboard from "./Dashboard";
import PercentageSection from "./PercentageSection";
import Lock from "./Lock";

function Landingpage() {
  return (
    <div className="flex flex-col mt-[100px] mb-[30px] items-center ">
      <Mainsection />
      <Oursupport />
      <Dashboard />
      <PercentageSection />
      <Lock />
    </div>
  );
}

export default Landingpage;
