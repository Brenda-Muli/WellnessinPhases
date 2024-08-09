import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function ArticleFeature(){
  return(
    <>
    <Carousel responsive={responsive}>
    <div className=" rounded-lg shadow-lg max-w-sm mx-4">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/photos/Periodmyths.png"
                  alt="imageone"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className = "text-center mt-4">
                <h2 className = "text-2xl font-bold text-[#622915]">What are period myths?</h2>
                <a
                  href="https://www.budgetbytes.com/stuffed-bell-peppers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className = "text-lg text-[#9A3F06] mt-2 inline-block hover:underline"
                >
                  Read more
                </a>
              </div>
            </div>

            <div className=" rounded-lg shadow-lg max-w-sm mx-4">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/photos/Menopause.png"
                  alt="imageone"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className = "text-center mt-4">
                <h2 className = "text-2xl font-bold text-[#622915]">What is menopause?</h2>
                <a
                  href="https://www.budgetbytes.com/stuffed-bell-peppers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className = "text-lg text-[#9A3F06] mt-2 inline-block hover:underline"
                >
                  Read more
                </a>
              </div>
            </div>
            <div className=" rounded-lg shadow-lg max-w-sm mx-4">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/photos/endometriosis.png"
                  alt="imageone"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className = "text-center mt-4">
                <h2 className = "text-2xl font-bold text-[#622915]">What are period myths?</h2>
                <a
                  href="https://www.budgetbytes.com/stuffed-bell-peppers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className = "text-lg text-[#9A3F06] mt-2 inline-block hover:underline"
                >
                  Read more
                </a>
              </div>
            </div>

            <div className=" rounded-lg shadow-lg max-w-sm mx-4">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/photos/MenstrualCups.png"
                  alt="imageone"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className = "text-center mt-4">
                <h2 className = "text-2xl font-bold text-[#622915]">What are menstrual cups?</h2>
                <a
                  href="https://www.budgetbytes.com/stuffed-bell-peppers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className = "text-lg text-[#9A3F06] mt-2 inline-block hover:underline"
                >
                  Read more
                </a>
              </div>
            </div>
    </Carousel>
    </>
  )
}

export default ArticleFeature;