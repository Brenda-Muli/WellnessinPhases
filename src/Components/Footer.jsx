import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Footer (){
//Initializing of useState
  const [showSubMenu, setShowSubMenu] = useState(false);

 //Manage visibility of the sub-menu
  const handleMenstrualPhasesClick = (e) => {
    e.preventDefault();
    setShowSubMenu(!showSubMenu);
  };


  return(
    <div className="w-full bg-[#F4E1D2] p-8">
    <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
      <img 
        src="/photos/logo.png" 
        alt="logo" 
        className="w-12" 
      />
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Link 
            to="/" 
            className="font-normal text-[#B6764D] transition-colors hover:text-[#8134OF] focus:text-[#8134OF]"
          >
            Home
          </Link>
        </li>
        <li>
          <div 
            onMouseEnter={() => setShowSubMenu(true)}
            onMouseLeave={() => setShowSubMenu(false)}
            className="relative"
          >
            <a
            href="/menstrual-phase" 
            onClick={handleMenstrualPhasesClick} 
            className="font-normal text-[#B6764D] transition-colors hover:text-[#8134OF] focus:text-[#8134OF]"
            >
              Menstrual Phases
            </a>
            {showSubMenu && (
              <ul className="absolute left-0 mt-2 pl-4">
                <li><Link to="/menstrual-phases/follicular" className="block text-[#B6764D] font-normal transition-colors hover:text-[#8134OF] focus:text-[#8134OF]">Follicular Phase</Link></li>
                <li><Link to="/menstrual-phases/ovulation" className="block text-[#B6764D] font-normal transition-colors hover:text-[#8134OF] focus:text-[#8134OF]">Ovulation Phase</Link></li>
                <li><Link to="/menstrual-phases/luteal" className="block text-[#B6764D] font-normal transition-colors hover:text-[#8134OF] focus:text-[#8134OF]">Luteal Phase</Link></li>
                <li><Link to="/menstrual-phases/menstrual" className="block text-[#B6764D] font-normal transition-colors hover:text-[#8134OF] focus:text-[#8134OF]">Menstrual Phase</Link></li>
              </ul>
            )}
          </div>
        </li>
        <li>
          <Link 
            to="/articles" 
            className="font-normal text-[#B6764D] transition-colors hover:text-[#8134OF] focus:text-[#8134OF]"
          >
            Articles
          </Link>
        </li>
        <li>
          <a 
            href="#contact-form" 
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="font-normal text-[#B6764D] transition-colors hover:text-[#8134OF] focus:text-[#8134OF]"
          >
            Contact Us
          </a>
        </li>
      </ul>
    </div>
    <hr className="my-8 border-[#B6764D]" />
    <p className="text-center text-[#B6764D] font-normal">
      &copy; 2024 WellnessinPhases
    </p>
  </div>
  );
};

export default Footer;