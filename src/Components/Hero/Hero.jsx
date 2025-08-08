import React from 'react';
import { Link, useLoaderData } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Hero = () => {
    const recipesData = useLoaderData();

    return (
        <div className='my-12'>
            <div className='flex flex-col-reverse lg:flex-row justify-center items-center gap-8 px-4'>
                {/* Text Content */}
                <div className="flex flex-col justify-center items-start space-y-4 text-left w-full lg:w-1/2">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
                        Discover & Share Recipes <span className='text-secondary'>You Love</span>
                    </h1>
                    <p className="text-base sm:text-lg text-gray-600 max-w-md">
                        Dive into a world of flavors. Explore traditional and modern recipes from passionate home cooks just like you.
                    </p>
                    <Link to='/allRecipes'>
                        <button className="btn btn-primary mt-2 sm:mt-4">
                            Explore Recipes
                        </button>
                    </Link>
                </div>

                {/* Swiper Slider */}
                <div className="w-full lg:w-1/2">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation
                        autoplay={{ delay: 2000 }}
                        spaceBetween={30}
                        className="w-full max-w-sm sm:max-w-md mx-auto"
                    >
                        {recipesData.map((recipe) => (
                            <SwiperSlide key={recipe._id}>
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <img
                                        src={recipe.image}
                                        alt={recipe.name}
                                        className="w-32 h-32 sm:w-44 sm:h-44 lg:w-56 lg:h-56 object-cover rounded-full shadow-md"
                                    />
                                    <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-primary">
                                        {recipe.name}
                                    </h2>
                                    <p className="text-gray-500 text-sm sm:text-base">{recipe.cuisine} Cuisine</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Hero;
