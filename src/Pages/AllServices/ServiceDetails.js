import React, { useContext } from "react";
import { FaEye } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link, useLoaderData } from "react-router-dom";
import { Rating } from "flowbite-react";
import AllReviews from "../ReviewContainer/AllReviews";
import { AuthContext } from "../../contexts/AuthProvider";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);

  const service = useLoaderData();
  const { _id, title, price, details, image_url, rating, total_view } = service;
  const fullStar = Math.ceil(parseInt(rating));
  let starArray = [1,2,3,4,5];
  return (
    <div>
      <div className="hero min-h-screen bg-slate-700 text-slate-200">
        <div className="hero-content flex-col md:flex-row">
          <div className="w-full md:w-1/2 md:mr-5">
            <PhotoProvider>
              <PhotoView src={image_url}>
                <img
                  src={image_url}
                  alt=""
                  className="w-full object-cover rounded-lg"
                />
              </PhotoView>
            </PhotoProvider>
          </div>
          <div>
            <h1 className="text-5xl font-bold">{title}</h1>

            <Rating className="mt-2">
              {starArray.map((star) => {
                if (star <= fullStar) {
                  return <Rating.Star key={star} />;
                } else {
                  return <Rating.Star filled={false} key={star} />;
                }
              })}
              <span className="ml-2 text-sm">
                {"("}
                {rating} out of 5{")"}
              </span>
              <span className="flex items-center gap-2 ml-8">
                <FaEye className="text-yellow-400"></FaEye>
                {total_view}
              </span>
            </Rating>
            <p className="py-6 md:w-2/3 ">{details}</p>
            <h1 className="text-4xl font-semibold text-red-600">${price}</h1>
            <button className="mt-8 btn btn-warning rounded-none text-xl px-12">
              Order Now
            </button>
          </div>
        </div>
      </div>

      <AllReviews></AllReviews>
      <p className="mt-5 text-xl bg-slate-500 text-slate-200 text-center py-3 ">
        {" "}
        <span className=" bg-slate-700 hover:bg-slate-800 px-5 hover:px-5  rounded-full py-2">
          {user?.uid ? (
            <Link to={`/addReview/${_id}`}>Leave some feedback</Link>
          ) : (
            <Link to={`/addReview/${_id}`}>
              Please, Login to provide feedback
            </Link>
          )}
        </span>
      </p>
    </div>
  );
};

export default ServiceDetails;
