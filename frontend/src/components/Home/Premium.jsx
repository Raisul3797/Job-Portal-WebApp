import React from 'react'
import {
  MdOutlineDesignServices,
  MdOutlineWebhook,
  MdAccountBalance,
  MdOutlineAnimation,
} from "react-icons/md";
import { TbAppsFilled } from "react-icons/tb";
import { FaApple, FaMicrosoft, FaReact } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { IoGameController } from "react-icons/io5";
import Button from '@material-ui/core/Button';
import Swal from 'sweetalert2'
import { companies } from '../../utils/data';
import { SiTesla } from 'react-icons/si';

const handleApplyButton = () => {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Payment Success!",
    showConfirmButton: false,
    timer: 1500
  });
};

const Premium = () => {
  const companies = [
    {
      id: 1,
      title: "Microsoft",
      location: "Gulshan, Dhaka",
      openPositions: 10,
      icon: <FaMicrosoft />,
    },
    {
      id: 2,
      title: "Tesla",
      location: "Tongi, Gazipur",
      openPositions: 5,
      icon: <SiTesla />,
    },
    {
      id: 3,
      title: "Apple",
      location: "Street 10 Uttara, Dhaka",
      openPositions: 20,
      icon: <FaApple />,
    },
    {
      id: 4,
      title: "Google",
      location: "New York",
      openPositions: 20,
      icon: <FaApple />,
    },
  ];
  return (
    <div className="companies">
      <div className="container">
        <h3 className="font-semibold text-4xl">Premium Categories</h3>
        <div className="banner">
          {companies.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="content">
                  <div className="icon">{element.icon}</div>
                  <div className="text">
                    <p>{element.title}</p>
                    <p>{element.location}</p>
                  </div>
                </div>
                <Button onClick={handleApplyButton} className="">Pay</Button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
  //   <div className="categories">
  //     <h3 className="font-semibold text-4xl">Popular Categories</h3>
  //     <div className="banner">
  //       {categories.map((element) => {
  //         return (
  //           <div className="card" key={element.id}>
  //             <div className="icon">{element.icon}</div>
  //             <div className="text">
  //               <p>{element.title}</p>
  //               <p>{element.subTitle}</p>
  //             </div>
  //           </div>
  //         );
  //       })}
  //     </div>
  //     <h3 className="font-semibold text-4xl">Premium Categories</h3>
  //     <div className="banner">

  //     <Button onClick={handleApplyButton} variant="contained" className="bg-blue-600">Pay</Button>
  //     </div>
  //   </div>
  // );
}

export default Premium
