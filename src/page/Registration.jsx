import React from 'react'
import { useState } from 'react';
import logo_black from '/public/logo/logo_black.png'
import { useNavigate } from 'react-router-dom';


const Registration = () => {
   const [data, setData] = useState({name: '', email: '', password: '', rePassword: ''});
   const [isError, setIsError] = useState({});
   const [success, setSuccess] = useState(false);
  
   let navigate = useNavigate();

   let navigateSignIn = () => {
    navigate('/')
   }

  
 const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({...prevData, [name]: value}));
    setIsError((prevError) => ({...prevError, [name]: ''}));
 }

 const validation = () => {
  const { name, email, password, rePassword } = data;
  const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const newErrors = {};

  if(!name) {
    newErrors.name = 'Please enter your name';
  } if(!email) {
    newErrors.email = 'Please enter your email address';
  } else if(!emailValidation.test(data.email)) {
    newErrors.email = 'Invalid email address';
  } if(!password) {
    newErrors.password = 'Please enter your password';
  } if(!rePassword) {
    newErrors.rePassword = 'Please re-enter your password';
  } else if(password !== rePassword) {
    newErrors.rePassword = 'Passwords do not match';
  }  

  return newErrors;

 }

 const handleSubmit = (e) => {
  e.preventDefault();
  const errors = validation();
  setIsError(errors);

  if(Object.keys(errors).length === 0) {
    setSuccess('Registration successful!');
    setData({name: '', email: '', password: '', rePassword: ''});
  } else {
    setSuccess('');
  }
 }



 
 return (
   <div className='flex flex-col m-auto items-center justify-center'>
   <div className='max-w-[350px] flex flex-col items-center h-full justify-center '>
        <div><img src={logo_black} alt="logo" className='w-[200px] h-[60px]' /></div>
        <div className='max-w-sm h-auto border border-gray-300 rounded-md p-8 shadow-lg '>
         <h1 className='text-[2rem] mb-3'>Create account</h1>

          <div className='flex flex-col gap-2'>
         <form onSubmit={handleSubmit}
               className='flex flex-col '>
           <div>
           <label htmlFor="Name" className="font-bold text-sm">
             Your name
           </label>
           <input
             type="text"
              name="name"
             id="Name"
             className="w-full text-sm h-[2rem] px-2 py-1 border-1 mt-2 rounded-sm focus:outline-blue-500 focus:outline-offset-6"
             value={data.name}
             onChange={handleChange}
           />
           {isError.name && <p className='text-red-500 text-sm mt-2'>{isError.name}</p>}
          </div>

          <div>
           <label htmlFor="" className="font-bold text-sm">
             Email or mobile phone number
           </label>
           <input
             type="email"
              name="email"
             id="emailOrPhone"
             className="w-full text-sm h-[2rem] px-2 py-1 border-1 mt-2 rounded-sm focus:outline-blue-500 focus:outline-offset-6"
             value={data.email}
             onChange={handleChange}
           />
              {isError.email && <p className='text-red-500 text-sm mt-2'>{isError.email}</p>}
          </div>

          <div>
           <label htmlFor="Password" className="font-bold text-sm">
             Password
           </label>
           <input
             type="password"
             name='password'
             id="Password"
             className="w-full text-sm h-[2rem] px-2 py-1 border-1 mt-2 rounded-sm focus:outline-blue-500 focus:outline-offset-6"
             value={data.password}
             onChange={handleChange}
           />
              {isError.password && <p className='text-red-500 text-sm mt-2'>{isError.password}</p>}
          </div>

          <div>
           <label htmlFor="Re-enter" className="font-bold text-sm">
             Re-enter password
           </label>
           <input
             type="password"
             name='rePassword'
             id="Re-enter"
             className="w-full text-sm h-[2rem] px-2 py-1 border-1 mt-2 rounded-sm focus:outline-blue-500 focus:outline-offset-6"
             value={data.rePassword}
             onChange={handleChange}
           />
              {isError.rePassword && <p className='text-red-500 text-sm mt-2'>{isError.rePassword}</p>}
          </div>

       

      
         <button type="submit" className='w-full text-sm primary-button py-2 rounded-full mt-3'>Continue</button>
         </form>
         
         <p className='text-sm'>By continuing, you agree to Amazon's <a href='#' className='text-blue-500 hover:text-black underline'>Condition of use</a> and <span className='text-blue-500 hover:text-black underline'>privacy notice</span></p>
          {success && <p className='text-green-500 text-sm mt-2'>{success}</p>}
         
           <hr className='mt-[10px]'/>
           <div className='flex flex-col gap-[2px]'>
           <h2 className='text-sm font-bold'>Buying for work?</h2>
           <a href="#" className=' text-blue-500 text-sm hover:text-black hover:underline'>Create a free Business account</a>
           </div>
           <hr />
           <div className='w-full relative flex  items-center justify-start mt-5 gap-2'>
       <p className='text-sm '>Already have an account?</p>
       <button onClick={navigateSignIn}  className=' text-sm rounded-full text-blue-500 border-gray-500 hover:text-black hover:underline'>Sign in {'\u203A'}</button>
       
     </div>
        </div>
          </div>
         

     
     
   </div>
   <hr className='text-gray-500 h-[8px] shadow-xl w-full mt-10'/>
     {/*footer */}
   
     <footer className='flex flex-col items-center justify-center gap-2 mt-10 mb-10'>
      <div className='flex gap-6 text-sm'>
         <a href='#' className='text-blue-500 hover:underline hover:text-black'>Condition of use</a>
         <a href='#' className='text-blue-500 hover:underline hover:text-black'>Privacy Notice</a>
         <a href='#' className='text-blue-500 hover:underline hover:text-black'>Help</a>
      </div>
      <div>
       <p className='text-sm text-gray-500'>&copy; 1996-{new Date().getFullYear()}, Amazon.com, Inc. or it's affiliets</p>
      </div>
     </footer>
 </div>
 )
}

export default Registration