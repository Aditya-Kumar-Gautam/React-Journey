import React from 'react';
import Header from '../others/Header';
import TaskBanner from '../others/TaskBanner';
import TaskList from '../task/TaskList';

function EmployeeDash() {
    return ( 
        <div className='p-10 bg-[#1C1C1C] h-screen'>
            <Header />
            <TaskBanner />
            <TaskList />
        </div>
     );
}

export default EmployeeDash;