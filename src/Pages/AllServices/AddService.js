import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const AddService = () => {
  useTitle("Home - Add Service");
  const navigate = useNavigate();
  const handleSubmitService = (event) => {
    event.preventDefault();

    const form = event.target;
    let rating = form.rating.value;
    if (rating > 5) {
      toast.error("rating must be less then 6");
      return;
    }

    const service = {};
    service["title"] = form.service.value;
    service["details"] = form.details.value;
    service["rating"] = rating;
    service["image_url"] = form.serviceUrl.value;
    service["price"] = form.price.value;
    service["total_view"] = form.view.value;

    fetch("https://resturant-site-server.vercel.app/addService", {
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
  };
  return (
    <div className="mt-8 w-5/6 mx-auto max-w-md p-8 space-y-3   bg-slate-700   text-gray-100">
      <h1 className="text-2xl font-bold text-center">
        👓 Let's add some services 👓
      </h1>
      <form
        onSubmit={handleSubmitService}
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-1 text-sm">
          <label htmlFor="service" className="block   text-gray-400">
            Service name
          </label>
          <input
            type="text"
            name="service"
            id="service"
            placeholder="service"
            className="w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
            required
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="serviceUrl" className="block   text-gray-400">
            Service URL
          </label>
          <input
            type="text"
            name="serviceUrl"
            id="serviceUrl"
            placeholder="paste service image url"
            className="w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
            required
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="details" className="block   text-gray-400">
            Description with maximum 100characters
          </label>
          <input
            type="text"
            name="details"
            id="details"
            placeholder="Description"
            className="w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
            required
          />
        </div>
        <div className="flex justify-between gap-5">
          <div className="space-y-1 text-sm relative">
            <label htmlFor="price" className="block   text-gray-400">
              Service Price
            </label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="price"
              className="w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
              required
            />
          </div>
          <div className="space-y-1 text-sm relative">
            <label htmlFor="rating" className="block   text-gray-400">
              Rating
            </label>
            <input
              type="number"
              name="rating"
              id="rating"
              placeholder="rating"
              className="w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
              required
            />
          </div>
          <div className="space-y-1 text-sm relative">
            <label htmlFor="view" className="block   text-gray-400">
              Total view
            </label>
            <input
              type="number"
              name="view"
              id="view"
              placeholder="578"
              value="578"
              className="w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
              disabled
            />
          </div>
        </div>

        <button className="block w-full font-semibold p-3 text-center  text-gray-900   bg-blue-300 hover:bg-blue-400">
          Add The Service
        </button>
      </form>
    </div>
  );
};

export default AddService;
