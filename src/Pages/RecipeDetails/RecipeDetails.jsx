import React from 'react';
import { useLoaderData } from 'react-router';

const RecipeDetails = () => {
    const recipeDetailsData = useLoaderData();
    const { name, image, ingredients, instructions, cuisine, time, meals, categories, likeCount } = recipeDetailsData;

    return (
        <div className='my-12 px-4'>
            <div>
                <p className='text-center text-primary font-bold text-xl sm:text-2xl mt-10 sm:mt-20'>
                    {likeCount} <span className='text-secondary text-base sm:text-lg font-semibold'>people interested in this recipe</span>
                </p>
            </div>
            <div className='flex justify-center items-center bg-gray-50 p-4 sm:p-8'>
                <div className='bg-white rounded-2xl shadow-lg w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 p-4 sm:p-8'>
                    <div>
                        <img src={image} alt={name} className='rounded-xl w-full h-60 sm:h-64 object-cover' />
                    </div>

                    <div className='space-y-4 text-sm sm:text-base'>
                        <h2 className='text-2xl sm:text-3xl font-bold text-primary'>{name}</h2>
                        <p><span className='font-semibold text-secondary'>Cuisine:</span> {cuisine}</p>
                        <p><span className='font-semibold text-secondary'>Meals:</span> {meals}</p>
                        <p><span className='font-semibold text-secondary'>Category:</span> {categories}</p>
                        <p><span className='font-semibold text-secondary'>Preparation Time:</span> {time} min</p>
                        <div>
                            <h3 className='font-semibold text-secondary'>Ingredients:</h3>
                            <p>{ingredients}</p>
                        </div>
                        <div>
                            <h3 className='font-semibold text-secondary'>Instructions:</h3>
                            <p>{instructions}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetails;
