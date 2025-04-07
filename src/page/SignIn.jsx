import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import logo_black from "/public/logo/logo_black.png";

const SignIn = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState("");
  const [isActive, setIsActive] = useState(false);
 
  let navigate = useNavigate();

  let handleRegistration = () => {
    navigate('/Registration')
  }


 

  const inputSubmit = (e) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10,15}$/
    if (email === "") {
      setIsError("Please enter your email or mobile phone number");
    } else if (!emailPattern.test(email) && !phonePattern.test(email)) {
      setIsError("Please enter a valid email address");
    } else {
      setIsError("");
      setStep(2);
    }
  };

  const passwordSubmit = (e) => {
    e.preventDefault();
    if (password === "") {
      setIsError("Please enter your password");
    } else {
      setIsError("");
    }
  };


  return (
    <div className="flex flex-col m-auto items-center justify-center">
      <div className="max-w-[350px] flex flex-col items-center h-full justify-center">
        <div>
          <img src={logo_black} alt="logo" className="w-[200px] h-[60px]" />
        </div>
        <div className="max-w-sm h-auto border border-gray-300 rounded-md p-8 shadow-lg">
          <h1 className="text-[2rem] mb-3">Sign in</h1>
          <div className="flex flex-col gap-2">
            <form
              onSubmit={step === 1 ? inputSubmit : passwordSubmit}
              className="flex flex-col"
            >
              {step === 1 && (
                <>
                  <label htmlFor="emailOrPhone" className="font-bold text-sm">
                    Email or mobile phone number
                  </label>
                  <input
                    type="text"
                    name="emailOrPhone"
                    id="emailOrPhone"
                    className="w-full text-sm h-[2rem] px-2 py-1 border-1 mt-2 rounded-sm focus:outline-blue-500 focus:outline-offset-6"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </>
              )}

              {step === 2 && (
                <>
                  <label htmlFor="password" className="font-bold text-sm">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full text-sm h-[2rem] px-2 py-1 border-1 mt-2 rounded-sm focus:outline-blue-500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </>
              )}

              {isError && (
                <p className="text-red-500 text-sm mt-2">{isError}</p>
              )}
              <button
                type="submit"
                className="w-full text-sm primary-button py-2 rounded-full mt-3"
              >
                Continue
              </button>
            </form>

            <p className="text-sm">
              By continuing, you agree to Amazon's{" "}
              <a
                href="#"
                className="text-blue-500 hover:text-black underline"
              >
                Condition of use
              </a>{" "}
              and{" "}
              <span className="text-blue-500 underline">privacy notice</span>
            </p>

            <div className="flex flex-col ">
              <button
                className={`flex items-end w-fit gap-2 text-xl px-2 py-1 ${
                  isActive ? "border-2 rounded-md border-blue-500 " : ""
                }`}
                onClick={() => setIsActive(!isActive)}
              >
                <FaChevronDown
                  className={`text-sm transform transition-transform duration-500 ${
                    isActive ? "rotate-180" : "rotate-0"
                  }`}
                />
                <span className="text-blue-500 hover:underline text-sm">
                  Need help?
                </span>
              </button>
              {isActive && (
                <div className=" ml-6 ">
                  <p className="text-blue-500 hover:underline hover:text-black text-sm">
                    Forgot your password?
                  </p>
                  <p className="text-blue-500 hover:underline hover:text-black text-sm">
                    Other issues with Sign-In
                  </p>
                </div>
              )}
            </div>

            <hr className="mt-[10px]" />
            <div className="flex flex-col gap-[2px]">
              <h2 className="text-sm font-bold">Buying for work?</h2>
              <a
                href="#"
                className=" text-blue-500 text-sm hover:text-black hover:underline"
              >
                Shop on Amazon Business
              </a>
            </div>
          </div>
        </div>

        <div className="w-full relative flex flex-col items-center justify-center mt-5 gap-3">
          <div className="flex items-center justify-center w-full gap-2 ">
            <span className="w-1/3 h-[1px] bg-gray-400"></span>
            <span className="text-sm w-1/3 ">New to Amazon?</span>
            <span className="w-1/3 h-[1px] bg-gray-400"></span>
          </div>
          <button 
            onClick={handleRegistration} // Update the state to render Registration
            className="py-[4px] text-sm w-full rounded-full border border-gray-500 cursor-pointer"
          >
            Create your Amazon account
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
