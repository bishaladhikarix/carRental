import { createBrowserRouter , createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import Navigation from './components/Navigationi/Navigation'
import LogIn from './components/loginsignup/LogIn'
import SignUp from './components/loginsignup/signUp'

import './App.css'

function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element = {<Navigation></Navigation>}>
      <Route path='login' element = {<LogIn></LogIn>}></Route>
      <Route path='signup' element = {<SignUp></SignUp>}></Route>
   </Route>
    )
  )


  return (

    <RouterProvider router={router}></RouterProvider>

  )
}

export default App
