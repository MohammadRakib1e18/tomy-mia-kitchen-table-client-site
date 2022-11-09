import React from 'react';
import { FaBahai } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import Service from './Service';

const AllServices = () => {
    const services = useLoaderData();
    return (
      <div className='mt-16'>
        <h2 className=" flex justify-center items-center gap-3 mt-3 text-2xl md:text-4xl  font-bold text-slate-200 merri-text">
          <span className="spin-animation">
            <FaBahai />
          </span>
          <span>Tommy's Best Food Dishes</span>
          <span className="spin-animation">
            <FaBahai />
          </span>
        </h2>
        <div className='services-collection grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:w-10/12 mx-auto gap-8 mt-8'>
            {
                services.map(service => <Service key={service.title} service={service}></Service>)
            }
        </div>
      </div>
    );
};

export default AllServices;