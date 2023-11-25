// // import React from 'react';
// // import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// // // import SignIn2 from './js/signIn2'
// // // import HelloAdmin from './js/helloAdmin';
// // import PageRouter from './js/pageRouter';

// // function App() {
// //   // const isLoggedIn = localStorage.getItem('access-token') !== null;

// //   return < PageRouter />
// // }

// // export default App;
import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignIn2 from "./Components/Signin/signIn2"
// import DashDashboard from './Components/DashContent/DashDash';
// import AddEmDashboard from './Components/Employee/AddDash';
// import AllEmDashboard from './Components/Employee/AllDash';
// import AddClDashboard from './Components/Class/AddDash';
// import AllClDashboard from './Components/Class/AllDash';
// import AllStDashboard from './Components/Student/AllDash';
// import AddStDashboard from './Components/Student/AddDash';
// import AddCoDashboard from './Components/Course/AddDash';
// import AllCoDashboard from './Components/Course/AllDash';
// // import AttendanceDashboard from './Components/Report/AttendanceDash';
// import ReportDashboard from './Components/Report/ReportDash';
// import NewMDashboard from './Components/Message/MessageDash';
// import AddRemindDashboard from "./Components/To-Do/AddRemindDashboard";
// import ManageRemindDashboard from "./Components/To-Do/ArchiveRemindDashboard";
// import ArchiveRemindDashboard from './Components/To-Do/ArchiveRemindDashboard';
// import AssessmentDashboard from './Components/Assessment/AssessmentDash';
// import MarkDashboard from './Components/MarkList/MarkDash';
// import ProfileDashboard from './Components/Profile/ProfileDash';
// import SettingsDash from './Components/Settings/SettingsDash';
// import AttendanceDashboard from './Components/Attendance/AttendanceDash';
// import SpecificMessageDashboard from './Components/Message/SpecificMessageDash';
// import NotificationDashboard from "./Components/To-Do/NotificationDashboard"
// import ReportAttendanceDashboard from "./Components/Report/ReportAttendanceDash"
// import EditDashboard from './Components/Profile/EditDash';




// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
  
//   useEffect(() => {

//     if(localStorage.getItem("access-token") !== null){
//       setIsLoggedIn(true)
//     }
//   }, [isLoggedIn])
//   console.log(isLoggedIn);

  
//   return (
//     <Router>
//       {console.log(isLoggedIn)}
//       <h1>{console.log(isLoggedIn)}</h1>
//       <Routes>
//         <Route path="/" element={<SignIn2 />} />
//         <Route
//           path="/dashboard"
//           element={
//             localStorage.getItem("access-token") !== null ? (
//               <DashDashboard />
//             ) : (
//               <Navigate to="/" />
//             )
//           }
//         />
//         <Route
//           path="/Employee/AddEmployee"
//           element={
//             localStorage.getItem("access-token") !== null &&
//             localStorage.getItem("role") === "Admin" ? (
//               <AddEmDashboard />
//             ) : (
//               <Navigate to="/" />
//             )
//           }
//         />
//         <Route
//           path="/Employee/AllEmployee"
//           element={
//             localStorage.getItem("access-token") !== null &&
//             localStorage.getItem("role") === "Admin" ? (
//               <AllEmDashboard />
//             ) : (
//               <Navigate to="/" />
//             )
//           }
//         />
//         <Route
//           path="/Class/AddClass"
//           element={
//             localStorage.getItem("access-token") !== null &&
//             localStorage.getItem("role") === "Admin" ? (
//               <AddClDashboard />
//             ) : (
//               <Navigate to="/" />
//             )
//           }
//         />
//         <Route
//           path="/Class/AllClass"
//           element={
//             localStorage.getItem("access-token") !== null &&
//             localStorage.getItem("role") === "Admin" ? (
//               <AllClDashboard />
//             ) : (
//               <Navigate to="/" />
//             )
//           }
//         />
//         <Route
//           path="/Student/AllStudent"
//           element={
//             localStorage.getItem("access-token") !== null &&
//             localStorage.getItem("role") === "Admin" ? (
//               <AllStDashboard />
//             ) : (
//               <Navigate to="/" />
//             )
//           }
//         />
//         <Route
//           path="/Student/AddStudent"
//           element={
//             localStorage.getItem("access-token") !== null &&
//             localStorage.getItem("role") === "Admin" ? (
//               <AddStDashboard />
//             ) : (
//               <Navigate to="/" />
//             )
//           }
//         />
//         <Route
//           path="/Course/AddCourse"
//           element={
//             localStorage.getItem("access-token") !== null &&
//             localStorage.getItem("role") === "Admin" ? (
//               <AddCoDashboard />
//             ) : (
//               <Navigate to="/" />
//             )
//           }
//         />
//         <Route
//           path="/Course/AllCourse"
//           element={
//             localStorage.getItem("access-token") !== null &&
//             localStorage.getItem("role") === "Admin" ? (
//               <AllCoDashboard />
//             ) : (
//               <Navigate to="/" />
//             )
//           }
//         />
//         <Route
//           path="/To-do/AddRemainder"
//           element={
//             localStorage.getItem("access-token") !== null &&
//             localStorage.getItem("role") === "Admin"||"Instructor"||"Manager"||"Accountant"? (
//               <AddRemindDashboard />
//             ) : (
//               <Navigate to="/" />
//             )
//           }
//         />
//         <Route
//           path="/To-do/Manage"
//           element={
//            (localStorage.getItem("access-token") !== null) &&
//             (localStorage.getItem("role") === "Admin"||"Instructor"||"Manager"||"Accountant") ? (
//               <ManageRemindDashboard />
//             ) : (
//               <Navigate to="/" />
//             )
//           }
//         />
//         <Route
//           path="/To-do/Archive"
//           element={
//             localStorage.getItem("access-token") !== null &&
//             localStorage.getItem("role") === "Admin"||"Instructor"||"Manager"||"Accountant" ? (
//               <ArchiveRemindDashboard />
//             ) : (
//               <Navigate to="/" />
//             )
//           }
//         />

