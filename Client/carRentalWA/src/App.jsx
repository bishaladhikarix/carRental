import { BrowserRouter , Routes , Route } from 'react-router-dom'

import Navigation from './components/Navigationi/Navigation'
import LogIn from './components/loginsignup/LogIn'
import SignUp from './components/loginsignup/signUp'

import './App.css'

function App() {
  

  return (
      <BrowserRouter>
      
        <Routes>
           <Route index element={<Navigation></Navigation>}></Route>
           <Route path='login' element = {<LogIn></LogIn>}></Route>
           <Route path='signup' element = {<SignUp></SignUp>}></Route>
        </Routes>
      
      </BrowserRouter>
  )
}

export default App
