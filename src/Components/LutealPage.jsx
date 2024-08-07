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

function LutealPage() {
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
      const categoryData = data['luteal'][currentCategory];
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
      <div className="min-h-screen bg-gray-50 pl-6">
        <header className="bg-[#E0C3B0] p-4 text-center">
          <h1 className="text-3xl font-bold text-[#622915]">Luteal Phase</h1>
        </header>

        <main className="mt-8">
          <div className="max-w-4xl mx-4">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#622915]">Definition</h2>
              <p className="mb-8">
              Luteal Phase is the usualy the last phase, which spans from approximately day 15 to 28. During this phase, the remnants of the dominant follicle in the ovary form a structure called the corpus luteum. The corpus luteum begins to produce progesterone, in addition to small amounts of estrogen. These hormones work to further thicken the endometrium and prepare it to receive a fertilized egg. If fertilization occurs, the embryo will implant into the thickened endometrial lining. If fertilization does not occur, hormone levels will decline toward the end of the luteal phase, causing the endometrial lining to shed once again, initiating a new menstrual cycle.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#622915]">Symptoms</h2>
              <ul className="list-disc list-inside mb-8">
                <li>Tender breasts</li>
                <li>Bloating</li>
                <li>Headaches</li>
                <li>Weight gain</li>
                <li>Food cravings</li>
                <li>Trouble sleeping</li>
                <li>Mood changes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#622915]">Nutrition</h2>
              <p className="mb-8">
              In this phase metabolism speeds up therefore emphasizes in foods rich in complex carbohydrates is required to help stabilize mood and energy levels. Foods that help to regulate mood and reduce bloating are also beneficial.
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
                    <p className="text-sm text-gray-600 mt-2">In this phase it is important to consume body-building foods to supprt iron levels and reduce cravings.</p>
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
                    <p className="text-sm text-gray-600 mt-2">Magneisum rich vitamins are important for this phase as they help in hormone regulation especially Vitamin B which are essential for enery metabloism. </p>
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
                    <p className="text-sm text-gray-600 mt-2">Focusing on a macrobiotic diet with a lot of complex carbs is important in this phase to help stabilize your blood sugar and keep energy levels steady.</p>
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
            <h2 className='text-2xl font-semibold mb-4 text-[#622915]' >Cycle-Based Recipe</h2>
            <p>Try out these recipes that provide comfort and support for any PMS symptoms you might experience. Focusing on wholesome, soothing meals that stabilize mood and sustain energy.</p>
            <br />
            <Carousel responsive={responsive}>
            <div className=" rounded-lg shadow-lg max-w-sm mx-4">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/photos/pancakes.jpg"
                  alt="imageone"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className = "text-center mt-4">
                <h2 className = "text-2xl font-bold text-[#622915]">Pancakes</h2>
                <a
                  href="https://www.inspiredtaste.net/24593/essential-pancake-recipe/"
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
                  src="/photos/oatmeal.jpg"
                  alt="imageone"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className = "text-center mt-4">
                <h2 className = "text-2xl font-bold text-[#622915]">Oatmeal with Almonds and Berries</h2>
                <a
                  href="https://www.pickuplimes.com/recipe/blueberry-almond-oatmeal-729"
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
                  src="/photos/butternutsoup.jpg"
                  alt="imageone"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className = "text-center mt-4">
                <h2 className = "text-2xl font-bold text-[#622915]">Butter soup with naan</h2>
                <a
                  href="https://www.spar.co.na/Recipes/View/Butternut-and-Sweet-Potato-Soup-with-Naan"
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
                  src="/photos/pastafry.jpg"
                  alt="imageone"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className = "text-center mt-4">
                <h2 className = "text-2xl font-bold text-[#622915]">Pasta</h2>
                <a
                  href="https://www.bbcgoodfood.com/recipes/collection/pasta-recipes"
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
                  src="/photos/pudding.jpg"
                  alt="imageone"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className = "text-center mt-4">
                <h2 className = "text-2xl font-bold text-[#622915]">Chia seeds pudding with fresh fruits</h2>
                <a
                  href="https://www.bowlofdelicious.com/strawberry-chia-seed-pudding/"
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
                  src="/photos/ramen.jpg"
                  alt="imageone"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className = "text-center mt-4">
                <h2 className = "text-2xl font-bold text-[#622915]">Chicken ramen</h2>
                <a
                  href="https://www.forkknifeswoon.com/simple-homemade-chicken-ramen/"
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

export default LutealPage;