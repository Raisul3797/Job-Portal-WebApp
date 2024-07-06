import React, { useContext } from "react";
import { Context } from "../../main";
import { Navigate } from "react-router-dom";
import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";
import PopularCategories from "./PopularCategories";
import PopularCompanies from "./PopularCompanies";
import Premium from "./Premium";
import Pricing from "../Pricing";

const Home = () => {
  const { isAuthorized, user } = useContext(Context);

  if (!isAuthorized) {
    return <Navigate to={"/login"} />;
  }

  return (
    <>
      <section className="homePage page">
        <HeroSection />
        <HowItWorks />
        <PopularCategories />
        <PopularCompanies />
        {user?.role !== 'Employer' && <Pricing />}
      </section>
    </>
  );
};

export default Home;
