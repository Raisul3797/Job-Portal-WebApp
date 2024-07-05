import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Course = ({ courses }) => {
  const navigate = useNavigate();
  const [ratings, setRatings] = useState({});
  const [expandedCategories, setExpandedCategories] = useState({});

  const handleBackClick = () => {
    navigate('/skill-dev');
  };

  const handleRating = (courseTitle, newRating) => {
    setRatings(prevRatings => ({
      ...prevRatings,
      [courseTitle]: newRating,
    }));
  };

  const renderRatingStars = (courseTitle, initialRating) => {
    const currentRating = ratings[courseTitle] || initialRating;

    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => handleRating(courseTitle, star)}
            className={star <= currentRating ? 'text-yellow-500' : 'text-gray-400'}
          >
            ★
          </button>
        ))}
        <span className="ml-2 text-gray-700">({currentRating.toFixed(1)})</span>
      </div>
    );
  };

  const toggleCategory = (category) => {
    setExpandedCategories(prevState => ({
      ...prevState,
      [category]: !prevState[category]
    }));
  };

  return (
    <div className="container mx-auto py-4">
      <h2 className="text-center text-3xl font-bold my-8">Available Courses</h2>
      {Object.keys(courses).map((category) => {
        const isExpanded = expandedCategories[category];
        const displayedCourses = isExpanded ? courses[category] : courses[category].slice(0, 2);

        return (
          <div key={category}>
            <h3 className="text-2xl font-bold mb-4">{category}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedCourses.map((course, index) => (
                <div key={index} className="card border bg-white shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105 p-4">
                  <h3 className="text-xl text-blue-500 font-bold">{course.title}</h3>
                  <p className="text-gray-700">Instructor: {course.provider}</p>
                  <div className="flex items-center">
                    <span className="mr-2">Rating:</span>
                    {renderRatingStars(course.title, course.rating)}
                  </div>
                  <p className="text-blue-600 font-semibold">
                    Price: {course.currency} {course.price}
                  </p>
                  <button
                    onClick={() => navigate(`/course-detail/${encodeURIComponent(course.title)}`)}
                    className="btn btn-primary px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mt-4"
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
            {courses[category].length > 2 && (
              <div className="text-center my-4">
                <button
                  onClick={() => toggleCategory(category)}
                  className="btn btn-secondary px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                >
                  {isExpanded ? 'See Less' : 'See More'}
                </button>
              </div>
            )}
          </div>
        );
      })}
      <div className="text-center my-8">
        <button
          onClick={handleBackClick}
          className="btn btn-secondary px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Course;
