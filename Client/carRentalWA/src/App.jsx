import { createBrowserRouter , createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Page from './components/Page'


import LogIn from './components/loginsignup/LogIn'
import SignUp from './components/loginsignup/signUp'

import './App.css'

function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element = {<Page/>}>
      <Route path='login' element = {<LogIn/>}></Route>
      <Route path='signup' element = {<SignUp/>}></Route>
    </Route>
    )
  )


  return (

    <RouterProvider router={router}></RouterProvider>

  )
}

export default App
