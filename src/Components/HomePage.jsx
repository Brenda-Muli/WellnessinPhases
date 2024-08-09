import React, { useRef } from 'react';
import Header from './Header'; 
import Footer from './Footer';
import ContactUs from './ContactUs';
import Testimonials from './Testimonials';
import ArticleFeature from './ArticleFeature';



function HomePage(){
    
    const contactFormRef = useRef(null);
    const scrollToContactForm = () => {
        if (contactFormRef.current) {
          contactFormRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };
       

    return (
    <>
    <div className="bg-white text-black font-sans">
        <Header scrollToContactForm={scrollToContactForm}  />

        <section className="relative m-0 p-0 h-[80vh] overflow-hidden">
            <img
                src="/photos/SampleTwo.png"
                alt="Description"
                className="absolute inset-0 w-full h-full object-cover"
            />
            
        <div className="absolute inset-0 flex items-center justify-end p-4 bg-gradient-to-t from-white/30 via-transparent to-transparent">
            <div className="text-right max-w-lg text-[#F4E1D2] ml-40">
                <h2 className="text-3xl font-semibold mb-2">Welcome to our guide on nutrition during the menstrual cycle. Here you'll find tips and recommendations for each phase of your cycle.</h2>
            </div>
        </div>
        </section>

        <section>
            <div className=" p-6  mr-4 ">
                <h2 className="text-2xl font-semibold text-[#81340F] mb-4">Wellness in Phases</h2>
                <p className="text-base leading-relaxed text-black">Hey There! Understanding your menstrual cycle is essential for feeling your best, and we’re here to make it simple and straightforward for you. Our goal is to provide you with clear, accessible information so you can manage your menstrual health with confidence. We also provide expert tips on food and nutrition tailored to each phase of your menstrual cycle to help you feel your best throughout the month. We’re here to support you on your journey with confidence and care. Let’s navigate this together with positivity and a focus on holistic well-being! </p>
            </div>
        </section>

        <section className="flex justify-between p-8 max-w-5xl">
            <div className=" ">
                <h2 className="text-xl font-semibold text-[#81340F] mb-4">Importance of tracking your menstrual cycle</h2>
                <ul className="list-disc">
                    <li> <b className='text-[#81340F]'>Predict Your Periods</b> : Knowing your cycle length helps you anticipate when your next period will start, allowing you to plan ahead and manage your schedule.</li>
                    <br />
                    <li><b className='text-[#81340F]' >Manage PMS Symptoms</b> : Tracking your cycle can reveal patterns in PMS symptoms, helping you manage and mitigate them with targeted strategies.</li>
                    <br />
                    <li> <b className='text-[#81340F]'>Identify Patterns </b> : Regular tracking helps detect irregularities or changes in your cycle, which can be useful for identifying underlying health issues or making informed decisions with your healthcare provider.</li>
                    <br />
                    <li> <b className='text-[#81340F]'>Understand Your Body </b> : Your menstrual cycle can tell you a lot about your healthcare. When you keep track of your cycle and how you feel in each phase you can easily notice irregularities or changes that need attention. </li>
                </ul>
                <a
                href="https://www.hsph.harvard.edu/applewomenshealthstudy/learn-more/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B6764D] hover:underline"
                >
                Read More
                </a>
            </div>
        </section>
            <br />
        <section className="flex justify-between p-8 max-w-5xl">
                <div>
                    <h2 className="text-xl font-semibold mb-4 text-[#81340F]">When should you see a doctor?</h2>
                    <ul className="list-disc ">
                    <li><b className='text-[#81340F]'>Heavy Bleeding (Menorrhagia)</b> : If you need to change sanitary products every hour or two, or if your bleeding lasts longer than 7 days, it could indicate an underlying health issue like fibroids or hormonal imbalances.</li>
                    <br />
                    <li> <b className='text-[#81340F]'>Severe Pain (Dysmenorrhea)</b> : Experiencing intense menstrual cramps that interfere with daily activities may suggest conditions such as endometriosis, adenomyosis, or pelvic inflammatory disease.</li>
                    <br />
                    <li> <b className='text-[#81340F]'>Irregular Periods:</b> : If your menstrual cycle is consistently shorter than 21 days or longer than 35 days, or if you frequently miss periods, it might be due to hormonal imbalances, thyroid issues, or polycystic ovary syndrome (PCOS).</li>
                    <br />
                    <li> <b className='text-[#81340F]'> Absence of Periods (Amenorrhea):</b> : If you miss periods for three consecutive cycles or more, and you’re not pregnant, it could be a sign of underlying health issues like PCOS, significant weight loss or gain, or excessive exercise. </li>
                    <br />
                    <li> <b className='text-[#81340F]'>Changes in Bowel or Bladder Habits:</b> : Experiencing significant changes in bowel or bladder habits during your period, such as pain during urination or bowel movements, could be a sign of endometriosis or other pelvic conditions. </li>
                </ul>
                <a
                    href="https://www.vezeeta.co.ke/en/doctor/gynaecology-and-infertility/kenya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#B6764D] hover:underline"
                >
                    Book appointment with a doctor
                </a>
            </div>
        </section>

        <section>
            <div className=" p-6  mr-4">
                <h2 className="text-2xl font-semibold text-[#81340F] mb-4">Featured Articles</h2>
                <br/>
                <ArticleFeature/>
            </div>
        </section>
        
        </div>
        <br /> <br/> 
        <Testimonials/>
        <br /> <br/> 
        <ContactUs contactFormRef={contactFormRef} />
        <br /> <br/> <br/> <br/>
        <Footer/>
        </>
    );
};

export default HomePage;