import React, { useContext, useEffect } from "react";
import "./App.css";
import { Context } from "./main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import About from "./components/Layout/About";
import Home from "./components/Home/Home";
import Jobs from "./components/Job/Jobs";
import JobDetails from "./components/Job/JobDetails";
import Application from "./components/Application/Application";
import MyApplications from "./components/Application/MyApplications";
import PostJob from "./components/Job/PostJob";
import NotFound from "./components/NotFound/NotFound";
import MyJobs from "./components/Job/MyJobs";
import FAQs from "./components/Layout/FAQs";
import CVTips from "./components/Layout/CVTips";
import IntQs from "./components/Layout/IntQs";
import SkillDev from "./components/Layout/SkillDev";
import Profile from "./components/Layout/Profile";
import PremiumJobs from "./components/Home/PremiumJobs";
import Settings from "./components/Layout/Settings";
import MicrosoftComp from "./components/Layout/MicrosoftComp";
import TeslaComp from "./components/Layout/TeslaComp";
import AppleComp from "./components/Layout/AppleComp";
import CompanyDetailPage from "./components/Layout/CompanyDetailPage";
import Payment from "./components/Layout/Payment";
import Pricing from "./components/Pricing";
import BkashPayment from "./components/Layout/BkashPayment";
import Success from "./components/Layout/Success";
import Failure from "./components/Layout/Failure";


const App = () => {
  const { isAuthorized, setIsAuthorized, setUser } = useContext(Context);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/user/getuser",
          {
            withCredentials: true,
          }
        );
        setUser(response.data.user);
        setIsAuthorized(true);
      } catch (error) {
        setIsAuthorized(false);
      }
    };
    fetchUser();
  }, [isAuthorized]);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/job/getall" element={<Jobs />} />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/application/:id" element={<Application />} />
          <Route path="/applications/me" element={<MyApplications />} />
          <Route path="/job/post" element={<PostJob />} />
          <Route path="/job/me" element={<MyJobs />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQs />} />
          <Route path="/cv-tips" element={<CVTips />} />
          <Route path="/interview-qs" element={<IntQs />} />
          <Route path="/skill-dev" element={<SkillDev />} />
          <Route path="/my-profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/premium-jobs" element={<PremiumJobs />} />
          <Route path="/microsoft-jobs" element={<MicrosoftComp />} />
          <Route path="/tesla-jobs" element={<TeslaComp />} />
          <Route path="/apple-jobs" element={<AppleComp />} /> 
          <Route path="/payment" element={<Payment />} /> 
          <Route path="/bkash-payment" element={<BkashPayment />} /> 
          <Route path="/success" element={<Success />} /> 
          <Route path="/failure" element={<Failure />} /> 
          <Route path="/company/:id" element={<CompanyDetailPage />} /> 
          <Route path="/pricing" element={<Pricing />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </>
  );
};

export default App;
