import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryNews = () => {
    const {data} = useLoaderData()
    console.log(data);
    return (
        <div>
            <h1 className='font-bold '>{data.length} News found in this category</h1>
        </div>
    );
};

export default CategoryNews;