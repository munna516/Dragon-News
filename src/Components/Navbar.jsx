import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import userIcon from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <div className='flex justify-between items-center mt-7'>
            <div>
                {user && user?.email}
            </div>
            <div className='space-x-5'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className='flex items-center gap-3'>
                <div>
                    {
                        user && user?.email ? <div className='flex flex-col items-center'>
                            <img className='w-14 rounded-full border-2 p-1' src={user?.photoURL} alt="" />
                            <p>{user?.displayName}</p>
                        </div>
                            : <img src={userIcon} alt="" />
                    }
                </div>
                {
                    user && user?.email ? <button onClick={logOut} className='btn btn-neutral'>Log-Out</button> : <Link to='/auth/login' className='btn btn-neutral'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;