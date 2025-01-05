import React from 'react';

function TaskBanner() {
    return (  
        <div className=' mt-9 flex justify-between gap-3 '>
            <div className='bg-blue-400 w-[15%] p-4 rounded-lg'>
                <h2 className='text-5xl font-semibold'>0</h2>
                <h3 className='text-xl font-medium mt-3'>New Tasks</h3>
            </div>
            <div className='bg-yellow-400 text-black w-[15%] p-4 rounded-lg'>
                <h2 className='text-5xl font-semibold'>0</h2>
                <h3 className='text-xl font-medium mt-3'>Accepted</h3>
            </div>
            <div className='bg-green-600 w-[15%] p-4 rounded-lg'>
                <h2 className='text-5xl font-semibold'>0</h2>
                <h3 className='text-xl font-medium mt-3'>Completed</h3>
            </div>
            <div className='bg-red-700 w-[15%] p-4 rounded-lg'>
                <h2 className='text-5xl font-semibold'>0</h2>
                <h3 className='text-xl font-medium mt-3'>Failed</h3>
            </div>
           
            
        </div>
    );
}

export default TaskBanner;