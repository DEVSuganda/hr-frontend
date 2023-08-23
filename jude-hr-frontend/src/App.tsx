
import MuiTypography from "./components/Typography";
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
import Clients from "./MainPages/Clients/Clients";
import Resignation from "./MainPages/Resignation/Resignation";
import SalaryAndFinance from "./MainPages/SalaryAndFinance/SalaryAndFinance";
import Sales from "./MainPages/Sales/Sales";
import Attendance from "./MainPages/Attendance/Attendance";
import Login from "./MainPages/Authentication/Login";
import MuiDrawer2 from "./components/MuiDrawer2";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useMediaQuery } from 'react-responsive'

function App(){

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  // const theme = createTheme({
  //   typography: {
  //     fontFamily: '"Segoe UI"',
      
  //   },
   

  //   components: {
  //     MuiCssBaseline: {
  //       styleOverrides: `
  //         @font-face {
  //           font-family: '"Segoe UI"';
  //           font-style: normal;
  //           font-display: swap;
  //           font-weight: 400;
  //         }
  //       `,
  //     },
  //   },
  // });
  
  return ( 
  <>
    {/* <ThemeProvider theme={theme}> */}
    <CssBaseline />

    {isDesktopOrLaptop && <MuiDrawer2 />}
    {isBigScreen && <MuiDrawer2 />}
    {isTabletOrMobile && <MuiDrawer2 />}
    
    {isRetina && <MuiDrawer2 />}

    {/* <MuiDrawer2 /> */}
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
  
    {/* </ThemeProvider> */}
      
  </>
  )
}


export default App;