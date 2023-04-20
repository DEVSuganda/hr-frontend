
import MuiTypography from "./components/Typography";
import { MuiDrawer } from "./components/MuiDrawer";
import { Routes, Route } from 'react-router-dom'
import Holidays from "./MainPages/Employees/Holidays";
import Onboard from "./MainPages/Employees/Onboard";
import Profiles from "./MainPages/Employees/Profiles";
function App(){
  
  return ( 
  <div>
    <Routes>
      <Route path="Holidays" element={<Holidays />}></Route>
      <Route path="Onboard" element={<Onboard />}></Route>
      <Route path="Profiles" element={<Profiles />}></Route>
    </Routes>
      <MuiDrawer />
      
  </div>
  )
}


export default App;