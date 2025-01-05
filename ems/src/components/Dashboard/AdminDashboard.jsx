import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTasks from "../others/AllTask";

function AdminDash() {
  return (
    <div className="h-screen w-full p-8">
        <Header />
        <CreateTask />
        <AllTasks />
    </div>
  );
}

export default AdminDash;
