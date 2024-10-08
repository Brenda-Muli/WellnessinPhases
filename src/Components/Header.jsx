import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header({ scrollToContactForm }) {

    const [showSubMenu, setShowSubMenu] = useState({ menstrual: false, articles: false });
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

// Function to display sub-menu
    const handleMenuClick = (menu) => (event) => {
        event.preventDefault();

// Toggle the visibility of the submenu
        setShowSubMenu(prevState => ({
            ...prevState,
            [menu]: !prevState[menu]
        }));
    };
    
// Function to handle form submissions for search
    const handleSearch = (e) => {
        e.preventDefault();
        const lowerCaseQuery = query.toLowerCase();

        if (lowerCaseQuery.includes('menstrual')) {
            navigate('/menstrual-phases/menstrual');
        } else if (lowerCaseQuery.includes('follicular')) {
            navigate('/menstrual-phases/follicular');
        } else if (lowerCaseQuery.includes('ovulation')) {
            navigate('/menstrual-phases/ovulation');
        } else if (lowerCaseQuery.includes('luteal')) {
            navigate('/menstrual-phases/luteal');
        } else {
            alert('Phase not found. Please try again.');
        }
    };

    return (
        <nav className="bg-[#EOC3BO] p-4 flex justify-between items-center">
            <ul className="flex space-x-4">
                <li><Link to="/" className="text-[#622915] font-bold hover:text-[#9A3F06]">HOME</Link></li>
                <li>
                    <a 
                        href="/menstrual-phases" 
                        onClick={handleMenuClick('menstrual')} 
                        className="text-[#622915] font-bold hover:text-[#9A3F06]"
                    >
                        MENSTRUAL PHASE
                    </a>
                    {showSubMenu.menstrual && (
                        <ul className="pl-4 mt-2">
                            <li><Link to="/menstrual-phases/follicular" className="text-[#622915] font-bold hover:text-[#9A3F06]">Follicular Phase</Link></li>
                            <li><Link to="/menstrual-phases/ovulation" className="text-[#622915] font-bold hover:text-[#9A3F06]">Ovulation Phase</Link></li>
                            <li><Link to="/menstrual-phases/luteal" className="text-[#622915] font-bold hover:text-[#9A3F06]">Luteal Phase</Link></li>
                            <li><Link to="/menstrual-phases/menstrual" className="text-[#622915] font-bold hover:text-[#9A3F06]">Menstrual Phase</Link></li>
                        </ul>
                    )}
                </li>
                <li>
                    <a 
                        href="/articles" 
                        onClick={handleMenuClick('articles')} 
                        className="text-[#622915] font-bold hover:text-[#9A3F06]"
                    >
                        ARTICLES
                    </a>
                    {showSubMenu.articles && (
                        <ul className="pl-4 mt-2">
                            <li><Link to="/articles/endometriosis" className="text-[#622915] font-bold hover:text-[#9A3F06]">Endometriosis</Link></li>
                            <li><Link to="/articles/menopause" className="text-[#622915] font-bold hover:text-[#9A3F06]">Menopause</Link></li>
                            <li><Link to="/articles/menstrualcup" className="text-[#622915] font-bold hover:text-[#9A3F06]">Menstrual Cup</Link></li>
                            <li><Link to="/articles/periodmyths" className="text-[#622915] font-bold hover:text-[#9A3F06]">Period Myths</Link></li>
                        </ul>
                    )}
                </li>
                <li>
                    <a
                        href="#contact-form"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToContactForm(); 
                        }}
                        className="text-[#622915] font-bold hover:text-[#9A3F06]"
                    >
                        CONTACT US
                    </a>
                </li>
            </ul>

            <form onSubmit={handleSearch} className="flex items-center">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="border border-[#B6764D] rounded px-3 py-1"
                    placeholder="Search for a phase"
                />
                <button
                    type="submit"
                    className="ml-2 p-1 bg-[#9A3F06] text-[#622915] hover:bg-[#B6764D] hover:rounded-lg"
                >
                    Search
                </button>
            </form>
        </nav>
    );
}

export default Header;