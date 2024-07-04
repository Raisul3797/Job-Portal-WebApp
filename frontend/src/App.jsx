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
import Course from "./components/Layout/Course";
import CourseDetail from "./components/Layout/CourseDetail";
import CompDetails from "./components/Layout/CompDetails";

const courses = {
  "Web Development": [
    {
      title: "Web Development Bootcamp",
      provider: "Colt Steele",
      rating: 4.8,
      price: 1500,
      currency: "BDT",
      description: "Intensive bootcamp covering all aspects of web development.",
    },
    {
      title: "Complete Guide to Digital Marketing",
      provider: "Rob Percival",
      rating: 4.6,
      price: 1800,
      currency: "BDT",
      description: "Comprehensive guide to digital marketing strategies and techniques.",
    },
    {
      title: "JavaScript: Understanding the Weird Parts",
      provider: "Anthony Alicea",
      rating: 4.7,
      price: 1400,
      currency: "BDT",
      description: "In-depth course on JavaScript covering advanced concepts.",
    },
    {
      title: "The Complete Node.js Developer Course",
      provider: "Andrew Mead",
      rating: 4.8,
      price: 1600,
      currency: "BDT",
      description: "Learn Node.js from scratch to advanced topics.",
    },
  ],
  "Data Science": [
    {
      title: "Data Science and Machine Learning",
      provider: "Jose Portilla",
      rating: 4.7,
      price: 2000,
      currency: "BDT",
      description: "Comprehensive course covering data science and machine learning concepts.",
    },
    {
      title: "Python for Everybody",
      provider: "Dr. Charles Severance",
      rating: 4.8,
      price: 1600,
      currency: "BDT",
      description: "Introduction to programming using Python for beginners.",
    },
    {
      title: "Statistics for Data Science and Business Analysis",
      provider: "365 Careers",
      rating: 4.6,
      price: 1800,
      currency: "BDT",
      description: "Fundamental statistics concepts for data science and business analysis.",
    },
    {
      title: "Machine Learning A-Z",
      provider: "Kirill Eremenko",
      rating: 4.5,
      price: 1900,
      currency: "BDT",
      description: "Complete guide to machine learning algorithms and techniques.",
    },
  ],
  "Graphic Design": [
    {
      title: "Graphic Design Masterclass",
      provider: "Lindsay Marsh",
      rating: 4.9,
      price: 1700,
      currency: "BDT",
      description: "Master the art of graphic design with practical projects and exercises.",
    },
    {
      title: "Adobe Photoshop CC: The Complete Guide",
      provider: "Dan Scott",
      rating: 4.7,
      price: 1600,
      currency: "BDT",
      description: "Comprehensive course covering Adobe Photoshop CC for beginners to advanced users.",
    },
    {
      title: "Adobe Illustrator CC Essentials",
      provider: "Phil Ebiner",
      rating: 4.8,
      price: 1500,
      currency: "BDT",
      description: "Essential skills and techniques for Adobe Illustrator CC users.",
    },
    {
      title: "UX & Web Design Master Course",
      provider: "Joe Natoli",
      rating: 4.6,
      price: 1800,
      currency: "BDT",
      description: "Comprehensive course covering UX design principles and web design techniques.",
    },
  ],
  "Business": [
    {
      title: "Business Analysis Fundamentals",
      provider: "Jeremy Aschenbrenner",
      rating: 4.7,
      price: 1500,
      currency: "BDT",
      description: "Fundamental concepts of business analysis for aspiring analysts.",
    },
    {
      title: "Product Management 101",
      provider: "Todd Birzer",
      rating: 4.6,
      price: 1600,
      currency: "BDT",
      description: "Introduction to product management roles, responsibilities, and techniques.",
    },
    {
      title: "MBA in a Box: Business Lessons from a CEO",
      provider: "365 Careers",
      rating: 4.8,
      price: 2000,
      currency: "BDT",
      description: "Comprehensive business course covering lessons from a CEO perspective.",
    },
    {
      title: "Financial Modeling for Business Analysts and Consultants",
      provider: "M&A Academy",
      rating: 4.7,
      price: 1800,
      currency: "BDT",
      description: "Learn financial modeling techniques for business analysis and consulting.",
    },
  ],
};

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
          <Route path="/comp-details" element={<CompDetails />} />
          <Route path="/course" element={<Course courses={courses} />} />
          <Route path="/course-detail/:title" element={<CourseDetail courses={courses} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </>
  );
};

export default App;
