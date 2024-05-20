import React from 'react'
import YouTube from 'react-youtube';

const SkillDev = () => {
  const resources = [
    {
      title: "Coursera",
      description:
        "Coursera offers online courses from universities and colleges on various topics, including programming, data science, business, and more.",
      link: "https://www.coursera.org/",
    },
    {
      title: "Udemy",
      description:
        "Udemy provides a wide range of online courses taught by industry experts, covering topics such as web development, digital marketing, and personal development.",
      link: "https://www.udemy.com/",
    },
    {
      title: "Codecademy",
      description:
        "Codecademy offers interactive coding lessons in various programming languages, making it easy for beginners to learn coding skills.",
      link: "https://www.codecademy.com/",
    },
    {
      title: "LinkedIn Learning",
      description:
        "LinkedIn Learning offers video courses taught by industry experts on topics such as leadership, project management, and software development.",
      link: "https://www.linkedin.com/learning/",
    },
    {
      title: "Skillshare",
      description:
        "Skillshare provides online classes and workshops on creative topics, including design, photography, and illustration.",
      link: "https://www.skillshare.com/",
    },
  ];

  const youtubeVideos = [
    {
      title: "How to Learn Anything Quickly - Josh Kaufman",
      videoId: "w82a1FT5o88",
    },
    {
      title: "The Skill of Self Confidence - Dr. Ivan Joseph",
      videoId: "w-HYZv6HzAs",
    },
    {
      title: "The Power of Vulnerability - Brené Brown",
      videoId: "iCvmsMzlF7o",
    },
    {
      title: "The Puzzle of Motivation - Dan Pink",
      videoId: "rrkrvAUbU9Y",
    },
    {
      title: "Grit: The Power of Passion and Perseverance - Angela Lee Duckworth",
      videoId: "H14bBuluwB8",
    },
  ];
  

  return (
    <div className="container mx-auto py-4">
      <h2 className="text-center text-3xl font-bold my-8">Skill Development Resources</h2>
      <div className="row">
        {resources.map((resource, index) => (
          <div key={index} className="col-lg-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-2xl font-bold">{resource.title}</h5>
                <p className="card-text">{resource.description}</p>
                <a
                  href={resource.link}
                  className="btn btn-primary text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center my-8">
        <h3 className="text-2xl font-bold mb-8 text-blue-600">Essential YouTube Videos</h3>
        <div className="grid grid-cols-2 justify-content-center">
          {youtubeVideos.map((video, index) => (
            <div key={index} className="col-lg-6">
              <YouTube videoId={video.videoId} />
              <p className="font-bold mb-16 text-start">{video.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillDev
