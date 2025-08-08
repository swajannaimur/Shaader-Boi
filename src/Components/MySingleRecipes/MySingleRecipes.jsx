import React from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import UpdateRecipe from '../UpdateRecipe/UpdateRecipe';

const MySingleRecipes = ({ MySingleRecipe, myRecipes, setMyRecipes }) => {
    const { _id, name, image, cuisine, ingredients } = MySingleRecipe

    const handleDeleteItem = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://my-apple-recipe-server.vercel.app/recipes/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Recipe has been deleted.",
                                icon: "success"
                            });
                            const remainingRecipes = myRecipes.filter(myRecipe => myRecipe._id !== _id)
                            setMyRecipes(remainingRecipes)
                        }
                        console.log('after delete', data);
                    })
            }
        });
    }

    return (
        <div className="card bg-base-100  shadow-sm border border-secondary">
            <figure className="p-5">
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl w-[400px] h-[200px] object-cover" />
            </figure>
            <div className="card-body items-center text-center ">
                <h2 className="text-2xl font-bold text-primary">{name}</h2>
                <h2 className="text-lg font-semibold text-secondary">{cuisine}</h2>
                <p className='text-base'>{ingredients}</p>
                <div className="card-actions my-2">
                    <Link to={`/recipe/${_id}`}>
                        <button className="btn btn-primary">See Details</button></Link>
                </div>
                <div className='space-x-4'>
                    <button className="btn btn-secondary" onClick={() => document.getElementById(`my_modal_${_id}`).showModal()}><FaRegEdit size={20} />Edit</button>
                    <dialog id={`my_modal_${_id}`} className="modal modal-bottom sm:modal-middle" onClick={e => {
                        if (e.target.tagName === 'DIALOG') {
                            e.target.close();
                        }
                    }}>
                        <div className="modal-box">
                            <div className="modal-action">
                                <UpdateRecipe myRecipes={myRecipes}
                                    setMyRecipes={setMyRecipes} MySingleRecipe={MySingleRecipe} closeModal={() => document.getElementById(`my_modal_${_id}`).close()}></UpdateRecipe>
                            </div>
                        </div>
                    </dialog>

                    <button onClick={() => handleDeleteItem(_id)} className='btn btn-secondary'><MdDeleteOutline size={20} />Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MySingleRecipes;