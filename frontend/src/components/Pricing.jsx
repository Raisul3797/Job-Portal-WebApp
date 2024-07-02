import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false);
    const [paymentUrl, setPaymentUrl] = useState("");
    const navigate = useNavigate();

    const packages = [
        { id: 1, name: 'Free', monthlyPrice: 0, yearlyPrice: 0, description: "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.", green: "./src/assets/green-dot.png", pink: "./src/assets/pink-dot.png" },
        { id: 2, name: 'Advanced', monthlyPrice: 39, yearlyPrice: 399, description: "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.", green: "./src/assets/green-dot.png" },
        { id: 3, name: 'Premium', monthlyPrice: 59, yearlyPrice: 599, description: "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.", green: "./src/assets/green-dot.png" },
    ];

    const handleGetStarted = async (pkg) => {
        if (pkg.name === 'Free') {
            navigate('/sign-up'); // Redirect to the sign-up page
        } else {
            const amount = isYearly ? pkg.yearlyPrice : pkg.monthlyPrice;
            const packageId = pkg.id;
            // Alert the package ID and amount
            alert(`Package ID: ${packageId}, Amount: ৳${amount}`);
            // You can add your payment handling logic here
        }
    };

    return (
        <div className="py-10 md:px-14 p-4 max-w-screen-2xl mx-auto" id="pricing">
            <div className="text-center">
                <h2 className="md:text-5xl text-2xl font-bold text-gray-900 mb-2">Here are all our plans</h2>
                <p className="text-tertiary md:w-1/3 mx-auto">A simple paragraph is comprised of three major components. The which is often a declarative sentence.</p>
                <div className="mt-16">
                    <label htmlFor="toggle" className="inline-flex items-center cursor-pointer">
                        <span className="mr-8 text-2xl font-semibold">Monthly</span>
                        <div className="w-14 h-6 transition duration-200 bg-gray-300 ease-in-out rounded-full">
                            <div className={`w-6 h-6 transition duration-200 ease-in-out rounded-full ${isYearly ? 'bg-blue-600 ml-8' : 'bg-blue-300'}`}></div>
                        </div>
                        <span className="ml-8 text-2xl font-semibold">Yearly</span>
                    </label>
                    <input
                        type="checkbox"
                        id="toggle"
                        className="hidden"
                        checked={isYearly}
                        onChange={() => setIsYearly(!isYearly)}
                    />
                </div>
            </div>

            {/* Pricing card */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 mt-20 md:w-11/12 mx-auto">
                {
                    packages.map((pkg) => (
                        <div key={pkg.id} className="border py-10 md:px-6 px-4 rounded-lg shadow-3xl">
                            <h3 className="text-3xl font-bold text-center text-[#010851]">{pkg.name}</h3>
                            <p className="text-tertiary text-center my-6">{pkg.description}</p>
                            <p className="mt-5 text-center text-violet-500 text-4xl font-bold">
                                {isYearly ? `৳${pkg.yearlyPrice}` : `৳${pkg.monthlyPrice}`}<span className="text-base text-tertiary font-medium">/{isYearly ? 'year' : 'month'}</span>
                            </p>

                            <ul className="mt-4 space-y-2 px-4">
                                <li className="flex gap-2 items-center"><img src={pkg.green} alt="" className="w-4 h-4" />
                                    {pkg.name === 'Free' ? 'Apply for 30 jobs' : pkg.name === 'Advanced' ? 'Apply for 50 jobs' : 'Apply for 70 jobs'}
                                </li>
                                <li className="flex gap-2 items-center"><img src={pkg.name === 'Free' ? pkg.pink : pkg.green} alt="" className="w-4 h-4" />
                                {pkg.name === 'Free' ? 'No Application Boosting' : pkg.name === 'Advanced' ? 'Application Boosting 3 times' : 'Application Boosting 5 times'}
                    
                                </li>
                                <li className="flex gap-2 items-center"><img src={pkg.name === 'Free' ? pkg.pink : pkg.green} alt="" className="w-4 h-4" />
                                {/* {pkg.name === 'Free' ? 'Application Insights' : pkg.name === 'Advanced' ? 'Application Boosting 3 times' : 'Application Boosting 5 times'} */}
                                Application Insights
                                </li>
                                <li className="flex gap-2 items-center"><img src={pkg.green} alt="" className="w-4 h-4" />
                                    Upload Resume
                                </li>
                                <li className="flex gap-2 items-center"><img src={pkg.name === 'Free' ? pkg.pink : pkg.green} alt="" className="w-4 h-4" />
                                    Career Counseiling Access
                                </li>
                                <li className="flex gap-2 items-center"><img src={pkg.green} alt="" className="w-4 h-4" />
                                {pkg.name === 'Free' ? 'See Some Career Ressources' : pkg.name === 'Advanced' ? 'See All Career Ressources' : 'See All Career Ressources'}
                                </li>

                                <li className="flex gap-2 items-center"><img src={pkg.name === 'Free' ? pkg.pink : pkg.green} alt="" className="w-4 h-4" />
                                {/* {pkg.name === 'Free' ? 'Application Insights' : pkg.name === 'Advanced' ? 'Application Boosting 3 times' : 'Application Boosting 5 times'} */}
                                Development Cources
                                </li>
                            </ul>
                            {/* Button */}
                            <div className="w-full mx-auto flex items-center justify-center mt-5">
                                <button
                                    className={`mt-6 px-10 py-2 border border-md font-semibold rounded-lg ${pkg.name === 'Free'
                                        ? 'bg-transparent text-violet-500 hover:bg-gray-200'
                                        : 'bg-violet-500 text-secondary hover:bg-violet-400 hover:text-white'
                                        }`}
                                    onClick={() => handleGetStarted(pkg)}
                                >
                                    {pkg.name === 'Free' ? 'Sign up for free' : 'Get Started'}
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Pricing;
