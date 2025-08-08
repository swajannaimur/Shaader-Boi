import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Auth Context/AuthContext';
import { FaHeart } from 'react-icons/fa';


const SingleRecipe = ({ singleData }) => {
    const { _id, name, image, cuisine, ingredients, likeCount, userEmail } = singleData;
    const [likes, setLikes] = useState(likeCount || 0);
    const { user } = use(AuthContext)
    console.log(user?.photoURL);

    const handleLikes = () => {
        fetch(`https://my-apple-recipe-server.vercel.app/recipes/${_id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setLikes(prev => prev + 1);
                }
            });
    };

    const isOwnRecipe = user?.email === userEmail;

    return (
        <div className="card bg-base-100 shadow-sm border border-secondary">
            <figure className="p-5">
                <img
                    src={image}
                    alt={name}
                    className="rounded-xl w-[400px] h-[200px] object-cover"
                />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="text-2xl font-bold text-primary">{name}</h2>
                <h2 className="text-lg font-semibold text-secondary">{cuisine}</h2>
                <p className="text-base">{ingredients}</p>

                <div className="card-actions my-2">
                    <Link to={`/recipe/${_id}`}>
                        <button className="btn btn-primary">See Details</button>
                    </Link>
                </div>

                {
                    user && <button
                        disabled={isOwnRecipe} onClick={handleLikes} className="btn btn-secondary disabled:cursor-not-allowed">
                        <FaHeart size={22} />  {likes}
                    </button>
                }
            </div>
        </div>
    );
};

export default SingleRecipe;
