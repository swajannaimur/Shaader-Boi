import React from 'react';
import image from '../../assets/errorPage.jpg'
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='w-11/12 mx-auto flex flex-col justify-center items-center'>
            <img src={image} alt="" className='w-[800px] ' />
            <Link to='/' className='btn btn-primary text-2xl p-8 '>Go to Home</Link>
        </div>
    );
};

export default ErrorPage;