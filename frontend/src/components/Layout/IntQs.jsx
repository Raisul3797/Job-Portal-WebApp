import React from 'react';
import YouTube from 'react-youtube';

const IntQs = () => {
  const questionsAndAnswers = [
    {
      question: "Tell me about yourself.",
      answer:
        "This is often the first question asked in an interview. Keep your response focused on your professional background and experience, highlighting key achievements and skills relevant to the job you are applying for.",
    },
    {
      question: "What are your strengths and weaknesses?",
      answer:
        "When discussing your strengths, focus on qualities that are relevant to the job and back them up with examples. For weaknesses, choose something that you are actively working to improve and explain how you are addressing it.",
    },
    {
      question: "Why do you want to work for this company?",
      answer:
        "Research the company beforehand and mention specific reasons why you are interested in working there, such as their company culture, mission, or recent accomplishments.",
    },
    {
      question: "Where do you see yourself in five years?",
      answer:
        "Show your ambition and enthusiasm for the role by discussing your career goals and how you see yourself growing within the company.",
    },
    {
      question: "How do you handle stress and pressure?",
      answer:
        "Describe specific strategies you use to manage stress, such as prioritizing tasks, taking breaks, or seeking support from colleagues.",
    },
    {
      question: "Do you have any questions for us?",
      answer:
        "Prepare thoughtful questions to ask the interviewer about the company, team, or role to demonstrate your interest and engagement.",
    },
    {
      question: "What motivates you?",
      answer:
        "Discuss what drives you to excel and succeed, whether it's personal goals, a desire for recognition, or a passion for the work you do.",
    },
    {
      question: "How do you handle conflicts or disagreements in the workplace?",
      answer:
        "Describe your approach to resolving conflicts diplomatically and professionally, emphasizing communication, collaboration, and finding common ground.",
    },
    {
      question: "Tell me about a time you demonstrated leadership skills.",
      answer:
        "Share a specific example from your past experience where you took on a leadership role, delegated tasks, motivated team members, and achieved a positive outcome.",
    },
  ];

  const youtubeVideos = [
    
    {
      title: "Job Interview Tips for Freshers in English",
      videoId: "4kWyFSQhJpc",
    },
    {
      title: "Top 10 Job Interview Questions and Answers",
      videoId: "0k0Uc9uAJwk",
    },
    {
      title: "10 Interview Questions for Freshers with Answers",
      videoId: "kHrYzQHwv7c",
    },
    {
      title: "5 Common Interview Questions and Answers",
      videoId: "ZOLCMa2QbdE",
    },
    {
      title: "Most Common Interview Questions and Answers for Freshers",
      videoId: "jD6plHT__0E",
    },
  ];

  return (
    <div className="container mx-auto">
      <h2 className="text-center text-3xl font-bold text-black my-8">Common Interview Questions</h2>
      <ul className="list-group">
        {questionsAndAnswers.map((item, index) => (
          <li key={index} className="list-group-item">
            <h5 className="text-2xl font-bold">{item.question}</h5>
            <p className='mb-5'>{item.answer}</p>
          </li>
        ))}
      </ul>
      <div className="text-center my-8">
        <h3 className="text-2xl font-bold mb-8 text-blue-600">Top Interview Videos</h3>
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
};

export default IntQs;
