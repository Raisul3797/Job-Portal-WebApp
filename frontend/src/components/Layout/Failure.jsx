import { useNavigate, useLocation } from "react-router-dom";

const Failure = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { pkg, amount } = location.state || {};

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-center">
                <h2 className="text-2xl font-bold mb-4">Payment Failed</h2>
                <p className="text-gray-700 mb-4">Unfortunately, the payment of ৳{amount} for the {pkg.name} package was not successful. Please try again.</p>
                <button
                    className="px-6 py-2 border rounded-lg bg-blue-500 text-white"
                    onClick={() => navigate('/payment', { state: { pkg, amount } })}
                >
                    Retry Payment
                </button>
            </div>
        </div>
    );
};

export default Failure;
