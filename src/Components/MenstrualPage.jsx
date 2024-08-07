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

function MenstrualPage() {
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
      const categoryData = data['menstrual'][currentCategory];
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
        <header className="bg-[#E0C3B0]  p-4 text-center ">
          <h1 className="text-3xl font-bold text-[#622915]">Menstrual Phase</h1>
        </header>

        <main className="mt-8">
          <div className="max-w-4xl mx-4">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#622915]">Definition</h2>
              <p className="mb-8">
              Menstrual Phase is the first phase, which marks the beginning of the cycle and lasts approximately from days 1 to 5. During this phase, the uterine lining, known as the endometrium, sheds. This shedding results in menstrual bleedings. Hormone levels, particularly estrogen and progesterone, are at their lowest during this time. As the menstrual bleeding occurs, the body begins to prepare for the next phase of the cycle. 
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#622915]">Symptoms</h2>
              <ul className="list-disc list-inside mb-8">
                <li>Cramps </li>
                <li>Tender breasts</li>
                <li>Bloating</li>
                <li>Mood swings</li>
                <li>Irritability</li>
                <li>Headaches</li>
                <li>Tiredness</li>
                <li>Low back pain</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#622915]">Nutrition</h2>
              <p className="mb-8">
              During the menstrual phase, the most important food category to focus on is iron-rich foods, because of the significant blood loss that occurs. Iron is crucial for replenishing the body's stores and preventing iron deficiency anemia, which can lead to fatigue and other health issues.
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
                    <p className="text-sm text-gray-600 mt-2">It is important to focus on high proteins and warm foods in this phase especially the ones with adequate iron intake to help prevent iron deficiency anemia and support energy levels</p>
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
                    <p className="text-sm text-gray-600 mt-2">Vitamin C is needed to enhance iron absorption from plant-based sources and vitamin D helps with absorption.</p>
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
                    <p className="text-sm text-gray-600 mt-2">It is important to have complex carbohydrates to maintain stable blood sugar levels and sustain energy throughout the day.</p>
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
              <br /><br /><br />
            </section>

            <br /><br />
            
            <section className='mx-6'>
            <h2 className='text-2xl font-semibold mb-4 text-[#622915]' >Cycle-Based Recipes</h2>
            <p>Try out these recipes that offer comfort and help alleviate cramps or fatigue. Prioritizing nutrient-rich and hydrating foods that can soothe and support your body through menstruation.</p>
            <br />
            <Carousel responsive={responsive}>
            <div className=" rounded-lg shadow-lg max-w-sm mx-4">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/photos/beefsoup.jpg"
                  alt="imageone"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className = "text-center mt-4">
                <h2 className = "text-2xl font-bold text-[#622915]">Beef and vegetable soup</h2>
                <a
                  href="https://www.cookingclassy.com/vegetable-beef-soup/"
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
                  src="/photos/vegetablebroth.jpg"
                  alt="imageone"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className = "text-center mt-4">
                <h2 className = "text-2xl font-bold text-[#622915]">Vegetable broth with noodles</h2>
                <a
                  href="https://cookingwithayeh.com/vegetable-noodle-soup/"
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
                  src="/photos/sweetpotatoesfry.jpg"
                  alt="imageone"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className = "text-center mt-4">
                <h2 className = "text-2xl font-bold text-[#622915]">Salmon and spinach fry</h2>
                <a
                  href="https://wildalaskancompany.com/blog/sheet-pan-salmon-with-maple-roasted-sweet-potatoes-and-wilted-spinach"
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
                  src="/photos/chickenfry.jpg"
                  alt="imageone"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className = "text-center mt-4">
                <h2 className = "text-2xl font-bold text-[#622915]">Chicken vegetables stir fry</h2>
                <a
                  href="https://vjcooks.com/chicken-stirfry/"
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
                  src="/photos/toast.jpg"
                  alt="imageone"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className = "text-center mt-4">
                <h2 className = "text-2xl font-bold text-[#622915]">Eggs and avocado toast</h2>
                <a
                  href="https://www.inspiredtaste.net/23087/easy-avocado-egg-salad-recipe/"
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
          </div>
          <br/>
        </main>
      </div>
    </>
  );
}

export default MenstrualPage;