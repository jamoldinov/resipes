import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='bg-teal-700 '>
        <div className='container max-w-5xl mx-auto flex items-center py-5 justify-between'>
        <Link className='text-slate-300 text-3xl cursor-pointer' to='/'>Cooking :)</Link>
        <Link className='text-slate-300 py-2 px-3 border rounded-lg hover:text-green-700 hover:bg-teal-200 ' to='create' >Create</Link>
        </div>
    </header>
  )
}

export default Header