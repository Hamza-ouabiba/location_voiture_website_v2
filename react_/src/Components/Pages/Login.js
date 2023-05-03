import React, { useState } from 'react';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault(); 
         
        setShowPopup(false);
      };
    return (
            
        //         <div className="relative">
        //         <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
        //             <div className="bg-white rounded-lg p-8">
        //                 <h2 className="text-lg font-bold mb-4">Login</h2>
        //                 <form onSubmit={handleSubmit}>
        //                     <div className="mb-4">
        //                         <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
        //                             Username
        //                         </label>
        //                         <input
        //                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        //                             id="username"
        //                             type="text"
        //                             value={username}
        //                             onChange={(e) => setUsername(e.target.value)}
        //                         />
        //                     </div>
        //                     <div className="mb-6">
        //                         <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
        //                             Password
        //                         </label>
        //                         <input
        //                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        //                             id="password"
        //                             type="password"
        //                             value={password}
        //                             onChange={(e) => setPassword(e.target.value)}
        //                         />
        //                     </div>
        //                     <div className="flex items-center justify-between">
        //                         <button
        //                             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        //                             type="submit"
        //                         >
        //                             Sign In
        //                         </button>
        //                         <button
        //                             className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        //                             onClick={() => setShowPopup(false)}
        //                         >
        //                             Cancel
        //                         </button>
        //                     </div>
        //                 </form>
        //             </div>
        //         </div>
          
        //  </div>
        <div className="relative"> 
           <div className="flex flex-col justify-center items-center h-screen fixed inset-0 bg-gray-800 bg-opacity-75">
             <div className=" md:w-1/3  lg:w-1/4 bg-white p-10 rounded-xl shadow-lg">
               <h1 className="text-3xl font-bold mb-4 text-center">Login</h1>
               <form onSubmit={handleSubmit}>
                 <div className="mb-4">
                   <label htmlFor="username" className="block font-medium mb-2">
                     Username:
                   </label>
                   <div className="relative">
                     <input
                       type="text"
                       id="username"
                       name="username"
                       className="border border-gray-400 p-2 rounded w-full"
                       placeholder="Username"
                       required
                     /> 
                   </div>
                 </div>
                 <div className="mb-4">
                   <label htmlFor="password" className="block font-medium mb-2">
                     Password:
                   </label>
                   <div className="relative">
                     <input
                       type="password"
                       id="password"
                       name="password"
                       className="border border-gray-400 p-2 rounded w-full"
                       placeholder="Password"
                       required
                     /> 
                   </div>
                 </div>
                 <div className="mb-4">
                   <a href="#" className="text-purple-700 underline">
                     Forgot Password?
                   </a>
                 </div>
                 <button
                   type="submit"
                   className="bg-gradient-to-r from-cyan-500 py-2 px-4 to-blue-500 cursor-pointer text-white rounded w-full"
                 >
                   Login
                 </button>
                 <div className="mt-4 text-center">
                   Not a member?{' '}
                   <a href="#" className="text-purple-700 underline">
                     Signup
                   </a>
                 </div>
               </form>
             </div>
           </div>
           </div>
         );
       } 
          
 