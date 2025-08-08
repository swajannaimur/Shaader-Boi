import React, { useEffect, useState } from 'react';
import TopSingleRecipes from '../TopSingleRecipes/TopSingleRecipes';
import { Link } from 'react-router';

const HighestLikes = () => {
    const [topRecipes, setTopRecipes] = useState([]);

    useEffect(() => {
        fetch('https://my-apple-recipe-server.vercel.app/top-liked-recipes')
            .then(res => res.json())
            .then(data => setTopRecipes(data))
            .catch(err => console.error('Error fetching top recipes:', err));
    }, []);

    return (
        <div className="my-16 px-4 flex flex-col items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-7xl">
                {topRecipes.map(recipe => (
                    <TopSingleRecipes key={recipe._id} recipe={recipe}></TopSingleRecipes>
                ))}
            </div>
            <Link to='/allRecipes'>
                <button className='btn btn-primary mt-12'>See All Recipes</button>
            </Link>
        </div>
    );
};

export default HighestLikes;
