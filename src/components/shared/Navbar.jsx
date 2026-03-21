import React from 'react';
import Logo from '../Logo';
import { NavLink } from 'react-router';
import { GoArrowUpRight } from "react-icons/go";
import useAuth from '../../hooks/useAuth';


const Navbar = () => {

  const {user,logoutUser} = useAuth();

  const hanleLogout = () => {
    logoutUser()
    .then(()=>{ })
    .catch(error=>{
      console.log(error);
    }) 
   }

    const nav =<>
    <li className=''><NavLink to={'/'}>Services</NavLink></li>
    <li className=''><NavLink to={'/coverage'}>Coverage</NavLink></li>
    <li className=''><NavLink to={'/about'}>About Us</NavLink></li>
    <li className=''><NavLink to={'/pricing'}>Pricing</NavLink></li>
    <li className=''><NavLink to={'/blog'}>Blog</NavLink></li>
    <li className=''><NavLink to={'/contact'}>Contact</NavLink></li>
    </>

    return (
        <div className="navbar  shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow">
        {nav}
      </ul>
    </div>
    <a className="btn btn-ghost  "><Logo></Logo></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {nav}
    </ul>
  </div>
  <div className="navbar-end ">
    {user ? (
          <>
            
            <button onClick={hanleLogout} className="btn mr-2">
              Logout
            </button>
            <NavLink to="/register" className="btn bg-primary">
              Be a rider
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/login" className="btn mr-2">
              Sign In
            </NavLink>
            <NavLink to="/register" className="btn bg-primary">
              Be a rider
            </NavLink>
          </>
        )}
    <NavLink to={'/contact'} className="btn btn-circle bg-black "><GoArrowUpRight  className='text-primary stroke-1' size={22} />
</NavLink>
  </div>
</div>
    );
};

export default Navbar;