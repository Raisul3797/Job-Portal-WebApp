import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      title: <span className="faq-title text-2xl">What is JobHuntBD.com?</span>,
      content: <span className="text-xl">JobHuntBD.com is a job portal that connects job seekers with employers by providing a platform to search and apply for job vacancies.</span>,
    },
    {
      title: <span className="faq-title text-2xl">How do I create a JobHuntBD account?</span>,
      content: <span className="text-xl">To create a JobHuntBD account, simply click on the 'Sign Up' or 'Register' button on the website and follow the prompts to provide your details and create an account.</span>,
    },
    {
      title: <span className="faq-title text-2xl">What is a JobHuntBD Resume?</span>,
      content: <span className="text-xl">A JobHuntBD Resume is a profile created by job seekers on the platform to showcase their skills, experience, and qualifications to potential employers.</span>,
    },
    {
      title: <span className="faq-title text-2xl">How can I submit my resume on JobHuntBD?</span>,
      content: <span className="text-xl">To submit your resume on JobHuntBD, log in to your account, navigate to the 'My Profile' or 'Resume' section, and follow the instructions to upload your resume.</span>,
    },
    {
      title: <span className="faq-title text-2xl">How can I edit my resume on JobHuntBD?</span>,
      content: <span className="text-xl">You can edit your resume on JobHuntBD by logging in to your account, accessing the 'My Profile' or 'Resume' section, and selecting the option to edit your resume. Make the necessary changes and save them.</span>,
    },
    {
      title: <span className="faq-title text-2xl">How do I add Experience to my JobHuntBD Resume?</span>,
      content: <span className="text-xl">To add experience to your JobHuntBD Resume, log in to your account, go to the 'My Profile' or 'Resume' section, and find the option to add work experience. Fill in the relevant details such as job title, company name, dates of employment, and job description.</span>,
    },
    // Add more FAQs here...
    {
      title: <span className="faq-title text-2xl">Can I send my resume through email to employers on JobHuntBD?</span>,
      content: <span className="text-xl">JobHuntBD does not currently support sending resumes directly through email to employers. However, you can upload your resume to your JobHuntBD profile and apply to job listings on the platform. Employers can then view your resume through the platform's database.</span>,
    },
    {
      title: <span className="faq-title text-2xl">Is it possible to delete my resume from JobHuntBD?</span>,
      content: <span className="text-xl">Yes, it is possible to delete your resume from JobHuntBD. Log in to your account, navigate to the 'My Profile' or 'Resume' section, and find the option to delete your resume. Follow the instructions to permanently remove your resume from the platform.</span>,
    },
    {
        title: <span className="faq-title text-2xl">How do I add Experience to my JobHuntBD Resume?</span>,
        content: <span className="text-xl">To add experience to your JobHuntBD Resume, log in to your account, go to the 'My Profile' or 'Resume' section, and find the option to add work experience. Fill in the relevant details such as job title, company name, dates of employment, and job description.</span>,
    },
    {
        title: <span className="faq-title text-2xl">Does it cost to post my resume on JobHuntBD?</span>,
        content: <span className="text-xl">No, it is free to post your resume on JobHuntBD. The platform allows job seekers to create and upload their resumes at no cost.</span>,
    },
    {
        title: <span className="faq-title text-2xl">What is Area of Expertise in JobHuntBD Resume?</span>,
        content: <span className="text-xl">Area of Expertise in JobHuntBD Resume refers to the specific skills, industries, or job functions that job seekers excel in. It helps employers quickly identify relevant candidates for their job openings.</span>,
    },
    {
        title: <span className="faq-title text-2xl">How do I update my Area of Expertise on JobHuntBD?</span>,
        content: <span className="text-xl">You can update your Area of Expertise on JobHuntBD by logging in to your account, accessing the 'My Profile' or 'Resume' section, and selecting the option to edit your Area of Expertise. Add or remove relevant skills and save your changes.</span>,
    },
    {
        title: <span className="faq-title text-2xl">What are the benefits of Area of Expertise in JobHuntBD Resume?</span>,
        content: <span className="text-xl">The benefits of Area of Expertise in JobHuntBD Resume include improved visibility to employers searching for candidates with specific skills, increased chances of being matched with relevant job openings, and better showcasing of your strengths and qualifications.</span>,
    },
    {
        title: <span className="faq-title text-2xl">How does Area of Expertise improve my JobHuntBD Resume?</span>,
        content: <span className="text-xl">Area of Expertise improves your JobHuntBD Resume by highlighting your key skills and competencies, making it easier for employers to identify you as a suitable candidate for their job vacancies. It increases your chances of being contacted for interviews.</span>,
    },
    {
        title: <span className="faq-title text-2xl">How many Area of Expertise can be added to my JobHuntBD Resume?</span>,
        content: <span className="text-xl">You can add multiple Area of Expertise to your JobHuntBD Resume based on your skills and experience. There is no limit to the number of skills you can include.</span>,
    },
    {
        title: <span className="faq-title text-2xl">What is a Personalized Resume on JobHuntBD?</span>,
        content: <span className="text-xl">A Personalized Resume on JobHuntBD is a customized version of your resume tailored to specific job applications. It allows you to highlight relevant skills and experiences that match the requirements of the job.</span>,
    },
    {
        title: <span className="faq-title text-2xl">What is User ID/Password in JobHuntBD?</span>,
        content: <span className="text-xl">User ID/Password in JobHuntBD refers to the credentials used to log in to your account on the platform. Your User ID is typically your email address, and your Password is a unique combination of characters chosen by you during account creation.</span>,
    },
    {
        title: <span className="faq-title text-2xl">If I lost my User ID, how can I retrieve it?</span>,
        content: <span className="text-xl">If you lost your User ID on JobHuntBD, you can retrieve it by clicking on the 'Forgot User ID' or 'Forgot Password' link on the login page. Follow the instructions to verify your identity and recover your User ID.</span>,
    },
    {
        title: <span className="faq-title text-2xl">If I lost my Password, how can I retrieve it?</span>,
        content: <span className="text-xl">If you lost your Password on JobHuntBD, you can retrieve it by clicking on the 'Forgot Password' or 'Reset Password' link on the login page. Follow the instructions to verify your identity and reset your Password.</span>,
    },
    {
        title: <span className="faq-title text-2xl">If I lost my User ID/Password, how can I retrieve them?</span>,
        content: <span className="text-xl">If you lost both your User ID and Password on JobHuntBD, you can retrieve them by following the steps for recovering User ID and Password separately. Use the 'Forgot User ID' and 'Forgot Password' links on the login page.</span>,
    },
    {
        title: <span className="faq-title text-2xl">Can I change my User ID on JobHuntBD?</span>,
        content: <span className="text-xl">No, you cannot change your User ID on JobHuntBD. Your User ID is typically your email address, and it serves as a unique identifier for your account.</span>,
    },
    {
        title: <span className="faq-title text-2xl">Can I change my Password on JobHuntBD?</span>,
        content: <span className="text-xl">Yes, you can change your Password on JobHuntBD. To do so, log in to your account, navigate to the 'My Account' or 'Settings' section, and find the option to change your Password. Follow the instructions to set a new Password.</span>,
    },
    {
        title: <span className="faq-title text-2xl">Where can I view job circulars on JobHuntBD?</span>,
        content: <span className="text-xl">You can view job circulars on JobHuntBD by visiting the website's homepage or 'Jobs' section. Browse through the available job listings, filter them based on your preferences, and click on individual job postings to view detailed descriptions.</span>,
    },
    {
        title: <span className="faq-title text-2xl">What is Keyword search in JobHuntBD?</span>,
        content: <span className="text-xl">Keyword search in JobHuntBD allows you to search for specific job titles, skills, or keywords relevant to your job search. You can enter keywords related to your desired job and filter the search results to find matching job opportunities.</span>,
    },
    {
        title: <span className="faq-title text-2xl">How can I apply to a job on JobHuntBD?</span>,
        content: <span className="text-xl">To apply to a job on JobHuntBD, first, log in to your account. Then, browse through the available job listings, select the job you are interested in, and click on the 'Apply Now' or 'Submit Application' button. Follow the prompts to complete the application process.</span>,
    },
    {
        title: <span className="faq-title text-2xl">Can I cancel my application for a position on JobHuntBD?</span>,
        content: <span className="text-xl">Yes, you can cancel your application for a position on JobHuntBD. Log in to your account, navigate to the 'My Applications' or 'Applied Jobs' section, find the job application you wish to cancel, and look for the option to withdraw or cancel your application.</span>,
    },
    {
        title: <span className="faq-title text-2xl">Who will view my resume on JobHuntBD?</span>,
        content: <span className="text-xl">Your resume on JobHuntBD can be viewed by employers and recruiters who have access to the platform's database of job seekers. Your resume may be visible to employers searching for candidates with skills and qualifications matching their job vacancies.</span>,
    },
    {
        title: <span className="faq-title text-2xl">How can I keep track of which job(s) I have applied to so far on JobHuntBD?</span>,
        content: <span className="text-xl">To keep track of the job(s) you have applied to so far on JobHuntBD, log in to your account and navigate to the 'My Applications' or 'Applied Jobs' section. You will find a list of job applications you have submitted, along with their status and details.</span>,
    },
    {
        title: <span className="faq-title text-2xl">How can I change the expected salary for job(s) I have already applied to on JobHuntBD?</span>,
        content: <span className="text-xl">If you wish to change the expected salary for job(s) you have already applied to on JobHuntBD, you may need to withdraw your existing applications and reapply with the updated salary expectations. Contact the employer directly if you have any specific queries regarding salary negotiations.</span>,
    },
    {
        title: <span className="faq-title text-2xl">Can I send my resume through email to employers on JobHuntBD?</span>,
        content: <span className="text-xl">JobHuntBD does not currently support sending resumes directly through email to employers. However, you can upload your resume to your JobHuntBD profile and apply to job listings on the platform. Employers can then view your resume through the platform's database.</span>,
    },
    {
        title: <span className="faq-title text-2xl">Is it possible to delete my resume from JobHuntBD?</span>,
        content: <span className="text-xl">Yes, it is possible to delete your resume from JobHuntBD. Log in to your account, navigate to the 'My Profile' or 'Resume' section, and find the option to delete your resume. Follow the instructions to permanently remove your resume from the platform.</span>,
    },
    // Add more FAQs here...
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1 className="font-bold text-5xl mb-5 text-center">Job Seekers' Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="faq" style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", border: "1px solid #e5e5e5", borderRadius: "8px", marginBottom: "20px" }}>
          <div className="faq-question flex place-items-center justify-between" onClick={() => toggleFAQ(index)} style={{ borderBottom: "1px solid #e5e5e5", padding: "10px", cursor: "pointer" }}>
            <h2 className="faq-title text-2xl">{faq.title}</h2>
            <span className="text-3xl">{openIndex === index ? <IoIosArrowDown /> : <IoIosArrowUp />}</span>
          </div>
          {openIndex === index && (
            <div className="faq-answer" style={{ padding: "10px" }}>
              <p className="text-xl">{faq.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQs;
