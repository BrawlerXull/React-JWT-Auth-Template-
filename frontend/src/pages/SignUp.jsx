import {  Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-screen bg-gray-800 flex flex-col lg:flex-row">
      {/* Left Section */}
      <div className="flex-1 p-6 lg:p-12 flex items-center justify-center lg:justify-start">
        <div className="text-center lg:text-left lg:pl-[25%]">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className=" rounded-lg text-white text-6xl">Newsifier</span>
          </Link>
          <p className=" mt-5 text-white text-2xl">
            Stay updated with all the latest news!
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 p-6 lg:p-12 flex flex-col justify-center md:px-[10%]">
        <form className="flex flex-col gap-4 lg:pr-[30%] ">
          <div>
            <Label value="Your username" className="text-white" />
            <TextInput type="text" placeholder="Username" id="username" />
          </div>
          <div>
            <Label value="Your email" className="text-white" />
            <TextInput type="text" placeholder="name@company.com" id="email" />
          </div>
          <div>
            <Label value="Your password" className="text-white" />
            <TextInput type="password" placeholder="Password" id="password" />
          </div>
          <button className="bg-transparent hover:bg-blue-500 text-blue-400 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Sign Up
          </button>
        </form>
        <div className="flex gap-2 text-sm mt-5 text-white">
          <span>Have an account?</span>
          <Link to="/sign-in" className="text-blue-500">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
