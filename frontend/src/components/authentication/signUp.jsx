import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import "./signUp.css";
import axios from "axios";
import { useNavigate} from 'react-router-dom'

export function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [show, setShow] = useState(false);
  const [showConfirmPass, setShowOnConfirmPass] = useState(false);
  const navigate=useNavigate()

  function handleLogIn() {
    let state = true;
    let toastId;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (name.length < 5) {
      showError("Enter a valid name");
      state = false;
      return;
    }
    if (!emailRegex.test(email)) {
      showError("Enter a valid email");
      state = false;
      return;
    }
    if (password.length < 8) {
      showError("Password is too short");
      state = false;
      return;
    }
    if (password !== confirmPass) {
      showError("Password not matches");
      state = false;
      return;
    }
    const data = {
      email: email,
      password: password,
      name: name,
      image: image,
    };
    if (!state) return;
    toastId = toast.loading("Loading...");
    axios
      .post("/api/user/signUp", data)
      .then(({ data }) => {
        setTimeout(() => {
          toast.dismiss(toastId);
        }, 500);
          showSuccess("Registration success");
          localStorage.setItem('userData',JSON.stringify(data));
          navigate('/chat')
      })
      .catch((error) => {
        setTimeout(() => {
          toast.dismiss(toastId);
        }, 500);
        showError(error.response.data.message);
      });
  }
  const showError = (message) => {
    toast.error(message);
  };
  const showSuccess = (message) => {
    toast.success(message);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section>
      <div className="signUpContainer">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Sign up
            </h2>
            <form
              action="#"
              method="POST"
              className="mt-8"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Full Name{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Full Name"
                      id="name"
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="grid w-full mb-3 items-center">
                    <label className="text-base font-medium text-gray-900 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Picture
                    </label>
                    <input
                      id="picture"
                      type="file"
                      className="flex mt-2 h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
                    ></input>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      id="email"
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Password{" "}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type={show ? "text" : "password"}
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                      id="password"
                    ></input>
                    <span className="showAndHideButton">
                      <span onClick={() => setShow(show ? false : true)}>
                        {show ? "hide" : "show"}{" "}
                      </span>
                    </span>
                  </div>
                </div>
                <div style={{ marginTop: "-5px" }}>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="ConfirmPassword"
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Confirm Password{" "}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type={showConfirmPass ? "text" : "password"}
                      placeholder="Password"
                      onChange={(e) => setConfirmPass(e.target.value)}
                      id="ConfirmPassword"
                    ></input>
                    <span className="showAndHideButton">
                      <span
                        onClick={() =>
                          setShowOnConfirmPass(showConfirmPass ? false : true)
                        }
                      >
                        {showConfirmPass ? "hide" : "show"}{" "}
                      </span>
                    </span>
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={() => handleLogIn()}
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Create Account <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-3 space-y-3">
              <button
                type="button"
                disabled
                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
              >
                <span className="mr-2 inline-block">
                  <svg
                    className="h-6 w-6 text-rose-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                  </svg>
                </span>
                Sign up with Google
              </button>
              <button
                type="button"
                disabled
                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
              >
                <span className="mr-2 inline-block">
                  <svg
                    className="h-6 w-6 text-[#2563EB]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                  </svg>
                </span>
                Sign up with Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
