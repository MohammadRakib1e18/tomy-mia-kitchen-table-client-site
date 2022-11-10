import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { _id, title, details, image_url} = service;
  return (
    <div className="bg-slate-700  flex flex-col justify-between">
      <div>
        <div className="h-64">
          <PhotoProvider>
            <PhotoView src={image_url}>
              <img
                src={image_url}
                alt=""
                className="h-full w-full object-cover"
              />
            </PhotoView>
          </PhotoProvider>
        </div>
        <div className="mx-3">
          <h2 className="text-2xl font-bold text-slate-200 my-3">{title}</h2>
          <p className="text-slate-300">{details}</p>
        </div>
      </div>
      <Link to={`/services/${_id}`}>
        <button className="m-3 flex btn btn-outline btn-warning rounded-none">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default Service;
