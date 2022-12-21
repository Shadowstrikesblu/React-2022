import React from 'react'
import { Outlet } from 'react-router-dom'
// import Header from '../components/header'
import Navbar from './components/Navbar/Navbar'

<<<<<<< HEAD

=======
>>>>>>> 1f4e813939b4fbbefa24f5baa9b4ae2fa7ca758b
export default function Layout() {
  return (
    <>
      <Navbar/>
      <main className="flex flex-col min-h-screen bg-gray-100">
        <Outlet />
      </main>
    </>
  )
}
