import React from 'react';
import { useParams } from 'react-router-dom';
import EndometriosisPage from './EndometriosisPage';
import MenopausePage from './MenopausePage';
import MenstrualCupPage from './MenstrualCupPage';
import PeriodMythsPage from './PeriodMythsPage';

function ArticlesPage() {
    const {articleId} = useParams();

    let content;
    switch (articleId) {
        case 'endometriosis':
            content = <EndometriosisPage />;
            break;
        case 'menopause':
            content = <MenopausePage />;
            break;
        case 'menstrualcup':
            content = <MenstrualCupPage />;
            break;
        case 'periodmyths':
            content = <PeriodMythsPage />;
            break;
        default:
            content = <p>Select an article to view details.</p>;
    }

    return (
      <>
       {content}
      </>
    );
}

export default ArticlesPage;