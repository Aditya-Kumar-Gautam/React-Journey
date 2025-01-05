import React from 'react';


function CreateTask() {
  return (
    <div className="mt-5 bg-zinc-800 rounded-md">
      <form className="flex justify-between items-start p-4">
        {/* Task Part */}
        <div className='w-1/2 h-full p-2'>
          <h3 className="mb-2 mt-2 text-gray-300 ">Task Title</h3>
          <input className=" rounded-md bg-transparent border-2 border-gray-600 py-1 px-5 w-4/5 outline-none" type="text" placeholder="Enter Task Title" />
          <h3 className="mb-2 mt-2 text-gray-300">Date</h3>
          <input className="text-gray-300 rounded-md outline-none w-4/5 py-1 px-5 bg-transparent border-gray-600 border-2" type="date" />
          <h3 className="mb-2 mt-2 text-gray-300">Assign To</h3>
          <input className="bg-transparent rounded-md border-2 border-gray-600 py-1 px-5 w-4/5 outline-none" type="text" placeholder="Employee Name" />
          <h3 className="mb-2 mt-2 text-gray-300">Category</h3>
          <input className="bg-transparent rounded-md border-2 border-gray-600 py-1 px-5 w-4/5 outline-none" type="text" placeholder="Design,Dev,etc" />
        </div>
        {/* Task Description Part */}
        <div className="flex justify-end  ">
          <div className=' flex flex-col  '>
            <h3 className="mb-0.5 text-gray-300 px-2 py-1">Task Description</h3>
            <textarea className=" rounded-md bg-transparent border-2 border-gray-600 py-1 px-2 text-gray-300  outline-none" cols="90" rows="10" placeholder="Enter Task Description" > Enter task details </textarea>
            <button className="bg-red-400 hover:bg-red-800 mt-3  p-4 rounded-md">Create Task </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
