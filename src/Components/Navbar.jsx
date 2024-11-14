import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import userIcon from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className='flex justify-between items-center mt-7'>
            <div>
                {user?.name}
            </div>
            <div className='space-x-5'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className='flex items-center gap-3'>
                <div>
                    <img src={userIcon} alt="" />
                </div>
                <Link to='/auth/login' className='btn btn-neutral'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;