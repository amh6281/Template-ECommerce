import React from "react";
import StripeCheckout from "react-stripe-checkout";

const KEY =
  "pk_test_51KJApEKkJzndeVHhpsc68VbHFcUd4cL65tITICk1mBC8DSmjhAOJW35cIdSWYojYXFvdWk2OKITGxTRYB8jfrURc000F5K7XBV";

const Pay = () => {
  const onToken = (token) => {
    console.log(token);
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StripeCheckout
        name="STYLEGO!"
        image="https://cdn-icons.flaticon.com/png/128/2981/premium/2981297.png?token=exp=1645685222~hmac=0151d84faed61160a8f9f1ab2b3cff3d"
        billingAddress
        shippingAddress
        description="Your total is 90000"
        amount={90000}
        token={onToken}
        stripeKey={KEY}
      >
        <button
          style={{
            border: "none",
            width: 120,
            borderRadius: 5,
            padding: "20px",
            backgroundColor: "black",
            color: "white",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Pay Now
        </button>
      </StripeCheckout>
    </div>
  );
};

export default Pay;
