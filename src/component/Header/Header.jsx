import React from 'react'
import { IoTimerSharp } from "react-icons/io5";
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    let Active = {
        color: "rgba(102, 62, 1, 0.753)"
    };
  return (
    <>
    <header className='h-20 bg-transparent sh  flex justify-center sm:justify-evenly items-center gap-1 sm:gap-20 flex-col sm:flex-row'>
        <Link to="">
        <div className='flex items-center gap-2'>
            <IoTimerSharp className='text-[30px]'/>
            <h1 className='font-bold text-[30px] text-sh'>Timetrek.</h1>
        </div>
        </Link>
       <ul className='flex items-center gap-10 font-bold'>
            <NavLink to="" style={({isActive})=> isActive ? Active: null}>
                <li className='transition-colors duration-300 hover:text-amber-900 cursor-pointer'>Accueil</li>
            </NavLink>
            <NavLink to="/Categorie" style={({isActive})=> isActive ? Active: null}>
                 <li className='transition-colors duration-300 hover:text-amber-900 cursor-pointer'>Catégorie</li>
            </NavLink>
            <NavLink to="/Contact" style={({isActive})=> isActive ? Active: null}>
                <li className='transition-colors duration-300 hover:text-amber-900 cursor-pointer'>Contact</li>
            </NavLink>
       </ul>
    </header>
    </>
  )
}

export default Header