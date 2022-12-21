import React from 'react'
import { Outlet } from 'react-router-dom'
// import Header from '../components/header'
import Navbar from './components/Navbar/Navbar'


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
