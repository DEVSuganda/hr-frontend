
import MuiTypography from "./components/Typography";
import { MuiDrawer } from "./components/MuiDrawer";
import { Routes, Route } from 'react-router-dom'
import Holidays from "./MainPages/Employees/Holidays";
import Onboard from "./MainPages/Employees/Onboard";
import Profiles from "./MainPages/Employees/Profiles";
import AdminDashboard from "./MainPages/Dashboard/AdminDashboard";
import EmployeeDashboard from "./MainPages/Dashboard/EmployeeDashboard";
import KnowledgeBase from "./MainPages/KnowledgeBase/KnowledgeBase";
import Performance from "./MainPages/Performance/Performance";
import Assets from "./MainPages/Assets/Assets";
import Projects from "./MainPages/Projects/Projects";
import RecruitAndOnboard from "./MainPages/RecruitAndOnboard/RecruitAndOnboard";
import Resignation from "./MainPages/Resignation/Resignation";
import SalaryAndFinance from "./MainPages/SalaryAndFinance/SalaryAndFinance";
import Sales from "./MainPages/Sales/Sales";
import Attendance from "./MainPages/Attendance/Attendance";
import Login from "./MainPages/Authentication/Login";
import Layout from "./components/Layout";
import MuiDrawer2 from "./components/MuiDrawer2";
function App(){
  
  
  return ( 
  <>
    
    <MuiDrawer2 />
    {/* <Routes>
    <Route path="Login" element={<Login />}></Route>
      <Route path="Holidays" element={<Holidays />}></Route>
      <Route path="Onboard" element={<Onboard />}></Route>
      <Route path="Profiles" element={<Profiles />}></Route>
      <Route path="AdminDashboard" element={<AdminDashboard />}></Route>
      <Route path="EmployeeDashboard" element={<EmployeeDashboard />}></Route>
      <Route path="KnowledgeBase" element={<KnowledgeBase />}></Route>
      <Route path="Performance" element={<Performance />}></Route>
      <Route path="Policies" element={<Policies />}></Route>
      <Route path="Projects" element={<Projects />}></Route>
      <Route path="RecruitAndOnboard" element={<RecruitAndOnboard />}></Route>
      <Route path="Resignation" element={<Resignation />}></Route>
      <Route path="SalaryAndFinance" element={<SalaryAndFinance />}></Route>
      <Route path="Sales" element={<Sales />}></Route>
      <Route path="Attendance" element={<Attendance />}></Route>
      <Route path="MuiDrawer2" element={<MuiDrawer2 />}></Route>
      
    </Routes> */}
  
    
      
  </>
  )
}


export default App;