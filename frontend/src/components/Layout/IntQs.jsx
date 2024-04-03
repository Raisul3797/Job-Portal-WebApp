import React from 'react'

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
    </div>
  );
}

export default IntQs
