import React from 'react';
import { BsInstagram, BsTiktok, BsTwitter, BsYoutube } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { PiDribbbleLogo } from 'react-icons/pi';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div className='bg-base-300 text-base-content p-4'>
            <footer className="footer sm:footer-horizontal footer-center ">
                <footer className="footer sm:footer-horizontal p-10">
                    {/* logo */}
                    <aside>
                        <div className='flex flex-col justify-center items-center'>
                            <img src="https://img.icons8.com/?size=100&id=kD9IXES7oIkG&format=png&color=e11d48" alt="" className='w-20' />
                            <p className='text-secondary font-bold'>Shaad er Boi</p>
                        </div>
                    </aside>

                    <div className='flex flex-col justify-center items-center'>
                        <h6 className="footer-title">Contact Information</h6>
                        <div className='space-y-2'>
                        <p className='text-lg font-semibold text-primary'>shaaderboi@gmail.com</p>       
                        <p className='text-lg font-semibold text-primary'>+8801631246448</p>
                        </div>
                    </div>

                    {/* social media links */}
                    <nav>
                        <h6 className="footer-title">Social Media Links</h6>
                        <div className='text-primary flex gap-4'>
                         <Link to='https://www.facebook.com/' target='_blank'><FaFacebook size={28} /></Link>
                         <Link to='https://www.tiktok.com/explore' target='_blank'><BsTiktok size={28} /></Link>
                         <Link to='https://www.youtube.com/' target='_blank'><BsYoutube size={28} /></Link>
                         <Link to='https://x.com/' target='_blank'><BsTwitter size={28} /></Link>
                        </div>
                    </nav>
                </footer>
                
            </footer>
            <aside>
                    <p className='text-center'>Copyright © {new Date().getFullYear()} - All right reserved by Shaad er Boi</p>
                </aside>
        </div>
    );
};

export default Footer;