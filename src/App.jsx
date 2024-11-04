import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CreateUsers from './components/CreateUsers'
import Home from './components/Home'
import ReadUser from './components/ReadUser'
import UpdateUser from './components/UpdateUser'
import Layout from './components/Layout'
import MainPage from './components/MainPage'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
           <Route path='/viev' element={<Home />} />
           <Route path='create' element={<CreateUsers />} />
           <Route index element={<MainPage />} />
        </Route>
        <Route path='/read/:id' element={<ReadUser />} />
        <Route path='/update/:id' element={<UpdateUser />} />
      </Routes>
    </div>
  )
}

export default App
