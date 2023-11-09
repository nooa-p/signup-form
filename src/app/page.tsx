'use client'

import React, { useState, useEffect } from 'react';

const Home = () => {
  const [inputFields, setInputFields] = useState<{first?: string, last?: string, email?: string, password?: string}>({
    first: '',
    last: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState<{first?: string, last?: string, email?: string, password?: string}>({});
  const [submit, setSubmit] = useState(false);

  const validateForm = (inputValues: any) => {
    let errors: {first?: string, last?: string, email?: string, password?: string} = {};
    if(!inputValues.first) {
      errors.first = 'First Name cannot be empty';
    }

    if (!inputValues.last) {
      errors.last = 'Last Name cannot be empty';
    }

    if (!inputValues.email) {
      errors.email = 'Email Address cannot be empty';
    } else if (!/\S+@\S+\.\S+/.test(inputValues.email)) {
      errors.email = 'Looks like this is not an email';
    }

    if (!inputValues.password) {
      errors.password = 'Password cannot be empty';
    }
    return errors;
  };

  const handleChange = (e: any) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setErrors(validateForm(inputFields));
    setSubmit(true);
  };

  const finishSubmit = () => {
    console.log('submitted successfully');
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submit) {
      finishSubmit();
    }
  })

  return (
    <main className="flex flex-col md:flex-row max-w-6xl mt-10 md:mt-0 md:h-screen md:items-center mx-auto gap-10 md:gap-6 p-8 pb-0">
      <div className="flex flex-col content-evenly gap-6 md:flex-1 md:flex-grow">
        <h1 className="text-center md:text-left text-white text-3xl md:text-5xl font-bold">
          Learn to code by watching others
        </h1>
        <p className="text-center md:text-left text-white font-medium">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
        <p className="text-center md:text-left text-white text-[11px]">
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
      <div className="flex flex-col gap-4 md:flex-1 md:flex-grow">
        <div className="bg-blue text-white py-4 px-20 md:px-0 text-center rounded-lg shadow">
          <span className="font-semibold">Try it free 7 days</span> then $20/mo.
          thereafter
        </div>
        <div className="bg-white p-6 md:p-10 rounded-lg shadow">
          <form className="relative" onSubmit={handleSubmit}>
            {errors.first ? (
              <span 
              className='inline-block bg-[url("/icon-error.svg")] w-6 h-6 absolute right-6 top-3.5'
              >
              </span>
            ) : null}
            <input
              type="text"
              className={`block w-full p-3.5 pl-7 rounded ${!errors.first ? 'mb-5' : ''} border border-gray-light placeholder:text-dark-light placeholder:font-semibold focus:font-semibold focus:border-dark focus:text-dark focus:outline-none font-semibold text-dark ${errors.first ? 'border-2 border-red' : ''}`}
              placeholder="First Name"
              name='first'
              onChange={handleChange}
              value={inputFields.first}
            />
            {errors.first ? (
              <span
              className='inline-block w-full text-right mt-1 mb-3 text-[11px] text-red italic font-semibold'
              >
                {errors.first}
              </span>
            ) : null }
            {errors.last ? (
              <span 
              className='inline-block bg-[url("/icon-error.svg")] w-6 h-6 absolute right-6 top-[103px]'
              >
              </span>
            ) : null}
            <input
              type="text"
              className={`block w-full p-3.5 pl-7 rounded ${!errors.last ? 'mb-5' : ''} border border-gray-light placeholder:text-dark-light placeholder:font-semibold focus:font-semibold focus:border-dark focus:text-dark focus:outline-none font-semibold text-dark ${errors.last ? 'border-2 border-red' : ''}`}
              placeholder="Last Name"
              name='last'
              onChange={handleChange}
              value={inputFields.last}
            />
            {errors.last ? (
              <span
              className='inline-block w-full text-right mt-1 mb-3 text-[11px] text-red italic font-semibold'
              >
                {errors.last}
              </span>
            ) : null }
            {errors.email ? (
              <span 
              className='inline-block bg-[url("/icon-error.svg")] w-6 h-6 absolute right-6 top-[190px]'
              >
              </span>
            ) : null}
            <input
              type="text"
              className={`block w-full p-3.5 pl-7 rounded ${!errors.email ? 'mb-5' : ''} border border-gray-light placeholder:text-dark-light placeholder:font-semibold focus:font-semibold focus:border-dark focus:text-dark focus:outline-none font-semibold text-dark ${errors.email ? 'border-2 border-red' : ''}`}
              placeholder="Email Address"
              name='email'
              onChange={handleChange}
              value={inputFields.email}
            />
            {errors.email ? (
              <span
              className='inline-block w-full text-right mt-1 mb-3 text-[11px] text-red italic font-semibold'
              >
                {errors.email}
              </span>
            ) : null }
            {errors.password ? (
              <span 
              className='inline-block bg-[url("/icon-error.svg")] w-6 h-6 absolute right-6 top-[278px]'
              >
              </span>
            ) : null}
            <input
              type="password"
              className={`block w-full p-3.5 pl-7 rounded ${!errors.password ? 'mb-5' : ''} border border-gray-light placeholder:text-dark-light placeholder:font-semibold focus:font-semibold focus:border-dark focus:text-dark focus:outline-none font-semibold text-dark ${errors.password ? 'border-2 border-red' : ''}`}
              placeholder="Password"
              name='password'
              onChange={handleChange}
              value={inputFields.password}
            />
            {errors.password ? (
              <span
              className='inline-block w-full text-right mt-1 mb-3 text-[11px] text-red italic font-semibold'
              >
                {errors.password}
              </span>
            ) : null }
            <button className="bg-green text-white shadow-sm block w-full p-3 rounded uppercase font-medium tracking-wider hover:bg-green-light border border-green-dark" onClick={handleSubmit}>
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