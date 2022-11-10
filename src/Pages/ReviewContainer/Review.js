import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Review = ({ review }) => {
  const {
    id,
    title,
    message,
    username,
    user_photo,
    service_photo,
    date,
    time,
  } = review;
  console.log("user: ", user_photo);
  return (
    <div>
      <div className="container flex flex-col w-full max-w-lg p-3 mx-auto divide-y rounded-md divide-gray-700 bg-slate-800 text-gray-200">
        <div className="flex justify-between items-start p-4">
          <div className="flex space-x-4">
            <div>
              <img
                src={user_photo}
                alt=""
                className="object-cover w-12 h-12 rounded-full bg-gray-500"
              />
            </div>
            <div>
              <h4 className="font-bold">{username}</h4>
              <span className="text-xs text-gray-400 mr-2">{date} </span>
              <span className="text-xs text-gray-400">{time} </span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div>
              <img
                src={service_photo}
                alt=""
                className="object-cover w-12 h-12 rounded-none border border-slate-400 bg-gray-500"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row p-4  space-2 gap-5  text-sm text-gray-300">
          <div>
            <img
              src={service_photo}
              alt=""
              className="object-cover w-40 h-40 border border-slate-400 p-1 rounded-none bg-gray-500"
            />
          </div>
          <div className="divide-y divide-y-1 divide-yellow-500">
            <h2 className="text-xl font-semibold mb-2 text-yellow-500">
              {title}
            </h2>
            <p className="text-lg merri-text">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
