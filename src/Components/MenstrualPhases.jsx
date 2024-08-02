import React from 'react';
import { useParams } from 'react-router-dom';
import FollicularPage from './FollicularPage';
import OvulationPage from './OvulationPage';
import LutealPage from './LutealPage';
import MenstrualPage from './MenstrualPage';

const MenstrualPhases = () => {
    const { phase } = useParams();

    let content;
    switch (phase) {
        case 'follicular':
            content = <FollicularPage />;
            break;
        case 'ovulation':
            content = <OvulationPage />;
            break;
        case 'luteal':
            content = <LutealPage />;
            break;
        case 'menstrual':
            content = <MenstrualPage />;
            break;
        default:
            content = <p>Select a phase to view details.</p>;
    }

    return (
      <>
       {content}
      </>
    );
};

export default MenstrualPhases;