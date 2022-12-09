import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";

// import "../styles/common.css";

const StripeCheckout = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        type="submit"
        className="py-1 mx-auto flex justify-center mt-12 -mb-4 bg-yellow-400 text-slate-200 rounded-full text-xl px-12 cursor-pointer"
        disabled={!stripe}
      >
        Payment Done!
      </button>

    </form>
  );
};

export default StripeCheckout;
