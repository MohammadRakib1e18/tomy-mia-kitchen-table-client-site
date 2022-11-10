import React, { useContext, useEffect, useState } from "react";
import { FaBahai } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider";
import Review from "./Review";

const MyReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { user, loading } = useContext(AuthContext);
  //   if (loading) {
  //     return <div className="text-center mt-12">
  //       <Spinner aria-label="Extra large  Center-aligned spinner example" />
  //     </div>;
  //   }
  // console.log(user.email);

  useEffect(() => {
    if (!loading) {
        console.log(user);
      fetch(`http://localhost:5000/allReviews?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => setReviews(data));
    }
  }, [user?.email]);
  console.log(reviews);

  return (
    <div>
      <h2 className="flex justify-center items-center gap-3 mt-3 text-3xl  font-bold underline text-slate-200">
        <span className="spin-animation">
          <FaBahai />
        </span>
        <span>Your valuable feedback</span>
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

export default MyReviews;
