


import { BrowserRouter,Routes,Route } from "react-router-dom"

import Registerpage from "./pages/Registerpage/Registerpage"
import Loginpage from "./pages/Loginpage/loginpage"
import Homepage from "./pages/Homepage/Homepage"


function App() {
  

  return (
    
      <div className="main-ctn">
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Loginpage/> }/>
            <Route path="/homepage" element={<Homepage/>} />
            <Route path="/registerpage" element={<Registerpage/>}/>
            
          </Routes>
        </BrowserRouter>
        
      </div>
    
  )
}

export default App
