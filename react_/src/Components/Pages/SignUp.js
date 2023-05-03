import React, { useState } from 'react';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [license, setLicense] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLicenseChange = (event) => {
    setLicense(event.target.files);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle sign-up
  };

  return ( 
    <div className="relative"> 
    <div className="p-10 flex flex-col justify-center items-center h-screen fixed inset-0 bg-gray-800 bg-opacity-75">
    <div className="sm:w-1/1 md:w-1/2 lg:w-1/4 p-10 rounded-xl  bg-white shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-center">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border border-gray-400 p-2 rounded w-full"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-gray-400 p-2 rounded w-full"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-medium mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="border border-gray-400 p-2 rounded w-full"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="license" className="block font-medium mb-2">
              Driver's License:
            </label>
            <input
              type="file"
              id="license"
              name="license"
              className="border border-gray-400 p-2 rounded w-full"
              accept="image/*"
              onChange={handleLicenseChange}
              required
            />
            <p className="text-sm text-gray-600 mt-2">
              Please upload a photo of your driver's license.
            </p>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-cyan-500 py-2 px-4 to-blue-500 cursor-pointer text-white rounded w-full"
          >
            Sign Up
          </button>
          <div className="mt-4 text-center">
            Already a member?{' '}
            <a href="#" className="text-purple-700 underline">
              Login
            </a>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Signup;