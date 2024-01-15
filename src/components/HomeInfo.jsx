/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I am
        <span className='font-semibold mx-2 text-white'>Maria</span>
        👋
        <br />
        A FullStack Developer proficient in frontend and backend technologies with Data analytics skills.
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
        Graduate of Computer Science Engineering and now I’m looking for a role where I can grow and learn from other experienced team members. <br /> 
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Learn more
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
           Curious about what I have done so for ?
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          <b />Visit my portfolio 
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        Need a fresh FullStack Developer or looking for a curious ethusiasist? <br/> Im just a few keystrokes away ❤
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Lets talk
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;