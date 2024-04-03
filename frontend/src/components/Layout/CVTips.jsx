import React from 'react'

const CVTips = () => {
  return (
    <div className="container mx-auto">
      <h2 className='text-center font-bold text-3xl text-black my-8'>Resume Building Tips</h2>
      <ul className='my-2 space-y-3 text-xl'>
        <li>
          <strong>Keep it concise:</strong> Your resume should ideally be one
          page long. Keep the information concise and relevant to the job you
          are applying for.
        </li>
        <li>
          <strong>Use a professional format:</strong> Use a clean and
          professional format with clear headings and bullet points to make it
          easy for recruiters to scan your resume.
        </li>
        <li>
          <strong>Highlight your achievements:</strong> Rather than simply
          listing your job duties, focus on your accomplishments and how they
          contributed to the success of your previous roles.
        </li>
        <li>
          <strong>Customize for each job application:</strong> Tailor your
          resume to the specific job you are applying for by emphasizing the
          skills and experiences that are most relevant to the position.
        </li>
        <li>
          <strong>Proofread carefully:</strong> Check your resume thoroughly
          for spelling and grammar errors, and consider asking a friend or
          colleague to review it as well.
        </li>
      </ul>
      <p className='text-2xl font-bold text-blue-600 my-3 underline'>Example Resume's</p>
      <div>
        <p className='text-2xl text-center font-bold mt-12 mb-4'>Resume-1</p>
        <img src="/public/CVs/cv1.jpg" className='w-1/2 mx-auto' />
      </div>
      <div>
        <p className='text-2xl text-center font-bold mt-12 mb-4'>Resume-2</p>
        <img src="/public/CVs/cv3.jpg" className='w-1/2 mx-auto' />
      </div>
      <div>
        <p className='text-2xl text-center font-bold mt-12 mb-4'>Resume-3</p>
        <img src="/public/CVs/cv5.jpg" className='w-1/2 mx-auto' />
      </div>
    </div>
  );
};

export default CVTips
