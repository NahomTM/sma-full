import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashDashboard from "./Components/DashContent/DashDash";
import AddEmDashboard from './Components/Employee/AddDash';
import AllEmDashboard from './Components/Employee/AllDash';
import AddClDashboard from './Components/Class/AddDash';
import AllClDashboard from './Components/Class/AllDash';
import AllStDashboard from './Components/Student/AllDash';
import AddStDashboard from './Components/Student/AddDash';
import AddCoDashboard from './Components/Course/AddDash';
import AllCoDashboard from './Components/Course/AllDash';
import AdminPrivateRoutes from "./utils/AdminPrivateRoutes";

function AllRoutes () {
    return(
        <div>
            <Router>
                <Routes>
                    <Route element = {<AdminPrivateRoutes/>}>
                        <Route element = {<DashDashboard/>} path="/Dashboard" exact/>
                        <Route element = {<AddClDashboard/>} path="/Class/AddClass" exact/>
                        <Route element = {<AllClDashboard/>} path="/Class/AllClass" exact/>
                        <Route element = {<AddEmDashboard/>} path="/Employee/AddEmployee" exact/>
                        <Route element = {<AllEmDashboard/>} path="/Employee/AllEmployee" exact/>
                        <Route element = {<AddStDashboard/>} path="/Student/AddStudent" exact/>
                        <Route element = {<AllStDashboard/>} path="/Student/AllStudent" exact/>
                        <Route element = {<AddCoDashboard/>} path="/Course/AddCourse" exact/>
                        <Route element = {<AllCoDashboard/>} path="/Course/AllCourse" exact/>
                    </Route>
                </Routes>
            </Router>
        </div>
    )
}