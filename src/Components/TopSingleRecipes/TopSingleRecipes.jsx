import React from 'react';
import { Link } from 'react-router';

const TopSingleRecipes = ({ recipe }) => {
    const { _id,image, name, cuisine, likeCount } = recipe
    return (
        <div className='h-full'>
            <div className=' flex flex-col  items-center  w-full border border-secondary rounded-2xl p-5 shadow'>
                <img src={image} alt="" className='rounded-xl w-[400px] h-[200px] object-cover' />
                <div className='text-center space-y-2 mt-12 mb-6'>
                    <p className='text-primary text-2xl font-bold'>{name}</p>
                    <p className='text-secondary text-xl font-semibold'>{cuisine}</p>
                    <p className='font-semibold text-secondary'>Likes: {likeCount}</p>
                </div>
                <Link to={`/recipe/${_id}`}><button className='btn btn-primary'>View Details</button></Link>
            </div>
        </div>
    );
};

export default TopSingleRecipes;