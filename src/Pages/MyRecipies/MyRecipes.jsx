import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Components/Auth Context/AuthContext';
import MySingleRecipes from '../../Components/MySingleRecipes/MySingleRecipes';

const MyRecipes = () => {
    const { user } = useContext(AuthContext);
    const [myRecipes, setMyRecipes] = useState([]);

    useEffect(() => {
        if (user?.uid) {
            fetch(`https://my-apple-recipe-server.vercel.app/my-recipes/${user.uid}`)
                .then(res => res.json())
                .then(data => setMyRecipes(data));
        }
    }, [user]);

    return (
        <div className='my-12 px-4'>
            <div className='text-center my-16 space-y-4'>
                <h3 className='text-primary font-bold text-3xl sm:text-4xl md:text-5xl'>
                    My Recipes – Your Culinary Creations
                </h3>
                <p className='text-base sm:text-lg text-gray-700 max-w-3xl mx-auto'>
                    Here are the delicious recipes you've added. Revisit your favorite dishes, update them, or simply take pride in your personal recipe collection crafted with love and flavor.
                </p>
            </div>

            {myRecipes.length === 0 ? (
                <p className='text-center text-secondary text-lg sm:text-xl font-bold mt-10'>
                    You didn’t add any recipes yet on your own.
                </p>
            ) : (
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8'>
                    {myRecipes.map(MySingleRecipe => (
                        <MySingleRecipes
                            key={MySingleRecipe._id}
                            myRecipes={myRecipes}
                            setMyRecipes={setMyRecipes}
                            MySingleRecipe={MySingleRecipe}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyRecipes;
