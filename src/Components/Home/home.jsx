// Home.js
import React from "react";
import { Link } from 'react-router-dom';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "../../PaymentComponent";
 
const Home = ({ stripe }) => {
  const stripePromise = loadStripe(
    'pk_test_51NbKRoSCjyRTmdR8QK9MLW5tvNSrcydtrKcNS21m0buee5v9AWeiupMuXRxUw6kSlB4oWOvmgQr6osoElXALi0sf00VH5QjDpg'
  );

  return (
    <div>
      <h2>Welcome to the Home Page!</h2>
      <p>You can only see this page after logging in.</p>

      {/* {isPaid ? (
        <div>
          <h2>Welcome to the Paid Content!</h2>
          <p>You have successfully paid for the content.</p>
        </div>
      ) : (
        <div>
          <h2>not paid</h2>
          <p>You have successfully paid for the content.</p>
        </div>
      )} */}

      <div className="pricing-table">
        {/* {isPaid ? (
          <div className="table">
            <h2>Welcome to the Paid Content!</h2>
            <h2>HTML & CSS</h2>
            <Link to="/html-css">Rs. 5000</Link>
          </div>
        ) : (
          <div className="table">
            <h2>HTML & CSS</h2>
            <Elements stripe={stripePromise}>
              <PaymentForm />
            </Elements>
          </div>
        )} */}
        <div className="table">
          <h2>HTML & CSS</h2>
          <Elements stripe={stripePromise}>
            <PaymentForm />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Home;
