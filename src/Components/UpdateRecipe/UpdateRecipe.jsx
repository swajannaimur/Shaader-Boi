import React, { use, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { AuthContext } from '../Auth Context/AuthContext';
import { toast } from 'react-toastify';

const UpdateRecipe = ({ MySingleRecipe, closeModal, myRecipes, setMyRecipes }) => {
    const [cuisine, setCuisine] = useState(MySingleRecipe.cuisine || '');
    const { user } = use(AuthContext)
    const cuisineTypes = ['Bengali', 'Mexican', 'Italian', 'Indian', 'Chinese'];
    const meals = ['Breakfast', 'Lunch', 'Dinner'];
    const { _id, name, image, ingredients, instructions, time } = MySingleRecipe

    const handleUpdate = e => {
        e.preventDefault()
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

        fetch(`https://my-apple-recipe-server.vercel.app/recipes/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newRecipe)
        })
            .then(res => res.json())
            .then(data => {
                toast.success("Updated Successfully")
                closeModal()

                const updatedRecipe = { ...newRecipe, _id }
                const updatedRecipes = myRecipes.map(recipe =>
                    recipe._id === _id ? updatedRecipe : recipe
                );
                setMyRecipes(updatedRecipes);
            })
    }

    const handleSelect = (value) => setCuisine(value);
    return (
        <div>
            <div className='text-center my-8 space-y-4'>
                <h3 className='text-primary font-bold text-3xl'>Update your Recipe</h3>
                <p className='text-xl'>Make changes to your existing recipe and keep it fresh!</p>
            </div>

            <div className=''>
                <form onSubmit={handleUpdate} className='border-2 border-primary rounded-2xl p-10'>
                    <div className=''>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-lg text-primary">Name</legend>
                            <input type="text" name='name' defaultValue={name} required className="input w-full border-2 border-secondary" placeholder="Enter dish name" />
                        </fieldset>

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-lg text-primary">Image</legend>
                            <input type="text" name='image' defaultValue={image} required className="input w-full border-2 border-secondary" placeholder="Photo URL" />
                        </fieldset>

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-lg text-primary">Ingredients</legend>
                            <input type="text" name='ingredients' defaultValue={ingredients} required className="input w-full border-2 border-secondary" placeholder="Comma-separated list" />
                        </fieldset>

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-lg text-primary">Instructions</legend>
                            <input type="text" name='instructions' defaultValue={instructions} required className="input w-full border-2 border-secondary" placeholder="Separate with periods" />
                        </fieldset>

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-lg text-primary">Cuisine Type</legend>
                            <div className="dropdown dropdown-bottom w-full">
                                <div tabIndex={0} role="button"
                                    className="btn m-1 w-full flex justify-between border-2 border-secondary">
                                   {cuisine || MySingleRecipe.cuisine || "Select Cuisine"} <FaAngleDown />
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
                            <input type="number" name='time' defaultValue={time} required className="input w-full border-2 border-secondary" placeholder="Time in minutes" />
                        </fieldset>

                        <fieldset className="fieldset col-span-2">
                            <legend className="fieldset-legend text-lg text-primary">Categories</legend>
                            <div className="flex gap-6 flex-wrap justify-center items-center">
                                {meals.map((meal) => (
                                    <label key={meal} className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            name="meals"
                                            value={meal}
                                            defaultChecked={MySingleRecipe.meals?.includes(meal)}
                                            className="checkbox checkbox-sm"
                                        />
                                        {meal}
                                    </label>
                                ))}
                            </div>
                        </fieldset>
                    </div>

                    <button className="btn btn-primary w-full text-lg my-4">Update</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateRecipe;