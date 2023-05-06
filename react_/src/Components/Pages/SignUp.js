import React, { useState } from 'react';
import { Link } from 'react-router-dom'

function Signup() {
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [cin, setCin] = useState('');
  const [photo, setPhoto] = useState('');
  const [drivingLicense, setDrivingLicense] = useState('');
  const [passport, setPassport] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [licenseDate, setLicenseDate] = useState('');
  const [terms, setTerms] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };


  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleLoginChange = (event) => {
    setLogin(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.files);
  };

  const handleCinChange = (event) => {
    setCin(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleAdresseChange = (event) => {
    setAddress(event.target.value);
  };

  const handleLicenseDateChange = (event) => {
    setLicenseDate(event.target.files);
  };

  const handlePhotoChange = (event) => {
    setPhoto(event.target.value);
  };

  const handleDrivingLicenseChange = (event) => {
    setDrivingLicense(event.target.files);
  };



  return (
    <form onSubmit={handleSubmit} className=" flex flex-col  max-w-md mx-auto">
      <div class="flex flex-row">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="nom">
            Nom:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="nom"
            type="text"
            name="nom"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="prenom">
            Last Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="prenom"
            type="text"
            name="lastname"
            value={lastname}
            onChange={handleLastNameChange}
          />
        </div>
      </div>
      <div class="flex flex-row">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="login">
            Login:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="login"
            type="text"
            name="login"
            value={login}
            onChange={handleLoginChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="mdp">
            Password:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="mdp"
            type="password"
            name="mdp"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="adresse">
          Adresse:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="address"
          type="text"
          name="adresse"
          value={address}
          onChange={handleAdresseChange}
        />
      </div>

      <div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="cin">
            Cin:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="cin"
            type="text"
            name="cin"
            value={cin}
            onChange={handleCinChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="photo">
            Photo:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="photo"
            type="file"
            name="photo"
            value={photo}
            onChange={handlePhotoChange}
          />
        </div>
      </div>
      <div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="permis">
            Driving License:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="drivingLicense"
            type="text"
            name="drivingLicense"
            value={drivingLicense}
            onChange={handleDrivingLicenseChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
      </div>
      <div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="ville">
            City:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="city"
            type="text"
            name="city"
            value={city}
            onChange={handleCityChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="tel">
            Phone:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="tel"
            type="tel"
            name="tel"
            value={phone}
            onChange={handlePhoneChange}
          />
        </div>
      </div>
      <div>

      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="datePermis">
          license Date:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="licenseDate"
          type="date"
          name="licenseDate"
          value={licenseDate}
          onChange={handleLicenseDateChange}

        />
      </div>
      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            className="form-checkbox"
            type="checkbox"
            name="terms"
          />
          <span className="ml-2">
            I agree to the{' '}
            <a href="#" className="text-blue-500">
              terms and conditions
            </a>
          </span>
        </label>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Submit
      </button>



    </form >
  );
};

export default Signup;


