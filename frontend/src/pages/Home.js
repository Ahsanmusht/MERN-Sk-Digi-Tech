import React from "react";
import { Carousel } from 'flowbite-react';
import banner1 from '../assets/banner1.gif'
import banner2 from '../assets/banner2.gif'
import banner3 from '../assets/banner3.gif'

export const Home = () => {
  return (
    <div className="bg-neutralSilver">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel className="w-full mx-auto">
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            
            {/* BANNER IMAGE */}

            <div>
              <img src={banner1} alt='banner1' /> 
            </div>

          {/* BANNER TEXT */}

            <div className='md:w-1/2'>

                  <h1 className="text-5xl font-semibold mb-4 text-neutralDGray md:w-3/4 leading-snug"> Redefines Digital Innovation with <span className="text-brandPrimary leading-snug">Cutting-Edge Solutions</span>.</h1>
                  <p className="text-neutralDGray text-base mb-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quas sapiente odit fugit sed ipsa.Cumque quas sapiente odit fugit sed ipsa.</p>

                  <button className='px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGray transition-all duration-300 hover:-translate-y-4'>Get Started</button>

            </div>
          
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            
            {/* BANNER IMAGE */}

            <div>
              <img src={banner2} alt='banner2' /> 
            </div>

          {/* BANNER TEXT */}

            <div className='md:w-1/2'>

                  <h1 className="text-5xl font-semibold mb-4 text-neutralDGray md:w-3/4 leading-snug"> Redefines Digital Innovation with <span className="text-brandPrimary leading-snug">Cutting-Edge Solutions</span>.</h1>
                  <p className="text-neutralDGray text-base mb-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quas sapiente odit fugit sed ipsa.Cumque quas sapiente odit fugit sed ipsa.</p>

                  <button className='px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGray transition-all duration-300 hover:-translate-y-4'>Get Started</button>

            </div>
          
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            
            {/* BANNER IMAGE */}

            <div>
              <img src={banner3} alt='banner3' /> 
            </div>

          {/* BANNER TEXT */}

            <div className='md:w-1/2'>

                  <h1 className="text-5xl font-semibold mb-4 text-neutralDGray md:w-3/4 leading-snug"> Redefines Digital Innovation with <span className="text-brandPrimary leading-snug">Cutting-Edge Solutions</span>.</h1>
                  <p className="text-neutralDGray text-base mb-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quas sapiente odit fugit sed ipsa.Cumque quas sapiente odit fugit sed ipsa.</p>

                  <button className='px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGray transition-all duration-300 hover:-translate-y-4'>Get Started</button>

            </div>
          
          </div>
        </Carousel>
      </div>
    </div>
  );
};
