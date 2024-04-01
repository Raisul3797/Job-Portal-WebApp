import React from "react";
import { JobImg } from "../../assets";

const About = () => {
  return (
    <div className='container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 '>
      <div className='w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5'>
        <div className='w-full md:2/3 2xl:w-2/4'>
          <h1 className='text-3xl text-blue-600 font-bold mb-5'>About Us</h1>
          <p className='text-justify leading-7'>

            <strong>JobHuntBD</strong> is a pioneering career management platform in Bangladesh,
            founded in July 2000 by a group of visionary young professionals with
            expertise in e-business and a deep understanding of the local job market.
            Our mission is to integrate Internet technology seamlessly into the fabric
            of business and society, empowering both job seekers and employers alike.
          </p>
        </div>
        <img src={JobImg} alt='About' className='w-auto h-[300px]' />
        {/* <img src='assets/job' alt='About' className='w-auto h-[300px]' /> */}

      </div>

      <div className='leading-8 px-5 text-justify'>
        <p>

         At <strong>JobHuntBD</strong>, we leverage the full potential of the Internet to provide 
         maximum benefits to our users. Our platform offers comprehensive job listings, 
         with an average of over 4500 valid job opportunities available at any given time.
          We empower job seekers to manage their careers efficiently through resume posting 
          and online application submission.

          Employers trust <strong>JobHuntBD</strong> for its innovative solutions to traditional recruiting 
          challenges. With features such as online job advertisements, access to a vast CV bank,
          and streamlined application processing, we help organizations save time and money while
           finding the right talent. To date, <strong>JobHuntBD</strong> has facilitated over 1 million successful 
           hires by more than 45,000 employers across various industries in Bangladesh. Join  
            <strong>JobHuntBD</strong> today and discover new opportunities to advance your career or find the 
           perfect candidate for your organization.
        </p>
      </div>
    </div>
  );
};

export default About;
