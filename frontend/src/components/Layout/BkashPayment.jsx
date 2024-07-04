import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const BkashPayment = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { pkg, amount } = location.state || {};

    const [accountNumber, setAccountNumber] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    if (!pkg) {
        navigate('/pricing');
        return null;
    }

    const handleConfirm = () => {
        if (accountNumber) {
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
            alert("Please enter your bKash account number.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                <div className="flex items-center justify-between mb-4">
                    <img src="./src/assets/bkash_payment_logo.png" alt="bKash Payment" className="h-20" />
                    <div className="text-4xl text-violet-600 font-bold">৳{amount}</div>
                </div>
                <div className="mb-4">
                    <div className="font-bold">Invoice: {Math.floor(Math.random() * 10000)}</div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Your bKash Account number</label>
                    <input
                        type="text"
                        placeholder="e.g 01XXXXXXXXX"
                        className="w-full px-3 py-2 border rounded-lg"
                        value={accountNumber}
                        onChange={(e) => setAccountNumber(e.target.value)}
                    />
                </div>
                <div className="text-center text-sm mb-4">
                    By clicking on Confirm, you are agreeing to the <a href="#" className="text-blue-500">terms & conditions</a>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="px-6 py-2 border rounded-lg bg-gray-200"
                        onClick={() => navigate('/pricing')}
                    >
                        Close
                    </button>
                    <button
                        className="px-6 py-2 border rounded-lg bg-blue-500 text-white"
                        onClick={handleConfirm}
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

export default BkashPayment;
