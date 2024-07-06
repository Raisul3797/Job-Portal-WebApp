import React, { useEffect, useState } from 'react';
import HeroSection from '../Home/HeroSection';

const CompanyDetailPage = ({ match }) => {
  const [company, setCompany] = useState(null);

  // Mock company data for demonstration
  const companiesData = [
    { id: 1, name: "Tech Solutions", industry: "IT", location: "New York" },
      { id: 2, name: "Health Plus", industry: "Healthcare", location: "Los Angeles" },
      { id: 3, name: "Eco Energy", industry: "Renewable Energy", location: "San Francisco" },
      { id: 4, name: "FinTech Corp", industry: "Finance", location: "Chicago" },
      { id: 5, name: "AutoDrive", industry: "Automotive", location: "Detroit" },
      { id: 6, name: "BioLife", industry: "Biotechnology", location: "Boston" },
      { id: 7, name: "Green Energy", industry: "Renewable Energy", location: "Denver" },
      { id: 8, name: "EduTech", industry: "Education", location: "Austin" },
      { id: 9, name: "MediCare", industry: "Healthcare", location: "Houston" },
      { id: 10, name: "AgriGrowth", industry: "Agriculture", location: "Des Moines" },
      { id: 11, name: "RetailHub", industry: "Retail", location: "Seattle" },
      { id: 12, name: "CyberSecure", industry: "Cybersecurity", location: "San Diego" },
      { id: 13, name: "LogiTrans", industry: "Logistics", location: "Memphis" },
      { id: 14, name: "RealEstatePro", industry: "Real Estate", location: "Phoenix" },
      { id: 15, name: "FashionForward", industry: "Fashion", location: "New York" },
      { id: 16, name: "TourismExperts", industry: "Tourism", location: "Orlando" },
      { id: 17, name: "Foodies", industry: "Food & Beverage", location: "San Francisco" },
      { id: 18, name: "Sportify", industry: "Sports", location: "Miami" },
      { id: 19, name: "SpaceTech", industry: "Aerospace", location: "Houston" },
      { id: 20, name: "AI Innovators", industry: "Artificial Intelligence", location: "San Jose" }
  ];

  // Fetch company details based on ID
  useEffect(() => {
    const companyId = parseInt(match.params.id);
    const company = companiesData.find(company => company.id === companyId);
    setCompany(company);
  }, [match.params.id, companiesData]);

  if (!company) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{company.name} Details</h2>
      <p><span className="font-bold text-cyan-300">Industry:</span> {company.industry}</p>
      <p><span className="font-bold">Location:</span> {company.location}</p>
      {/* Add other company details here */}
    </div>
  );
};

export default CompanyDetailPage;
