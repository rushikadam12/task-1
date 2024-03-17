import React, { useState } from "react";
import { useUserContext } from "../Context/UserContext";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { useEffect } from "react";
import { IoMdFingerPrint } from "react-icons/io";
const User = () => {
  const { setAuthUser, authuser, setStopDecrease, stopDecrease, level } =
    useUserContext(useContext);
  const [password, setPassword] = useState(""); //password check but it's hardcoded for now
  const [Addanimation, setAddanimation] = useState(false);
  const [complete, setComplete] = useState(true); //check if animation is completed or not
  const Navigate = useNavigate();

  const handleButtonClick = () => {
    setStopDecrease(!stopDecrease); // Set stopDecrease to true to stop the battery decrease
  };

  const checkLogin = () => {
    if (password == "123") {
      setAuthUser(!authuser);
      setAddanimation(true);
      setTimeout(() => {
        setAddanimation(false);
        setComplete(false);
        handleButtonClick();
      }, 2000);
    } else {
      alert("Wrong password it's 123");
    }
  };
  useEffect(() => {
    if (!complete) {
      // Redirect after animation completes
      const redirectTimeout = setTimeout(() => {
        setAddanimation(false);
        Navigate("/welcome"); // Redirect to the "/welcome" route
      }, 1500); // Animation duration

      // Clean up the timeout to avoid memory leaks
      return () => clearTimeout(redirectTimeout);
    }
  }, [Addanimation, Navigate]);
  return (
    <>
      <div
        className={`z-[1] absolute top-[25%] left-[35%] w-[30%] min-h-[60vh] border-[0.3rem]  border-solid border-[aqua] bg-black rounded-[100%] flex justify-center items-center flex-col gap-5 p-10 ${
          Addanimation
            ? "animate-spin  animate-once animate-jump-in animate-once animate-delay-1000 animate-ease-in animate-reverse"
            : ""
        }`}
      >
        <p>
          <IoMdFingerPrint color={"aqua"} size={50} />
        </p>
        <input
          placeholder="Enter your temporary password 123"
          className="input input-bordered input-accent w-full font-semibold"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {level > 1 ? (
          <button
            className={`btn glass border-2 border-[aqua] btn-xs sm:btn-sm md:btn-sm lg:btn-md`}
            onClick={checkLogin}
          >
            Success
          </button>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default User;
