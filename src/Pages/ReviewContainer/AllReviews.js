import React, { useEffect, useState } from 'react';
import { FaBahai } from 'react-icons/fa';
import Review from './Review';

const AllReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/allReviews")
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
      <div>
        <h2 className=" flex justify-center items-center gap-3 mt-16 text-2xl md:text-4xl  font-bold text-slate-200 merri-text">
          <span className="spin-animation">
            <FaBahai />
          </span>
          <span>Customers Feedback</span>
          <span className="spin-animation">
            <FaBahai />
          </span>
        </h2>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:w-11/12 mx-auto gap-8 mt-8">
          {reviews.map((review) => (
            <Review key={review._id} review={review}></Review>
          ))}
        </div>
      </div>
    );
};

export default AllReviews;