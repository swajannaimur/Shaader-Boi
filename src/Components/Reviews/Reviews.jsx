import React from 'react';

const Testimonials = () => {
    return (
        <div className="py-12 px-4 md:px-16 bg-base-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <div className="card bg-base-100 shadow-md border border-base-300">
                    <div className="card-body">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="avatar">
                                <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://i.pravatar.cc/100?img=32" alt="User" />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-semibold text-primary">Ayesha R.</h3>
                                <p className="text-sm text-secondary">Home Cook</p>
                            </div>
                        </div>
                        <p className="text-sm text-secondary mb-2">
                            “This app makes it so easy to store my recipes and discover new ones. I love the wishlist feature!”
                        </p>
                        <div className="rating">
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" checked readOnly />
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" checked readOnly />
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" checked readOnly />
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" checked readOnly />
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" readOnly />
                        </div>
                    </div>
                </div>


                <div className="card bg-base-100 shadow-md border border-base-300">
                    <div className="card-body">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="avatar">
                                <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://i.pravatar.cc/100?img=48" alt="User" />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-semibold text-primary">Jonathan K.</h3>
                                <p className="text-sm text-secondary">Food Blogger</p>
                            </div>
                        </div>
                        <p className="text-sm text-secondary mb-2">
                            “The Top Recipes section is a great idea! It's nice seeing popular choices from the community.”
                        </p>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked readOnly />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked readOnly />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked readOnly />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked readOnly />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked readOnly />
                        </div>
                    </div>
                </div>


                <div className="card bg-base-100 shadow-md border border-base-300">
                    <div className="card-body">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="avatar">
                                <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://i.pravatar.cc/100?img=15" alt="User" />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-semibold text-primary">Neha S.</h3>
                                <p className="text-sm text-secondary">College Student</p>
                            </div>
                        </div>
                        <p className="text-sm text-secondary mb-2">
                            “I use this app weekly to find quick recipes. It's clean, fast, and super helpful.”
                        </p>
                        <div className="rating">
                            <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" checked readOnly />
                            <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" checked readOnly />
                            <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" checked readOnly />
                            <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" checked readOnly />
                            <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" checked readOnly />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
