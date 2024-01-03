import React, { useState, useRef } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null); // Add a reference for the name field

  const navigate = useNavigate();

  const handleButtonCick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) {
      return;
    }

    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/12824231?v=4",
          })
            .then(() => {
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });    }
  };

  const toggleSignInForm = (e) => {
    e.preventDefault();
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="">
      <Header />
      <div className="relative">
        <img
          src='https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
          alt='background'
          className="w-full h-auto rounded"
        />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-96 bg-black bg-opacity-90 p-8 rounded-lg shadow-xl text-white">
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
            <h2 className="text-3xl mb-8">{isSignInForm ? 'Sign In' : 'Sign Up'} </h2>

            {!isSignInForm && (
              <input
                ref={name}
                type="text"
                placeholder="Name"
                className="px-4 py-3 rounded bg-gray-700 text-white focus:outline-none"
              />
            )}

            <input
              ref={email}
              type="email"
              placeholder="Email or phone number"
              className="px-4 py-3 rounded bg-gray-700 text-white focus:outline-none"
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="px-4 py-3 rounded bg-gray-700 text-white focus:outline-none"
            />

            <div>
              <p className="text-red-600 text-md">{errorMessage}</p>
            </div>

            <button
              className="bg-red-600 text-white px-6 py-3 mt-4 rounded hover:bg-red-700 focus:outline-none"
              onClick={handleButtonCick}
            >
              {isSignInForm ? 'Sign In' : 'Sign Up'}
            </button>

            <div className="flex justify-between items-center">
              <div>
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-gray-300">
                  Remember me
                </label>
              </div>
              <a target='blank' href="https://www.netflix.com/in/LoginHelp" className="text-gray-300">Need help?</a>
            </div>

            <p className="text-gray-300  mt-2">
              {isSignInForm ? "New to Netflix?" : "Already a User?"}
              <a href="/" className="text-white" onClick={toggleSignInForm}>
                {isSignInForm ? " Sign Up Now" : " Sign In Now"}
              </a>
            </p>
            <p className="text-gray-300 text-sm mt-2">
              This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
            </p>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
