import React from 'react'
import {BrowserRouter, Routes, Route}  from 'react-router-dom'
import {Dashboard} from './pages/Dashboard'
import {SendMoney} from './pages/SendMoney'
import {Signin} from './pages/Signin'
import {Signup} from './pages/Signup'
import {InitialPage} from './pages/InitialPage'



function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<InitialPage />}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
