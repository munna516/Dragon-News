import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../Components/NewsCard';

const CategoryNews = () => {
    const { data: news } = useLoaderData()
    return (
        <div>
            <h1 className='font-semibold mb-6'>Dragon News Home</h1>
            <p className='text-sm text-gray-400'>{news.length} News found in this category</p>

            <div className="space-y-5">
                {
                    news.map(singleNews => <NewsCard  key={singleNews._id} news={singleNews} ></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;