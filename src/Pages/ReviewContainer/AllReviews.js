import { Spinner } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaBahai } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthProvider";
import Review from "./Review";

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { loading } = useContext(AuthContext);
  useEffect(() => {
    fetch("https://resturant-site-server.vercel.app/allReviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  if (loading) {
    return (
      <div className="text-center mt-12">
        <Spinner aria-label="Extra large  Center-aligned spinner example" />
      </div>
    );
  }
  const deleteReview = (_id) => {
    console.log("delete button", _id);
    Swal.fire({
      title: "Do you really want to delete the review?",
      showCancelButton: true,
      confirmButtonText: "Save",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://resturant-site-server.vercel.app/services/delete/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              toast.success("Review Deleted Successful!");
              const remainingReviews = reviews.filter(
                (review) => review._id !== _id
              );
              setReviews(remainingReviews);
            }
          });
      }
    });
  };
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
          <Review
            key={review._id}
            deleteReview={deleteReview}
            review={review}
          ></Review>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
