import React, { useContext } from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { Link } from 'react-router-dom'
import { footerLinks } from '../../utils/data'
import TextInput from '../TextInput'
import CustomButton from '../CustomButton'
import { Context } from '../../main';
import { IoIosHome } from "react-icons/io";
import { AiTwotoneMail } from "react-icons/ai";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
// const { isAuthorized } = useContext(Context);
  return (
    <footer >
      <div className='overflow-x-hidden -mb-0.5'>
        <svg
          preserveAspectRatio='none'
          viewBox='0 0 1200 120'
          xmlns='http://www.w3.org/2000/svg'
          style={{
            fill: "#1d4ed8",
            width: "125%",
            height: 112,
            transform: "rotate(180deg)",
          }}
        >
          <path d='M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z' />
        </svg>
      </div>

      <div className='bg-[#1d4ed8]'>
        <div className='container px-5 py-20 mx-auto'>
          <div className='w-full flex flex-wrap gap-10 justify-between -mb-10 -px-4 text-white'>
            {/* {footerLinks.map(({ id, title, links }) => (
              <div className='w-auto px-4 ' key={id + title}>
                <h2 className='font-medium text-white tracking-widest text-sm mb-3'>
                  {title}
                </h2>

                <div className='mb-10 flex flex-col gap-3 '>
                  {links.map((link, index) => (
                    <Link
                      key={link + index}
                      to='/'
                      className='text-gray-300 text-sm hover:text-white '
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
            ))} */}
            <div>
              <h2 className='font-bold text-xl text-stone-300 mb-3'><a href="/" className='flex items-center gap-2 text-2xl font-bold text-black'>
          <img width="48" height="48" src="https://img.icons8.com/color/48/portal.png" alt="portal" />
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-stone-400 
            via-gray-200 to-slate-400'>JobHuntBD</span></a></h2>
              <p className='w-96'>JobHuntBD: Your gateway to Bangladesh's job market,
               linking talent with opportunities effortlessly for
               streamlined recruitment and career growth.</p>
            </div>
            <div>
              <h2 className='font-bold text-xl text-stone-300 mb-3'>Services</h2>
              <p>
                <a href='#' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#' className='text-reset'>
                  Help
                </a>
              </p>
              </div>
            <div>
              <h2 className='font-bold text-xl text-stone-300 mb-3'>Usefull Links</h2>
              <p>
                <a href='#' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='#' className='text-reset'>
                  About Us
                </a>
              </p>
              <p>
                <a href='#' className='text-reset'>
                  FAQs
                </a>
              </p>
            </div>
            <div>
              <h2 className='font-bold text-xl text-stone-300 mb-3'>Contact</h2>
              <p className='flex items-center gap-2'>
              <IoIosHome />
                Gazipur, Dhaka
              </p>
              <p className='flex items-center gap-2'>
              <AiTwotoneMail />
                jobhuntbd@gmail.com
              </p>
              <p className='flex items-center gap-2'>
              <FaPhone />
                 + 01 234 567 88
              </p>
            </div>

          </div>
        </div>

        <div>
          <p className='container px-5 mx-auto text-white mt-2 '>Subscribe to our Newsletter</p>
          <div className='container mx-auto px-5 pt-2 pb-8 flex flex-wrap items-center justify-between '>
            <div className='w-full md:w-2/4 lg:w-1/3 h-16 flex items-center justify-center md:justify-start '>
              <TextInput
                styles='w-full flex-grow md:w-40 2xl:w-64 bg-gray-100 sm:mr-0.5 md-2'
                type='email'
                placeholder='Email Address'>
              </TextInput>
              <CustomButton title='Subscribe'
                containerStyles={`block bg-[#001a36] text-white px-5 py-2.5 text-md rounded hover:bg-blue-800 bg-[#001a36] 
              text-white px-5 py-2.5 text-md rounded hover:bg-blue-800 focus:potline-none flex-col items-center mt-2`}
              />
            </div>
            
            <section className='flex flex-col gap-4 items-center justify-center'>
            <span className='text-white text-2xl'>Get in touch with:</span>
            <span className='inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto'>
            
              <a href='#' className='text-white text-xl  hover:scale-125 ease-in-out duration-300'>
                <FaFacebookF />
              </a>
              <a href='#' className='ml-3 text-white text-xl  hover:scale-125 ease-in-out duration-300'>
                <FaTwitter />
              </a>
              <a href='#' className='ml-3 text-white text-xl  hover:scale-125 ease-in-out duration-300'>
                <FiInstagram />
              </a>

              <a href='#' className='ml-3 text-white text-xl  hover:scale-125 ease-in-out duration-300'>
                <FaLinkedinIn />
              </a>
            </span>
            </section>
          </div>
        </div>
        <div className='bg-[#001a36]'>
          <div className='container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row'>
            <p className='text-gray-300 text-sm text-center sm:text-left'>
              &copy; 2023 Job Portal Website —
              <a
                href='http://localhost:5173/'
                className='text-[#1199e7] ml-1'
                target='_blank'
                rel='noopener noreferrer'
              >
                @JobHuntBD
              </a>
            </p>

            <span className='sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-300 text-sm'>
              Thanks!
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
