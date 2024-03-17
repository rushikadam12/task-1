import React, { useEffect } from "react";
import BatteryComponent from "../components/Battery";
import { useNavigate } from "react-router";
import { useUserContext } from "../Context/UserContext";
const Welcome = () => {
  const { stopDecrease, setStopDecrease, authuser, setAuthUser,level } =
    useUserContext();
  const Naviagte = useNavigate();
  const handelButtonClick = () => {
    setStopDecrease(!stopDecrease);
  };

  useEffect(() => {
    if (level < 1) {
      setAuthUser(!authuser)
      Naviagte("/")
      alert("Timeout")
    }
  },[level])

  return (
    <div className="text-2xl p-1 flex justify-center items-center flex-col ">
      <h1 className="text-2xl p-2">Welcome to Lab</h1>
      <button
        className="btn btn-success"
        onClick={async () => {
          handelButtonClick();
          await setAuthUser(!authuser);
          Naviagte("/");
        }}
      >
        Exit
      </button>
      <div className="w-full p-5 flex items-center justify-center flex-col gap-5 ">
        <h1 className="text-center text-2xl">
          your time is limited so use carefully
        </h1>
        <BatteryComponent />
      </div>
    </div>
  );
};

export default Welcome;
