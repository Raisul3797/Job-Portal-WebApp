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
        <li>
          <strong>Quantify your achievements:</strong> Provide measurable results and outcomes for your accomplishments to demonstrate the impact you've made in previous roles.
        </li>
        <li>
          <strong>Customize for each application:</strong> Tailor your resume to the specific job by highlighting relevant skills, experiences, and keywords from the job description.
        </li>
        <li>
          <strong>Include a professional summary:</strong> Craft a brief summary at the top of your resume summarizing your skills, experiences, and career objectives.
        </li>
        <li>
          <strong>Showcase transferable skills:</strong> Highlight versatile skills such as communication, problem-solving, and leadership that are applicable across various roles and industries.
        </li>
        <li>
          <strong>Optimize for readability:</strong> Use clear headings, bullet points, and white space to enhance readability and make it easy for recruiters to scan your resume.
        </li>
        <li>
          <strong>Feature relevant coursework or certifications:</strong> Include coursework or certifications that are pertinent to the job and demonstrate your expertise in key areas.
        </li>
        <li>
          <strong>Highlight industry-specific knowledge:</strong> Showcase your understanding of industry trends, regulations, and best practices relevant to the position you're applying for.
        </li>
        <li>
          <strong>Proofread meticulously:</strong> Check your resume thoroughly for spelling, grammar, and formatting errors to ensure a polished final document.
        </li>
        <li>
          <strong>Seek feedback:</strong> Solicit feedback from trusted peers, mentors, or professional resume services to gain valuable insights and improve the effectiveness of your resume.
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
