import React from 'react';

function Header() {
    return ( 
        <div className=' bg-transparent flex justify-between items-end '>
            <h1 className='text-2xl font-semibold'>Hello <br/> <span className='text-3xl font-semibold'>Aditya!!👋</span></h1>
            <button className='bg-red-700 p-2 rounded-lg hover:bg-red-800'>Log Out</button>

        </div>
     );
}

export default Header;