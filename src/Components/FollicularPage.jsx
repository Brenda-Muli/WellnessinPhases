import React, { useState, useEffect } from 'react';
import Header from './Header';
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

function FollicularPage() {
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
      const categoryData = data['follicular'][currentCategory];
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
      <div className="min-h-screen bg-gray-50 pl-6 ">
        <header className="bg-[#E0C3B0] p-4 text-center">
          <h1 className="text-3xl font-bold text-[#622915]">Follicular Phase</h1>
        </header>

        <main className="mt-8">
          <div className="max-w-4xl mx-4">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#622915]">Definition</h2>
              <p className="mb-8">
              Follicular Phase spans approximately from days 1 to 13 and overlaps with the menstrual phase. In this phase, the pituitary gland releases follicle-stimulating hormone (FSH), which prompts several follicles in the ovaries to start maturing. Each follicle contains an egg (ovum) and produces estrogen. As estrogen levels rise, they stimulate the growth and development of the endometrium, causing it to thicken in preparation for a potential pregnancy. The dominant follicle continues to develop, while the others typically regress.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#622915]">Symptoms</h2>
              <ul className="list-disc list-inside mb-8">
                <li>Fatigue</li>
                <li>Cervical Mucus Changes</li>
                <li>Increased Libido</li>
                <li>Mid-cycle pain</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#622915]">Nutrition</h2>
              <p className="mb-8">
              During the follicular phase, the body is preparing for ovulation. Proteins and complex carbohydrates are often needed more. This phase benefits from foods that provide sustained energy and support hormone balance. 
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
                    <p className="text-sm text-gray-600 mt-2">In follicular phase, proteins are essential for tissue repair and hormone synthesis as the body prepares for ovulation.</p>
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
                    <p className="text-sm text-gray-600 mt-2">Vitamin C are important as they act as antioxidants, supports immune function, and aids in the absorption of iron. Vitamin E foods are also important as they protect cells from damage caused by free radicals.</p>
                  </div>
                </div>

                <div
                  className="flex-none w-60 bg-white border border-gray-300 rounded-lg shadow-lg cursor-pointer"
                  onClick={() => handleCategoryClick('carbohydrates')}
                >
                  <img
                    src="/photos/carbohydrates.jpg"  
                    alt="Carbohyrdates"
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <p className="text-lg font-semibold text-[#622915]">Carbohydrates</p>
                    <p className="text-sm text-gray-600 mt-2">Carbohyrdates are needed in this phase to provide sustained energy and stabilize blood sugar levels throughout the day.</p>
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
            <br/> <br/> <br/>
            </section>

            <br/> <br/>

            <section className='mx-6'>
            <h2 className='text-2xl font-semibold mb-4 text-[#622915]' >Cycle-Based Recipes</h2>
            <p> Try out these recipes designed to boost energy and support your body as it prepares for ovulation. Focusing on nutrient-dense foods rich in vitamins and minerals to enhance your vitality and promote a balanced mood. </p>

            <br />
            <Carousel responsive={responsive}>
            <div className=" rounded-lg shadow-lg max-w-sm mx-4">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/photos/qunioasalad.jpg"
                  alt="imageone"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className = "text-center mt-4">
                <h2 className = "text-2xl font-bold text-[#622915]">Quinoa salad</h2>
                <a
                  href="https://www.loveandlemons.com/quinoa-salad-recipe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className = "text-lg text-[#9A3F06] mt-2 inline-block hover:underline"
                >
                  Read Recipe
                </a>
              </div>
            </div>

            <div className=" rounded-lg shadow-lg max-w-sm mx-4">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/photos/berrysmoothie.jpg"
                  alt="imageone"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className = "text-center mt-4">
                <h2 className = "text-2xl font-bold text-[#622915]">Berry smoothie</h2>
                <a
                  href="https://www.dinneratthezoo.com/mixed-berry-smoothie/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className = "text-lg text-[#9A3F06] mt-2 inline-block hover:underline"
                >
                  Read Recipe
                </a>
              </div>
            </div>

            <div className=" rounded-lg shadow-lg max-w-sm mx-4">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/photos/chickpeassalad.jpg"
                  alt="imageone"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className = "text-center mt-4">
                <h2 className = "text-2xl font-bold text-[#622915]">Chickpea Salad</h2>
                <a
                  href="https://cookingwithayeh.com/chickpea-avocado-salad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className = "text-lg text-[#9A3F06] mt-2 inline-block hover:underline"
                >
                  Read Recipe
                </a>
              </div>
            </div>

            <div className=" rounded-lg shadow-lg max-w-sm mx-4">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/photos/tofufry.jpg"
                  alt="imageone"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className = "text-center mt-4">
                <h2 className = "text-2xl font-bold text-[#622915]">Tofu stir fry</h2>
                <a
                  href="https://www.wellplated.com/three-pea-ginger-tofu-stir-fry/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className = "text-lg text-[#9A3F06] mt-2 inline-block hover:underline"
                >
                  Read Recipe
                </a>
              </div>
            </div>

            <div className=" rounded-lg shadow-lg max-w-sm mx-4">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/photos/tsandwich.jpg"
                  alt="imageone"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className = "text-center mt-4">
                <h2 className = "text-2xl font-bold text-[#622915]">Turkey sandwich</h2>
                <a
                  href="https://www.favfamilyrecipes.com/turkey-sandwich/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className = "text-lg text-[#9A3F06] mt-2 inline-block hover:underline"
                >
                  Read Recipe
                </a>
              </div>
            </div>

            <div className=" rounded-lg shadow-lg max-w-sm mx-4">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/photos/cs.jpg"
                  alt="imageone"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className = "text-center mt-4">
                <h2 className = "text-2xl font-bold text-[#622915]">Chicken avocado wrap</h2>
                <a
                  href="https://www.simplejoy.com/chicken-wrap/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className = "text-lg text-[#9A3F06] mt-2 inline-block hover:underline"
                >
                  Read Recipe
                </a>
              </div>
            </div>

            </Carousel>
            </section>
            <br />
          </div>
        </main>
      </div>
    </>
  );
}

export default FollicularPage;