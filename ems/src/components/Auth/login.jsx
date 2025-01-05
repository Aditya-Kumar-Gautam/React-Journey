import React, { useState } from 'react';

function Login () {

    const[Email,setEmail] = useState('');
    const[Password,setPassword] = useState('');
    


    const submitHandler = (e)=>{
        e.preventDefault();
        console.log(Email);
        console.log(Password);

        setEmail('');
        setPassword('');
        

    }

    return ( 
        <div className='w-screen h-screen flex justify-center items-center'>
            <div className='border-2 border-red-500 h-4/5  flex flex-col justify-center items-center rounded-3xl '>
                <div className='text-gray-300 text-5xl font-bold '>LOG IN</div>
                <form 
                onSubmit={(e)=>{submitHandler(e)}}
                className='flex flex-col p-8 text-white '>
                    <input
                    value={Email}
                    onChange={(e)=>{
                        setEmail(e.target.value);
                    }} 
                    className='py-2 px-3 rounded-2xl border-2 border-red-400 bg-transparent outline-none placeholder:text-gray-500 ' type="email" name='Email' required placeholder='Enter your email'/>
                    <input
                    value={Password}
                    onChange={(e)=>{
                        setPassword(e.target.value);
                    }}
                    className='py-2 px-3 rounded-2xl mt-4 mb-4 border-2 border-red-400 bg-transparent outline-none placeholder:text-gray-500 ' type="password" name='Password' required placeholder='Enter your password' />
                    <div className='flex justify-around text-sm text-gray-400 '>
                        <div className='flex p-2  items-center justify-center'>
                            <input className='border-none outline-none decoration-none bg-transparent' type="checkbox"/>
                            <div className='ml-1'>
                                Remember me
                            </div>
                        </div>
                        <div className='p-2 text-red-700 hover:text-red-800'>
                            <a href="">Forgot Password?</a>
                        </div>
                    </div>
                    <button className='m-2 bg-red-400 rounded-full p-2 hover:bg-red-600' type='Submit'>Log In</button>
                </form>

            </div>

        </div>
     );
}

export default Login ;