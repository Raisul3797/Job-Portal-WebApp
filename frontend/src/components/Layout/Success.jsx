import { useNavigate, useLocation } from "react-router-dom";

const Success = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { pkg, amount } = location.state || {};

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-center">
                <h2 className="text-2xl font-bold mb-4">Payment Successful</h2>
                <p className="text-gray-700 mb-4">Thank you for your payment of ৳{amount} for the package. Your transaction was successful.</p>
                <button
                    className="px-6 py-2 border rounded-lg bg-blue-500 text-white"
                    onClick={() => navigate('/pricing')}
                >
                    Back to Pricing
                </button>
            </div>
        </div>
    );
};

export default Success;
