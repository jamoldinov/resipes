import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

function MainLayout() {
  return (
    <>
    <Header/>
    <main className='flex-grow'>
        <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default MainLayout