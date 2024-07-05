import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const CourseDetail = ({ courses }) => {
  const { title } = useParams();
  const navigate = useNavigate();
  const decodedTitle = decodeURIComponent(title);

  const findCourse = () => {
    for (const category in courses) {
      const foundCourse = courses[category].find(course =>
        course.title.toLowerCase() === decodedTitle.toLowerCase()
      );
      if (foundCourse) {
        return foundCourse;
      }
    }
    return null;
  };

  const course = findCourse();

  if (!course) {
    return <div>Course not found!</div>;
  }

  const handlePayment = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your payment has been processed.",
      showConfirmButton: false,
      timer: 1500
    });
  };

  const handleBackClick = () => {
    navigate('/course');
  };

  return (
    <div className="container card border shadow-lg rounded-lg p-4 w-1/2 mx-auto my-8 pl-12 space-y-3 ">
      <h1 className="text-center font-bold text-5xl my-8">Course Details</h1>
      <h2 className="text-3xl text-blue-500 font-bold">{course.title}</h2>
      <p className="text-gray-700">Instructor: {course.provider}</p>
      <p className="text-gray-700">Rating: <span className='text-yellow-500 font-bold'>{course.rating}</span></p>
      <p>{course.description}</p>
      <p>
        Price: <span className='text-blue-600 font-semibold'>{course.currency} {course.price}</span>
      </p>
      <div className='flex justify-between'>
      <button
        onClick={handlePayment}
        className="btn btn-primary px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mt-4"
      >
        Pay Now
      </button>
      <button
        onClick={handleBackClick}
        className="btn btn-secondary px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 mt-4"
      >
        Back to Courses
      </button>
      </div>
    </div>
  );
};

export default CourseDetail;
