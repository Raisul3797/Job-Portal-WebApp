import { useLocation, useNavigate } from "react-router-dom";

const Payment = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { pkg, amount } = location.state || {};

    if (!pkg) {
        navigate('/pricing');
        return null;
    }

    const handlePayment = () => {
        navigate('/bkash-payment', { state: { pkg, amount } });
    };

    return (
        <div className="py-10 px-4 max-w-screen-md mx-auto" id="payment">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">Payment Details</h2>
            <div className="border py-10 px-6 rounded-lg shadow-3xl">
                <h3 className="text-2xl font-bold text-center text-[#010851] mb-4">{pkg.name} Package</h3>
                <p className="text-center font-bold text-4xl text-violet-500 mb-2">Amount: ৳{amount}</p>
                <ul className="mt-4 space-y-2 px-4 text-2xl">
                    <li className="flex gap-2 items-center"><img src={pkg.green} alt="" className="w-4 h-4" />
                        {pkg.name === 'Free' ? 'Apply for 30 jobs' : pkg.name === 'Advanced' ? 'Apply for 50 jobs' : 'Apply for 70 jobs'}
                    </li>
                    <li className="flex gap-2 items-center"><img src={pkg.name === 'Free' ? pkg.pink : pkg.green} alt="" className="w-4 h-4" />
                        {pkg.name === 'Free' ? 'No Application Boosting' : pkg.name === 'Advanced' ? 'Application Boosting 3 times' : 'Application Boosting 5 times'}
                    </li>
                    <li className="flex gap-2 items-center"><img src={pkg.name === 'Free' ? pkg.pink : pkg.green} alt="" className="w-4 h-4" />
                        Application Insights
                    </li>
                    <li className="flex gap-2 items-center"><img src={pkg.green} alt="" className="w-4 h-4" />
                        Upload Resume
                    </li>
                    <li className="flex gap-2 items-center"><img src={pkg.name === 'Free' ? pkg.pink : pkg.green} alt="" className="w-4 h-4" />
                        Career Counseling Access
                    </li>
                    <li className="flex gap-2 items-center"><img src={pkg.green} alt="" className="w-4 h-4" />
                        {pkg.name === 'Free' ? 'See Some Career Resources' : 'See All Career Resources'}
                    </li>
                    <li className="flex gap-2 items-center"><img src={pkg.name === 'Free' ? pkg.pink : pkg.green} alt="" className="w-4 h-4" />
                        Development Courses
                    </li>
                </ul>
                <div className="w-full mx-auto flex items-center justify-center mt-5">
                    <button
                        className="mt-6 px-10 py-2 border border-md font-semibold rounded-lg bg-violet-500 text-secondary hover:bg-violet-400 hover:text-white"
                        onClick={handlePayment}
                    >
                        Make Payment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Payment;
