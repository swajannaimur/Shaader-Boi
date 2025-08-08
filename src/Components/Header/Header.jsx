import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Auth Context/AuthContext';
import { useState, useEffect } from "react";
import Swal from 'sweetalert2';

const Header = () => {
    const { user, logOut } = use(AuthContext);
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") === "light" ? "light" : "dark"
    );

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        setTheme(savedTheme);
        document.querySelector("html").setAttribute("data-theme", savedTheme);
    }, [theme]);

    const handleThemeChange = (event) => {
        const newTheme = event.target.checked ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    const links = (
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/allRecipes'>All Recipes</NavLink></li>
            <li><NavLink to='/addRecipe'>Add Recipe</NavLink></li>
            <li><NavLink to='/myRecipes'>My Recipes</NavLink></li>
        </>
    );

    const handleLogOut = () => {
        logOut().then(result => {
            Swal.fire({
                title: "Logged Out Successfully",
                icon: "error",
                draggable: true
            });
        }).catch(error => {
            console.log(error);
        });
    };

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                {/* dropdown */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>

                {/* logo */}
                <div className='flex flex-col justify-center items-center'>
                    <img src="https://img.icons8.com/?size=100&id=kD9IXES7oIkG&format=png&color=e11d48" alt="" className='w-12' />
                    <p className='text-secondary hidden md:block font-bold text-center text-sm lg:text-base'>Shaad er Boi</p>
                </div>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg font-semibold">
                    {links}
                </ul>
            </div>

            <div className="navbar-end flex flex-wrap items-center gap-2">
                <div>
                    <input
                        type="checkbox"
                        value="dark"
                        className="toggle theme-controller mr-2"
                        checked={theme === "dark"}
                        onChange={handleThemeChange}
                    />
                    <span className='text-md text-primary font-bold'>
                        {theme === 'dark' ? 'Light' : 'Dark'}
                    </span>
                </div>

                {
                    user ? (
                        <>
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL || "https://img.icons8.com/?size=96&id=13042&format=png"} alt="User" />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li className='text-xl text-primary font-bold'>{user.displayName}</li>
                                    <li><button className='text-lg text-primary font-bold' onClick={handleLogOut}>Logout</button></li>
                                </ul>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='flex items-center justify-center gap-2'>
                                <Link to='/login' className='btn btn-primary btn-sm'>Login</Link>
                                <Link to='/register' className='btn btn-secondary btn-sm'>Register</Link>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default Header;
