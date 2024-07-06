import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const EnterAmount = () => {
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { accountNumber, pkg } = location.state || {};

  const handleConfirmPayment = () => {
    if (amount) {
      setIsLoading(true);
      // Simulate a payment process
      setTimeout(() => {
        const isSuccess = Math.random() > 0.5; // Randomly decide success or failure for demonstration purposes
        setIsLoading(false);
        if (isSuccess) {
          navigate('/success', { state: { amount, pkg } });
        } else {
          navigate('/failure', { state: { amount, pkg } });
        }
      }, 2000); // Simulate a delay for the payment process
    } else {
      alert("Please enter the amount.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <div className="text-4xl text-violet-600 font-bold mb-4">Enter Amount</div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Amount (BDT)</label>
          <input
            type="number"
            placeholder="e.g 1500"
            className="w-full px-3 py-2 border rounded-lg"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="px-6 py-2 border rounded-lg bg-gray-200"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          <button
            className="px-6 py-2 border rounded-lg bg-blue-500 text-white"
            onClick={handleConfirmPayment}
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Confirm"}
          </button>
        </div>
        {isLoading && (
          <div className="mt-4 text-center">
            <div className="loader mx-auto text-2xl"></div> {/* Add your loader here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default EnterAmount;
