import React, {useState, useEffect} from 'react';
// import {FaPhoenixFramework} from 'react-icons/md';
import {FaPhoenixFramework ,FaRegUserCircle} from 'react-icons/fa';
import {IoMdKey} from 'react-icons/io';
import Input from '../../../components/Input';
import { Redirect, Route } from "react-router-dom";

const Login= (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitLogin = (e) => {
    e.preventDefault();
    props.sendLogin({email, password});
  }
  console.log("props =>", props);
  if(props.isLogin) {
    return <Redirect to="/" />;
  }
  return (
    <div className="flex w-screen h-screen">
        <div className="xl:w-2/4 lg:w-2/3 w-full flex flex-col">
          <div className="p-8 flex flex-row justify-between">
            <div className="flex font-flex items-end cursor-pointer">
              <FaPhoenixFramework className="w-6 h-6"/> 
              <h2 className="ml-2 text-lg font-semibold">
                EBGC
              </h2>
            </div>
            <div className="font-sans text-pink-900 cursor-pointer">
              Home
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <form onSubmit={submitLogin} className="flex flex-col lg:w-5/12 w-11/12 md:w-5/12 sm:w-8/12">
              <h3 className="font-flex text-gray-700 uppercase font-semibold text-xs">
                START YOUR PERSONAL PHOTO
              </h3>
              <h1 className="font-flex font-semibold text-2xl mt-1">
                Login your account
              </h1>
              <Input label="Username" type="text" icon={<FaRegUserCircle />} onChange={(e) => setEmail(e.target.value)}/>
              <Input label="Password" type="password" icon={<IoMdKey />} onChange={(e) => setPassword(e.target.value)}/>
              <div className="mt-6 flex flex-row justify-between">
                <button className="rounded-full border border-teal-500 border-solid py-2 px-8 outline-none focus:outline-none">
                  Register
                </button>
                <button type="submit" className="rounded-full py-2 px-10 bg-teal-400 text-white outline-none focus:outline-none bg-gradient-brand" onClick={submitLogin}>
                  Login 
                </button>
              </div>
              <div className="mt-4 flex flex-row justify-between">
                <div className="flex items-center">
                  <input type="checkbox" name="" id=""/>
                  <span className="uppercase font-flex text-gray-700 ml-2">
                    Remember me
                  </span>
                </div>
                <div>
                  <span className="text-gray-300">
                    Forgot pasxsword?
                  </span>
                </div>
              </div>
            </form>
          </div>
          <div className="p-8 flex flex-row justify-between">
            <div className="flex font-flex items-end">
              <h2 className="ml-2 text-lg text-gray-700 cursor-pointer">
                Privacy
              </h2>
            </div>
            <div className="flex flex-row cursor-pointer">
              <span className="font-flex text-gray-300">VI</span> 
              <span className="font-flex ml-2 text-gray-700">EN</span> 
            </div>
          </div>
        </div>
        <div className="xl:w-2/4 lg:w-4/12 lg:block hidden login-bg w-full h-screen bg-top bg-no-repeat bg-cover">
        </div>
    </div>
  );
} 

export default Login;
