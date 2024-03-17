import React, { useEffect, useState } from "react";
import User from "../components/User.jsx";
import { useUserContext } from "../Context/UserContext";
import "animate.css";
import BatteryComponent from "../components/Battery.jsx";
export default function HomePage() {
  const { authuser } = useUserContext();
  const [animationString, setAnimationString] = useState("");
  const [animationString2, setAnimationString2] = useState("");
  useEffect(() => {
    if (authuser) {
      setAnimationString("outer-div ");
      setAnimationString2("outer-div2");
    } else {
      setAnimationString("outer-div_out4");
      setAnimationString2("outer-div_out3");
    }
  }, [authuser]);

  return (
    <div className={"min-h-full w-full flex bg-black gap-[0.1rem]"}>
      <div
        className={
          `glass w-[50%] h-[100svh] border-[0.3rem]  border-solid border-[aqua] rounded-sm animate-fade-right animate-reverse animate-fill-forwards ` +
          animationString
        }
      >
        <div className="w-full h-full "></div>
      </div>
      <User />
      <div
        className={
          `glass w-[50%] h-[100svh] border-[0.3rem]  border-solid border-[aqua] rounded-sm animate-fade-right animate-reverse animate-fill-forwards ` +
          animationString2
        }
      >
        <BatteryComponent />
      </div>
    </div>
  );
}
