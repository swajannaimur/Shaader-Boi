import React from 'react';
import { useLoaderData } from 'react-router';
import SingleRecipe from '../../Components/SingleRecipe/SingleRecipe';

const AllRecipes = () => {
    const recipeDatas = useLoaderData();

    return (
        <div className="px-4">
            <div className='text-center my-16 space-y-4'>
                <h3 className='text-primary font-bold text-3xl sm:text-4xl md:text-5xl'>All Recipes – Explore a World of Flavor</h3>
                <p className='text-gray-600 text-base sm:text-lg max-w-3xl mx-auto'>
                    Browse our complete collection of delicious recipes shared by home cooks and food lovers from around the world. Whether you're craving something traditional or looking to try something new, there's a recipe here for every taste, occasion, and skill level.
                </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-12'>
                {
                    recipeDatas.map(singleData => (
                        <SingleRecipe key={singleData._id} singleData={singleData} />
                    ))
                }
            </div>
        </div>
    );
};

export default AllRecipes;
