'use client'

import React, { useState, useEffect } from 'react';

const Home = () => {
  const[firstName, setFirstName] = useState('');
  const[lastName, setLastName] = useState('');
  const[email, setEmail] = useState('');
  const[passWord, setPassWord] = useState('')
  const[error, setError] = useState({});
  const[isValid, setIsValid] = useState(false);

  useEffect(() => {
    validateForm();
  }, [firstName, lastName, email, passWord]);

  const validateForm = () => {
    let errors: { firstName?: string, lastName?: string, email?: string, passWord?: string } = {};

    if (!firstName) {
      errors.firstName = 'First Name cannot be empty';
    }
  };

  return (
    <main className="flex flex-col lg:flex-row max-w-6xl mt-10 lg:mt-0 lg:h-screen lg:items-center mx-auto gap-10 lg:gap-6 p-8 pb-0">
      <div className="flex flex-col content-evenly gap-6 lg:flex-1 lg:flex-grow">
        <h1 className="text-center lg:text-left text-white text-3xl lg:text-5xl font-bold">
          Learn to code by watching others
        </h1>
        <p className="text-center lg:text-left text-white font-medium">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
        <p className="text-center lg:text-left text-white text-[11px]">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            className="font-semibold"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://github.com/nooa-p" className="font-semibold">
            Nooa Peltokangas
          </a>
          .
        </p>
      </div>
      <div className="flex flex-col gap-4 lg:flex-1 lg:flex-grow">
        <div className="bg-blue text-white py-4 px-20 lg:px-0 text-center rounded-lg shadow">
          <span className="font-semibold">Try it free 7 days</span> then $20/mo.
          thereafter
        </div>
        <div className="bg-white p-6 lg:p-10 rounded-lg shadow">
          <form className="">
            <input
              type="text"
              className="block w-full p-3.5 pl-7 rounded mb-5 border border-gray-light placeholder:text-dark-light placeholder:font-semibold focus:font-semibold focus:border-dark focus:text-dark focus:outline-none font-semibold text-dark"
              name=""
              id=""
              placeholder="First Name"
            />
            <input
              type="text"
              className="block w-full p-3.5 pl-7 rounded mb-5 border border-gray-light placeholder:text-dark-light placeholder:font-semibold focus:font-semibold focus:border-dark focus:text-dark focus:outline-none font-semibold text-dark"
              name=""
              id=""
              placeholder="Last Name"
            />
            <input
              type="text"
              className="block w-full p-3.5 pl-7 rounded mb-5 border border-gray-light placeholder:text-dark-light placeholder:font-semibold focus:font-semibold focus:border-dark focus:text-dark focus:outline-none font-semibold text-dark"
              name=""
              id=""
              placeholder="Email Address"
            />
            <input
              type="text"
              className="block w-full p-3.5 pl-7 rounded mb-5 border border-gray-light placeholder:text-dark-light placeholder:font-semibold focus:font-semibold focus:border-dark focus:text-dark focus:outline-none font-semibold text-dark"
              name=""
              id=""
              placeholder="Password"
            />
            <button className="bg-green text-white shadow-sm block w-full p-3 rounded uppercase font-medium tracking-wider hover:bg-green-light border border-green-dark">
              Claim your free trial
            </button>
          </form>
          <span className="block w-full text-center text-[11px] mt-4 text-gray font-medium">
            By clicking the button, you are agreeing to our{" "}
            <a href="#" className="font-semibold text-red">
              Terms and Services
            </a>
          </span>
        </div>
      </div>
    </main>
  );
}

export default Home;