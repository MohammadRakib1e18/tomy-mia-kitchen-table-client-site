import { Spinner } from "flowbite-react";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useTitle from "../../hooks/useTitle";
import bkashLogo from "../../images/bkash_payment_logo.png";

const BKash = () => {
  useTitle("Add Service");
  const { user, loading } = useContext(AuthContext);
  console.log(user);
  const service = useLoaderData();
  //   const { _id, title, price, details, image_url, rating, total_view } = service;
  const title = "rakib";
  const navigate = useNavigate();
  const imageHostKey = process.env.REACT_APP_imgbb_key2;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (loading) {
    return (
      <div className="text-center mt-12">
        <Spinner aria-label="Extra large  Center-aligned spinner example" />
      </div>
    );
  }

  const handleBkash = (data) => {
    const { details, rating, image_url, price } = data;
    if (rating > 5) {
      toast.error("rating must be less then 6");
      return;
    }
    if (details.length > 200) {
      toast.error(
        `Description length:${details.length}. It should be maximum 200 characters`
      );
      return;
    }
    const photo = data.image_url[0];
    console.log(photo);
    const service = { title, details, rating, image_url, price };
    const formData = new FormData();
    formData.append("image", photo);

    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          service.image_url = data.data.url;
          fetch("http://localhost:5000/addService", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(service),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                toast.success("Service added successfully!");
                navigate(`/services`);
              }
              toast.error("Failed to add service. Try again!");
            });
        }
      });
  };
  return (
    <div className="mt-8 w-2/3 mx-auto  p-8 space-y-3  bg-slate-300   text-gray-100 rounded-md">
      <h1 className="text-2xl font-bold text-center">
        <img src={bkashLogo} alt="" className="mix-blend-multiply" />
      </h1>
      <form
        onSubmit={handleSubmit(handleBkash)}
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-1 text-sm">
          <label htmlFor="service" className="block   text-gray-800 text-lg">
            Service Name
          </label>
          <input
            {...register("title", {
              required: "Service name is required",
            })}
            defaultValue={`${title}`}            
            className="w-full px-4 py-3    border-gray-700   bg-slate-500   text-gray-100 focus:border-violet-400 cursor-not-allowed"
            disabled
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="service" className="block   text-gray-800 text-lg">
            Buyer
          </label>
          <input
            {...register("buyer", {
              required: "buyer name is required",
            })}
            defaultValue={`${user?.displayName}`}            
            className="w-full px-4 py-3    border-gray-700   bg-slate-500   text-gray-100 focus:border-violet-400 cursor-not-allowed"
            disabled
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="service" className="block   text-gray-800 text-lg">
            Email address
          </label>
          <input
            {...register("email", {
              required: "Service name is required",
            })}
            defaultValue={`${user?.email}`}            
            className="w-full px-4 py-3    border-gray-700   bg-slate-500   text-gray-100 focus:border-violet-400 cursor-not-allowed"
            disabled
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="service" className="block   text-gray-800 text-lg">
            Transaction ID
          </label>
          <input
            type="number"
            {...register("transaction_id", {
              required: "Service name is required",
            })}            
            className="w-full px-4 py-3    border-gray-700   bg-slate-500   text-gray-100 focus:border-violet-400"
          />
          {errors.transaction_id && (
            <p className="text-red-500">{errors.transaction_id.message}</p>
          )}
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="service" className="block   text-gray-800 text-lg">
            Country
          </label>
          <input
            type="text"
            {...register("country", {
              required: "country is required",
            })}            
            className="w-full px-4 py-3    border-gray-700   bg-slate-500   text-gray-100 focus:border-violet-400"
          />
          {errors.country && (
            <p className="text-red-500">{errors.country.message}</p>
          )}
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="service" className="block   text-gray-800 text-lg">
            District
          </label>
          <input
            type="text"
            {...register("district", {
              required: "district is required",
            })}            
            className="w-full px-4 py-3    border-gray-700   bg-slate-500   text-gray-100 focus:border-violet-400"
          />
          {errors.district && (
            <p className="text-red-500">{errors.district.message}</p>
          )}
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="service" className="block   text-gray-800 text-lg">
            Post Code
          </label>
          <input
            type="number"
            {...register("post_code", {
              required: "post_code is required",
            })}            
            className="w-full px-4 py-3    border-gray-700   bg-slate-500   text-gray-100 focus:border-violet-400"
          />
          {errors.post_code && (
            <p className="text-red-500">{errors.post_code.message}</p>
          )}
        </div>

        <button className="block w-full rounded-full font-bold p-3 text-2xl text-center  text-gray-200   bg-pink-700 hover:bg-pink-600">
          Payment Done!
        </button>
      </form>
    </div>
  );
};

export default BKash;
