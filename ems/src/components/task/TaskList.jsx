import React from 'react';

function TaskList() {
    return ( 
        <div id="taskList" className='overflow-x-auto mt-10 py-5 w-full h-[55%] flex  flex-nowrap gap-5 items-center justify-start'>
            <div className='flex-shrink-0 bg-red-400 h-full w-[300px]  rounded-xl'>
                <div className='flex justify-between'>
                    <h2 className='bg-red-600 px-1 m-2 rounded-md font-semibold'>High</h2>
                    <h3 className='m-2 font-semibold'>04 January 2025</h3>
                </div>
                <div className='mt-5'>
                    <h1 className='p-2 text-3xl font-bold'>Task 1</h1>
                    <h2 className='p-2 text-sm mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam nesciunt quidem </h2>
                </div>
            </div>

        </div>
     );
}

export default TaskList;