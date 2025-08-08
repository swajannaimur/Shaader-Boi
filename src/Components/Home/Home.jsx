import React from 'react';
import Hero from '../Hero/Hero';
import Faq from '../Faq/Faq';
import Testimonials from '../Reviews/Reviews';
import HighestLikes from '../HighestLikes/HighestLikes';

const Home = () => {

  return (
    <div className='min-h-screen '>
      <div>
        <Hero></Hero>
      </div>

      <div className='my-20'>
        <h2 className='text-3xl text-primary font-bold text-center' >Top <span className='text-secondary'>Recipes</span></h2>
        <p className='text-center'>Here are the most loved recipes from the community!</p>
        <HighestLikes></HighestLikes>
      </div>

      <div className='my-20'>
        <h2 className='text-3xl text-primary font-bold text-center mb-12' >Frequently Asked <span className='text-secondary'>Questions</span></h2>
        <Faq></Faq>
      </div>
      <div className='my-20'>
        <h2 className='text-3xl text-primary font-bold text-center mb-12' >Client <span className='text-secondary'>Reviews</span></h2>
        <Testimonials></Testimonials>
      </div>
    </div>
  );
};

export default Home;