//     <Route
//           path="/To-Do/Notification"
//           element={localStorage.getItem("access-token") !== null && localStorage.getItem("role") === "Admin"||"Instructor"||"Manager"||"Accountant"? <NotificationDashboard/> : <Navigate to="/" />}
//       />

//         <Route
//           path="/Attendance/AttendanceForm"
//           element={
//             localStorage.getItem("access-token") !== null &&
//             localStorage.getItem("role") === "Admin"||"Instructor" ? (
//               <AttendanceDashboard />
//             ) : (
//               <Navigate to="/" />
//             )
//           }
//         />
//         <Route
//           path="/Assessment/AssessmentForm"
//           element={
//             localStorage.getItem("access-token") !== null &&
//             localStorage.getItem("role") === "Instructor" ? (
//               <AssessmentDashboard />
//             ) : (
//               <Navigate to="/" />
//             )
//           }
//         />

// <Route
//           path="/Report/AttendanceReport"
//           element={
//             localStorage.getItem("access-token") !== null &&
//             localStorage.getItem("role") === "Admin"||"Instructor" ? (
//               <ReportAttendanceDashboard />
//             ) : (
//               <Navigate to="/" />
//             )
//           }
//         />
  
//         <Route
//           path="/Report/ReportCard"
//           element={
//             localStorage.getItem("access-token") !== null &&
//             localStorage.getItem("role") === "Admin"||"Instructor" ? (
//               <ReportDashboard />
//             ) : (
//               <Navigate to="/" />
//             )
//           }
//         />
//         <Route
//           path="/Message/NewMessage"
//           element={
//             localStorage.getItem("access-token") !== null &&
//             localStorage.getItem("role") === "Admin" ? (
//               <NewMDashboard />
//             ) : (
//               <Navigate to="/" />
//             )
//           }
//         />
//          <Route
//           path="/Message/Specific"
//           element={
//             localStorage.getItem("access-token") !== null &&
//             localStorage.getItem("role") === "Admin" ? (
//               <SpecificMessageDashboard/>
//             ) : (
//               <Navigate to="/" />
//             )
//           }
//         />
    
//         {/* <Route
//           path="/Message/Archive"
//           element={
//             localStorage.getItem("access-token") !== null &&
//             localStorage.getItem("role") === "Admin" ? (
//               <ArchiveDashboard />
//             ) : (
//               <Navigate to="/" />
//             )
//           }
//         /> */}
//         <Route
//           path="/Assessment/Assessment"
//           element={
//             localStorage.getItem("access-token") !== null &&
//             localStorage.getItem("role") === "Instructor" ? (
//               <AssessmentDashboard />
//             ) : (
//               <Navigate to="/" />
//             )
//           }
//         />
//         <Route
//           path="/Marklist/CheckMarklist"
//           element={
//             localStorage.getItem("access-token") !== null &&
//             localStorage.getItem("role") === "Instructor" ? (
//               <MarkDashboard />
//             ) : (
//               <Navigate to="/" />
//             )
//           }
//         />

