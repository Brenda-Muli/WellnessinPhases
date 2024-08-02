import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './Components/HomePage';
import MenstrualPhases from './Components/MenstrualPhases';

function App() {
    return (
        <BrowserRouter> 
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="menstrual-phases/:phase" element={<MenstrualPhases />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;