import Login from "./components/Auth/login";
import AdminDash from "./components/Dashboard/AdminDashboard";
import EmployeeDash from "./components/Dashboard/EmployeeDashboard";
import Header from "./components/others/Header";


function App () {
    return ( 
        <>
        {/* <Login />*/}
        {/*<EmployeeDash /> */}
        <AdminDash />
        </>
     );
}

export default App;