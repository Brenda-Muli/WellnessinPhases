import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './Components/HomePage';
import MenstrualPhases from './Components/MenstrualPhases';
import ContactUs from './Components/ContactUs';
import ArticlesPage from './Components/ArticlesPage'


function App() {
    return (
        <BrowserRouter> 
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="menstrual-phases/:phase" element={<MenstrualPhases />} />
                <Route path="contact-us" element={<ContactUs/>} />
                <Route path="articles/:articleId" element={<ArticlesPage/>} />
            </Routes>
        </BrowserRouter>
       
    );
};

export default App;