//         <Route
//           path="/Profile/ViewProfile"
//           element={
//             localStorage.getItem("access-token") !== null
//              ? (
//               <ProfileDashboard />
//             ) : (
//               <Navigate to="/" />
//             )
//           }
//         />
//         <Route
//           path="/EditProfile"
//           element={
//             localStorage.getItem("access-token") !== null
//              ? (
//               <EditDashboard />
//             ) : (
//               <Navigate to="/" />
//             )
//           }
//         />
  
//         <Route
//           path="/Settings"
//           element={
//             localStorage.getItem("access-token") !== null &&
//             localStorage.getItem("role") === "Instructor" ? (
//               <SettingsDash />
//             ) : (
//               <Navigate to="/" />
//             )
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }


// export default App;
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
import { InstructorPrivateRoutes } from './utils/InstructorPrivateRoutes';
import AssessmentDashboard from './Components/Assessment/AssessmentDash';
import MarkDashboard from './Components/MarkList/MarkDash';
import AttendanceDashboard from './Components/Attendance/AttendanceDash';
import { AllPrivateRoutes } from './utils/AllPrivateRoutes';
import SettingsDash from './Components/Settings/SettingsDash';
import EditDashboard from './Components/Profile/EditDash';
import ProfileDashboard from './Components/Profile/ProfileDash';
import ReportDashboard from './Components/Report/ReportDash';
import NewMDashboard from './Components/Message/MessageDash';
import SpecificMessageDashboard from './Components/Message/SpecificMessageDash';
import NotificationDashboard from './Components/To-Do/NotificationDashboard';
import ArchiveRemindDashboard from './Components/To-Do/ArchiveRemindDashboard';
import ManageRemindDashboard from './Components/To-Do/ManageRemindDashboard';
import AddRemindDashboard from './Components/To-Do/AddRemindDashboard';

function App () {
    return(
        <div>
            <Router>
                <Routes>
                    <Route element = {<AdminPrivateRoutes/>}>
                        <Route element = {<AddClDashboard/>} path="/Class/AddClass" exact/>
                        <Route element = {<AllClDashboard/>} path="/Class/AllClass" exact/>
                        <Route element = {<AddEmDashboard/>} path="/Employee/AddEmployee" exact/>
                        <Route element = {<AllEmDashboard/>} path="/Employee/AllEmployee" exact/>
                        <Route element = {<AddStDashboard/>} path="/Student/AddStudent" exact/>
                        <Route element = {<AllStDashboard/>} path="/Student/AllStudent" exact/>
                        <Route element = {<AddCoDashboard/>} path="/Course/AddCourse" exact/>
                        <Route element = {<AllCoDashboard/>} path="/Course/AllCourse" exact/>
                        <Route element = {<ReportDashboard/>} path="/Report/ReportCard" exact/>
                        <Route element = {<NewMDashboard/>} path="/Message/NewMessage" exact/>
                        <Route element = {<SpecificMessageDashboard/>} path="/Message/Specific" exact/>
                    </Route>
                    <Route element = {<InstructorPrivateRoutes/>}>
                        <Route element = {<AssessmentDashboard/>} path='/Assessment/AssessmentForm' exact />
                        <Route element = {<MarkDashboard/>} path='/Marklist/CheckMarklist' exact />
                        <Route element = {<AttendanceDashboard/>} path='/Attendance/AttendanceForm' exact />
                    </Route>
                    <Route element = {<AllPrivateRoutes/>}>
                        <Route element = {<DashDashboard/>} path="/Dashboard" exact/>
                        <Route element = {<SettingsDash/>} path='/Settings' exact/>
                        <Route element = {<EditDashboard/>} path='/EditProfile' exact/>
                        <Route element = {<ProfileDashboard/>} path='/Profile/ViewProfile' exact/>
                        <Route element = {<NotificationDashboard/>} path='/To-Do/Notification' exact/>
                        <Route element = {<ArchiveRemindDashboard/>} path='/To-Do/Archive' exact/>
                        <Route element = {<ManageRemindDashboard/>} path='/To-Do/Manage' exact/>
                        <Route element = {<AddRemindDashboard/>} path='/To-Do/AddRemainder' exact/>
                    </Route>
                    <Route path="/" element={<SignIn2 />}  />
                </Routes>
            </Router>
        </div>
    )
}
export default App;