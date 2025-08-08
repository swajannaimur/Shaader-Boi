import React, { useContext, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Components/Auth Context/AuthContext';

const AddRecipe = () => {
    const { user } = useContext(AuthContext);
    const [cuisine, setCuisine] = useState('');
    const cuisineTypes = ['Bengali', 'Mexican', 'Italian', 'Indian', 'Chinese'];
    const meals = ['Breakfast', 'Lunch', 'Dinner'];

    const handleAddRecipe = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const selectedMeals = meals.filter(meal => formData.getAll('meals').includes(meal));

        const newRecipe = {
            name: formData.get('name'),
            image: formData.get('image'),
            ingredients: formData.get('ingredients'),
            instructions: formData.get('instructions'),
            cuisine,
            time: formData.get('time'),
            meals: selectedMeals,
            userId: user?.uid,
            userEmail: user?.email,
            likeCount: 0
        };

        try {
            const res = await fetch('https://my-apple-recipe-server.vercel.app/recipes', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(newRecipe)
            });
            const data = await res.json();
            if (data.insertedId || data.acknowledged) {
                toast.success('Your recipe is added successfully');
                form.reset();
                setCuisine('');
            }
        } catch (error) {
            toast.error('Failed to add recipe');
            console.error(error);
        }
    };

    const handleSelect = (value) => setCuisine(value);

    return (
        <div>
            <div className='text-center my-16 space-y-4'>
                <h3 className='text-primary font-bold text-5xl'>Add a New Recipe</h3>
                <p>Share your favorite dish with the world!</p>
            </div>

            <div className='mb-10'>
                <form onSubmit={handleAddRecipe} className='border-2 border-primary rounded-2xl px-32 py-16'>
                    <div className='grid grid-cols-2 gap-8'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-lg text-primary">Name</legend>
                            <input type="text" name='name' required className="input w-full border-2 border-secondary" placeholder="Enter dish name" />
                        </fieldset>

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-lg text-primary">Image</legend>
                            <input type="text" name='image' required className="input w-full border-2 border-secondary" placeholder="Photo URL" />
                        </fieldset>

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-lg text-primary">Ingredients</legend>
                            <input type="text" name='ingredients' required className="input w-full border-2 border-secondary" placeholder="Comma-separated list" />
                        </fieldset>

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-lg text-primary">Instructions</legend>
                            <input type="text" name='instructions' required className="input w-full border-2 border-secondary" placeholder="Separate with periods" />
                        </fieldset>

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-lg text-primary">Cuisine Type</legend>
                            <div className="dropdown dropdown-bottom w-full">
                                <div tabIndex={0} role="button" className="btn m-1 w-full flex justify-between border-2 border-secondary">
                                    {cuisine || "Select Cuisine"} <FaAngleDown />
                                </div>
                                <ul tabIndex={0} className="dropdown-content menu bg-secondary text-white rounded-box w-full p-2 z-10">
                                    {cuisineTypes.map(cuisineType => (
                                        <li key={cuisineType}>
                                            <a onClick={() => handleSelect(cuisineType)}>{cuisineType}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </fieldset>

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-lg text-primary">Preparation Time (mins)</legend>
                            <input type="number" name='time' required className="input w-full border-2 border-secondary" placeholder="Time in minutes" />
                        </fieldset>

                        <fieldset className="fieldset col-span-2">
                            <legend className="fieldset-legend text-lg text-primary">Categories</legend>
                            <div className="flex gap-6 flex-wrap">
                                {meals.map((meal) => (
                                    <label key={meal} className="flex items-center gap-2">
                                        <input type="checkbox" name="meals" value={meal} className="checkbox checkbox-sm" />
                                        {meal}
                                    </label>
                                ))}
                            </div>
                        </fieldset>
                    </div>

                    <button className="btn btn-primary w-full text-lg my-4">Add Your Recipe</button>
                </form>
            </div>
        </div>
    );
};

export default AddRecipe;
