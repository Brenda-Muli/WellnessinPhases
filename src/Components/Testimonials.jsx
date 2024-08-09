import React, { useState } from "react";

const testimonialList = [
  [
    {
      name: "Grace Elizabeth ",
      position: " Nutritionist and Wellness Coach",
      content:
        "Understanding the impact of different menstrual phases on nutrition has been a game-changer for me. Tailoring my diet to my cycle has improved my energy levels and overall well-being. This approach is truly transformative for anyone looking to optimize their health",
    },
    {
      name: "Valerie Eva",
      position: "Registered Dietitian",
      content:
        "Many women overlook the connection between their menstrual cycle and nutritional needs. By adjusting dietary intake based on the menstrual phase, my clients have seen improvements in mood and digestion. It’s a simple yet powerful change",
    },
    {
      name: "Flavior Joy",
      position: " University Student",
      content:
        "As a student balancing academics and personal life, learning about how different menstrual phases affect my energy and focus has been invaluable. Adjusting my diet and study habits accordingly has made a significant difference in my productivity and overall mood",
    },
  ],
  [
    {
      name: "Anita Sera",
      position: "Yoga Instructor",
      content:
        "Adapting yoga practices to the menstrual cycle has been incredibly beneficial for my students. By focusing on gentle and restorative poses during certain phases, they experience less discomfort and greater relaxation. It’s a holistic approach to menstrual health",
    },
    {
      name: "Sheila Sharon",
      position: "Fitness Trainer",
      content:
        "Integrating menstrual phase awareness into my clients' fitness routines has shown remarkable results. By aligning their workouts with their menstrual cycles, they experience less fatigue and better performance. It’s an essential aspect of holistic health.",
    },
    {
      name: "Peris Love",
      position: "University Student",
      content:
        "As a student balancing academics and personal life, learning about how different menstrual phases affect my energy and focus has been invaluable. Adjusting my diet and study habits accordingly has made a significant difference in my productivity and overall mood.",
    },
  ],
];

const ShapeOne = (
  <svg
    className="absolute bottom-0 left-0 -z-[1] w-[404px] h-[572px]"
    viewBox="0 0 404 572"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="118"
      cy="286"
      r="265.5"
      stroke="#B6764D"
      strokeOpacity="0.2"
      strokeWidth="41"
    />
  </svg>
);

const ShapeTwo = (
  <svg
    className="absolute top-0 right-0 -z-[1] w-[269px] h-[479px]"
    viewBox="0 0 269 479"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="239.5"
      cy="239.5"
      r="239.5"
      fill="#F4E1D2"
      fillOpacity="0.25"
    />
  </svg>
);

function Testimonials (){
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => setIndex(selectedIndex);

  return (
    <section className="relative z-[1] py-14 md:py-24 bg-white">

    <h2 className="text-3xl font-bold text-[#81340F] text-center mb-12">
       Testimonials
    </h2>

      {ShapeOne}
      {ShapeTwo}

      <div className="container px-4 mx-auto ">
        <div className="mt-12 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {testimonialList[index].map((testimonial, i) => (
              <div className="bg-white dark:bg-[#0b1727] shadow-xl p-6 rounded-lg " key={i}>
                <div className="mb-6 ">
                  <div className="ml-4 ">
                    <h4 className="text-xl font-medium text-[#622915] ">{testimonial.name}</h4>
                    <p className="text-sm text-[#622915]">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{testimonial.content}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-12 " >
            {testimonialList.map((_, i) => (
              <button
                className={`w-3 h-3 rounded-full ${
                  index === i
                    ? "bg-black scale-125"
                    : "bg-gray-400 dark:bg-slate-800"
                }`}
                key={i}
                onClick={() => handleSelect(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;