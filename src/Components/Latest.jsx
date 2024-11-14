import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const Latest = () => {
    return (
        <div className='flex gap-2 bg-base-200 p-2 rounded-sm'>
            <p className='bg-[#D72050] py-1 px-3 text-white'>Latest</p>
            <Marquee speed={100} pauseOnHover={true} className='space-x-10 font-semibold'>
                <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptatum.</Link>
                <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptatum.</Link>
                <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptatum.</Link>
            </Marquee>
        </div>
    );
};

export default Latest;