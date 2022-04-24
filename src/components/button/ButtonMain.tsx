//libraries
import React, { useState } from "react";

//components
import ToggleButton from "./toggle-button/ToggleButton";

function ButtonMain() {
  //instance
  const [toggleButtonStatus, setToggleButtonStatus] = useState(false);
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="min-w-[300px] w-[500px] h-[600px] rounded-[20px]   shadow-toggleButtonShadow">
        <div className="w-full h-[50px] flex justify-around items-center">
          <div
            className={`w-[30px] h-[30px] rounded-full ${
              toggleButtonStatus ? "bg-green-500 " : "bg-gray-400"
            }`}
          ></div>
          <ToggleButton
            isLimitAmount={toggleButtonStatus}
            toggleHandler={() => setToggleButtonStatus(!toggleButtonStatus)}
          />
          <div
            className={`w-[30px] h-[30px] rounded-full ${
              toggleButtonStatus ? "bg-green-500 " : "bg-gray-400"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ButtonMain;
