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
      errors.last = 'Last Name cannot be empty'
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
    alert('Submitted successfully!');
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submit) {
      finishSubmit();
    }
  })

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
          <form className="" onSubmit={handleSubmit}>
            <input
              type="text"
              className={`block w-full p-3.5 pl-7 rounded mb-5 border border-gray-light placeholder:text-dark-light placeholder:font-semibold focus:font-semibold focus:border-dark focus:text-dark focus:outline-none font-semibold text-dark ${errors.first ? 'border-2 border-red' : ''}`}
              placeholder="First Name"
              name='first'
              onChange={handleChange}
              value={inputFields.first}
            />
            <input
              type="text"
              className={`block w-full p-3.5 pl-7 rounded mb-5 border border-gray-light placeholder:text-dark-light placeholder:font-semibold focus:font-semibold focus:border-dark focus:text-dark focus:outline-none font-semibold text-dark ${errors.last ? 'border-2 border-red' : ''}`}
              placeholder="Last Name"
              name='last'
              onChange={handleChange}
              value={inputFields.last}
            />
            <input
              type="text"
              className={`block w-full p-3.5 pl-7 rounded mb-5 border border-gray-light placeholder:text-dark-light placeholder:font-semibold focus:font-semibold focus:border-dark focus:text-dark focus:outline-none font-semibold text-dark ${errors.email ? 'border-2 border-red' : ''}`}
              placeholder="Email Address"
              name='email'
              onChange={handleChange}
              value={inputFields.email}
            />
            <input
              type="password"
              className={`block w-full p-3.5 pl-7 rounded mb-5 border border-gray-light placeholder:text-dark-light placeholder:font-semibold focus:font-semibold focus:border-dark focus:text-dark focus:outline-none font-semibold text-dark ${errors.password ? 'border-2 border-red' : ''}`}
              placeholder="Password"
              name='password'
              onChange={handleChange}
              value={inputFields.password}
            />
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