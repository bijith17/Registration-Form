import React, { useState } from 'react';
import { BiLogoFacebook, BiLogoGooglePlus, BiLogoLinkedin } from "react-icons/bi";
function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = formData;

    if (name.trim() === '' || name.length < 4 || name.length > 20) {
      console.error('Name is required and must be between 4 and 20 characters');
      setNameError('Name is required and must be between 4 and 20 characters')
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      console.error('Invalid email address');
      setEmailError('Invalid email address');
      return;
    }

    if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])/.test(password)) {
      console.error('Password must have an uppercase letter, symbol, and number');
      setPasswordError('Password must have an uppercase letter, symbol, and number');
      return;
    }

    console.log({
      name,
      email,
      password,
    });
  };

  return (
    <div className='register grid items-center justify-center'>
      <div className='container grid grid-cols-1 sm:grid-cols-2 rounded-lg bg-white bg-opacity-5 md:w-[900px] md:h-[500px]'>
        <div className='absolute p-4'>
          <img src="https://cdn.logojoy.com/wp-content/uploads/2019/01/25131838/text_logo_14.png" className='w-16' alt="" />
        </div>
        <div className='flex flex-col items-center my-auto text-white'>
          <h1 className='font-bold text-2xl sm:text-3xl mb-0 sm:mb-4'>WELCOME BACK</h1>
          <p className='text-center my-3'>To keep connected with us please <br />login with your personal info</p>
          <button className='mb-4 sm:mb-0 border border-white rounded-3xl px-9 py-2 hover:bg-white hover-text-black transition duration-300'>SIGN IN</button>
        </div>
        <div className='bg-white bg-opacity-90 rounded-tr-lg rounded-br-lg'>
          <div className='mt-5 sm:mt-16'>
            <h1 className='text-violet-400 font-bold text-2xl sm:text-3xl text-center'>CREATE ACCOUNT</h1>
            <div className='flex justify-center space-x-3 my-2'>
              <BiLogoFacebook className='rounded-full border text-xl text-[#252525]' />
              <BiLogoGooglePlus className='rounded-full border text-xl text-[#252525]' />
              <BiLogoLinkedin className='rounded-full border text-xl text-[#252525]' />
            </div>
            <p className='text-center text-gray-500'>or use email for registration</p>
            <div className='grid justify-center mt-3'>
              <form>
                <div className='my-3'>
                  <input
                    type='text'
                    name='name'
                    placeholder='NAME'
                    className='py-2 px-2 w-72 bg-offwhite shadow focus:outline-violet-400 transition duration-700'
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  {nameError && <p className="text-red-500 font-sans px-1 text-[11px]">{nameError}</p>}
                </div>
                <div className='my-3'>
                  <input
                    type='email'
                    name='email'
                    placeholder='EMAIL'
                    className='py-2 px-2 w-72 bg-offwhite shadow focus:outline-violet-400 transition duration-700'
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {emailError && <p className="text-red-500 font-sans px-1 text-[11px]">{emailError}</p>}
                </div>
                <div className='my-3'>
                  <input
                    type='password'
                    name='password'
                    placeholder='PASSWORD'
                    className='py-2 px-2 w-72 bg-offwhite shadow focus:outline-violet-400 transition duration-700'
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  {passwordError && <p className="text-red-500 font-sans px-1 text-[11px]">{passwordError}</p>}
                </div>
                <div className='my-3'>
                  <button
                    type='button'
                    className='mt-8 mx-auto block shadow-md border border-violet-400 rounded-3xl px-9 py-2 hover:bg-violet-400 hover-text-offwhite transition duration-300 cursor-pointer'
                    onClick={handleSubmit}
                  >
                    SIGN UP
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
