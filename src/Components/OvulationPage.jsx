import React, { useState, useEffect } from 'react';
import Header from './Header';

function OvulationPage() {
//Use of useState to initialize category, currentcategory,currentindex and data
  const [category, setCategory] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState({});

//Use of useEffect to fetch data from API
  useEffect(() => {
    fetch('http://localhost:8000/food')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Could not fetch foods');
        }
        return res.json();
      })
      .then((data) => {
        console.log('Fetched data:', data); 
        setData(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

//useEffect for when currentCategory or the data changes
  useEffect(() => {
    if (currentCategory) {
      console.log('Current category:', currentCategory); 
      const categoryData = data['ovulation'][currentCategory];
      console.log('Category data:', categoryData); 
      if (categoryData) {
        setCategory(categoryData);
        setCurrentIndex(0); 
      } else {
        setCategory([]);
      }
    }
  }, [currentCategory, data]);

//function to update current category when a category is clicked
  const handleCategoryClick = (selectedCategory) => {
    setCurrentCategory(selectedCategory);
  };

//Function for navigating through the items in the slider
  const handleSliderNavigation = (direction) => {
    if (!category || category.length === 0) return;

    setCurrentIndex((prevIndex) => {
      if (direction === 'prev') {
        return (prevIndex - 1 + category.length) % category.length;
      } else if (direction === 'next') {
        return (prevIndex + 1) % category.length;
      }
      return prevIndex;
    });
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 ">
        <header className="bg-[#E0C3B0] p-4 text-center">
          <h1 className="text-3xl font-bold text-[#622915]">Ovulation Phase</h1>
        </header>

        <main className="mt-8">
          <div className="max-w-4xl mx-auto">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#622915]">Definition</h2>
              <p className="mb-8">
                Ovulation is the second phase of the cycle. It is when your ovary releases a mature egg. The egg travels down the fallopian tube toward the uterus to be fertilized by sperm.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#622915]">Symptoms</h2>
              <ul className="list-disc list-inside mb-8">
                <li>Changes in Basal Body Temperature (BBT)</li>
                <li>Lower abdominal pain</li>
                <li>Changes in Cervical Mucus</li>
                <li>Increased Libido</li>
                <li>Breast Tenderness</li>
                <li>Trouble sleeping</li>
                <li>Mood changes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#622915]">Nutrition</h2>
              <p className="mb-8">
                In this phase, estrogen is at its highest peak and progesterone rises as well. In this stage, energy is usually high. Because of this, it is important to support the liver with estrogen-metabolizing foods and also incorporate anti-inflammatory foods.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#622915]">Food Categories</h2>
              <div className="flex space-x-4 overflow-x-auto">
                <div
                  className="flex-none w-60 bg-white border border-gray-300 rounded-lg shadow-lg cursor-pointer"
                  onClick={() => handleCategoryClick('proteins')}
                >
                  <img
                    src="/photos/proteins.jpg"  
                    alt="Proteins"
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <p className="text-lg font-semibold text-[#622915]">Proteins</p>
                    <p className="text-sm text-gray-600 mt-2">Proteins are important in this phase because they continue to support tissue repair and hormone balance during the peak fertility period.</p>
                  </div>
                </div>

                <div
                  className="flex-none w-60 bg-white border border-gray-300 rounded-lg shadow-lg cursor-pointer"
                  onClick={() => handleCategoryClick('vitamins')}
                >
                  <img
                    src="/photos/vitaminsphoto.jpg"  
                    alt="Vitamins"
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <p className="text-lg font-semibold text-[#622915]">Vitamins</p>
                    <p className="text-sm text-gray-600 mt-2">Vitamins especially ones in antioxidants are important to help protect eggs from oxidative stress and support overall reproductive health and fruits that maintain hydration levels which is particularly important during increased physical activity and heat.</p>
                  </div>
                </div>

                <div
                  className="flex-none w-60 bg-white border border-gray-300 rounded-lg shadow-lg cursor-pointer"
                  onClick={() => handleCategoryClick('healthyfats')}
                >
                  <img
                    src="/photos/healthyfats.jpg"  
                    alt="Healthy Fats"
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <p className="text-lg font-semibold text-[#622915]">Healthy Fats</p>
                    <p className="text-sm text-gray-600 mt-2">In this phase it is important to consume healthy fats to maintain hormone production and support fertility.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="foodSuggestions" className="mt-8">
              {category.length > 0 ? (
                <div className="relative">
                  <div className="flex overflow-x-auto">
                    {category.map((food, index) => (
                      <div key={food.name} className={`flex-none w-60 mx-2 ${index === currentIndex ? 'block' : 'hidden'}`}>
                        <img
                          src={food.image}
                          alt={food.name}
                          className="w-full h-40 object-cover rounded-lg"
                        />
                        <p className="text-center mt-2 text-[#622915]">{food.name}</p>
                      </div>
                    ))}
                  </div>
                  <br /> <br />
                  <div className="absolute inset-x-0 bottom-0 flex justify-between px-4 py-2">
                    <button
                      id="prev"
                      className="bg-[#81340F] text-white px-4 py-2 rounded-lg"
                      onClick={() => handleSliderNavigation('prev')}
                    >
                      Prev
                    </button>
                    <button
                      id="next"
                      className="bg-[#81340F] text-white px-4 py-2 rounded-lg"
                      onClick={() => handleSliderNavigation('next')}
                    >
                      Next
                    </button>
                  </div>
                </div>
              ) : (
                <p className="text-center text-lg text-[#622915]">Select a category to view suggestions.</p>
              )}
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export default OvulationPage;