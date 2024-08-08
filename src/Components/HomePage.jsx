import React, { useState } from 'react';
import Header from './Header'; 


function HomePage(){
    const [activeFAQ, setActiveFAQ] = useState(null);
    const toggleFAQ = (index) => {
        setActiveFAQ(activeFAQ === index ? null : index);
    };

    return (
    <div className="bg-white text-[#622915] font-sans">
        <Header/>

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

        <section className="">
            <div className=" p-6  mr-4">
                <h2 className="text-2xl font-semibold text-[#8134OF] mb-4">Wellness in Phases</h2>
                <p className="text-base leading-relaxed text-black">Hey There! Understanding your menstrual cycle is essential for feeling your best, and we’re here to make it simple and straightforward for you. Our goal is to provide you with clear, accessible information so you can manage your menstrual health with confidence. We also provide expert tips on food and nutrition tailored to each phase of your menstrual cycle to help you feel your best throughout the month. We’re here to support you on your journey with confidence and care. Let’s navigate this together with positivity and a focus on holistic well-being! </p>
            </div>
        </section>

        <section className="flex justify-between p-8">
            <div className=" ">
                <h2 className="text-xl font-semibold text-[#8134OF] mb-4">Importance of tracking your menstrual cycle</h2>
                <ul className="list-disc text-black">
                    <li> <b>Predict Your Periods</b> : Knowing your cycle length helps you anticipate when your next period will start, allowing you to plan ahead and manage your schedule.</li>
                    <br />
                    <li><b>Manage PMS Symptoms</b> : Tracking your cycle can reveal patterns in PMS symptoms, helping you manage and mitigate them with targeted strategies.</li>
                    <br />
                    <li> <b>Identify Patterns </b> : Regular tracking helps detect irregularities or changes in your cycle, which can be useful for identifying underlying health issues or making informed decisions with your healthcare provider.</li>
                    <br />
                    <li> <b>Understand Your Body </b> : Your menstrual cycle can tell you a lot about your healthcare. When you keep track of your cycle and how you feel in each phase you can easily notice irregularities or changes that need attention. </li>
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
        <section className="flex justify-between p-8">
                <div className=" ">
                    <h2 className="text-xl font-semibold text-[#8134OF] mb-4">When should you see a doctor?</h2>
                    <ul className="list-disc text-black">
                    <li><b>Heavy Bleeding (Menorrhagia)</b> : If you need to change sanitary products every hour or two, or if your bleeding lasts longer than 7 days, it could indicate an underlying health issue like fibroids or hormonal imbalances.</li>
                    <br />
                    <li> <b>Severe Pain (Dysmenorrhea)</b> : Experiencing intense menstrual cramps that interfere with daily activities may suggest conditions such as endometriosis, adenomyosis, or pelvic inflammatory disease.</li>
                    <br />
                    <li> <b>Irregular Periods:</b> : If your menstrual cycle is consistently shorter than 21 days or longer than 35 days, or if you frequently miss periods, it might be due to hormonal imbalances, thyroid issues, or polycystic ovary syndrome (PCOS).</li>
                    <br />
                    <li> <b> Absence of Periods (Amenorrhea):</b> : If you miss periods for three consecutive cycles or more, and you’re not pregnant, it could be a sign of underlying health issues like PCOS, significant weight loss or gain, or excessive exercise. </li>
                    <br />
                    <li> <b>Changes in Bowel or Bladder Habits:</b> : Experiencing significant changes in bowel or bladder habits during your period, such as pain during urination or bowel movements, could be a sign of endometriosis or other pelvic conditions. </li>
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
            <div className=" p-6 w-1/2 mr-4">
                <h2 className="text-2xl font-semibold text-[#8134OF] mb-4">Featured Articles</h2>
                <p className="text-base leading-relaxed">Carrousel of articles in articles page</p>
            </div>
        </section>

        <section className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-3 max-w-6xl">
                <div className="bg-[#F4E1D2] border border-[#B6764D] rounded p-4 cursor-pointer " onClick={() => toggleFAQ(0)}>
                    <h3 className="text-xl font-semibold text-[#9A3F06]">What is the menstrual cycle?</h3>
                    {activeFAQ === 0 && <p className="mt-2"> The menstrual cycle is a monthly process that prepares a woman’s body for pregnancy. It involves hormonal changes that regulate the shedding of the uterine lining menstruation, the release of an egg ovulation, and preparation for possible conception. Typically lasting about 28 days, though it can range from 21 to 35 days, the cycle includes four main phases: menstrual, follicular, ovulation, and luteal.</p>}
                </div>
                <div className="bg-[#F4E1D2] border border-[#B6764D] rounded p-4 cursor-pointer" onClick={() => toggleFAQ(1)}>
                    <h3 className="text-xl font-semibold text-[#9A3F06]">What are the main phases of the menstrual cycle?</h3>
                    {activeFAQ === 1 && <p className="mt-2">The menstrual cycle is divided into four main phases: the menstrual phase, which involves bleeding and lasts 3 to 7 days; the follicular phase, starting on the first day of menstruation and lasting until ovulation, during which ovarian follicles develop; the ovulation phase, around day 14 of a 28-day cycle, when a mature egg is released; and the luteal phase, where the corpus luteum forms and produces hormones to support a potential pregnancy, leading to menstruation if pregnancy does not occur.</p>}
                </div>
                <div className="bg-[#F4E1D2] border border-[#B6764D] rounded p-4 cursor-pointer" onClick={() => toggleFAQ(2)}>
                    <h3 className="text-xl font-semibold text-[#9A3F06]">How can I track my menstrual cycle effectively?</h3>
                    {activeFAQ === 2 && <p className="mt-2">You can track your menstrual cycle effectively using several methods: the calendar method, where you mark the start and end dates of your period each month; apps designed for cycle tracking; basal body temperature monitoring, which can help identify ovulation; and cervical mucus observation, which provides clues about your fertile windows. Combining these methods can give you a comprehensive understanding of your cycle.</p>}
                </div>
                <div className="bg-[#F4E1D2] border border-[#B6764D] rounded p-4 cursor-pointer" onClick={() => toggleFAQ(3)}>
                    <h3 className="text-xl font-semibold text-[#9A3F06]">How does the menstrual cycle affect fertility?</h3>
                    {activeFAQ === 3 && <p className="mt-2">The menstrual cycle significantly impacts fertility, with the highest chances of conception occurring during the ovulation phase, when a mature egg is released from the ovary. During the follicular phase, fertility begins to increase as follicles mature, while the luteal phase supports a potential pregnancy if fertilization occurs. Understanding these phases and tracking ovulation can help in timing intercourse for conception or using natural methods of contraception.</p>}
                </div>
                <div className="bg-[#F4E1D2] border border-[#B6764D] rounded p-4 cursor-pointer" onClick={() => toggleFAQ(4)}>
                    <h3 className="text-xl font-semibold text-[#9A3F06]">What is PMS, and how can I manage it?</h3>
                    {activeFAQ === 4 && <p className="mt-2">Premenstrual Syndrome PMS involves a range of physical and emotional symptoms that occur in the luteal phase before menstruation, such as irritability, mood swings, and bloating. Managing PMS can involve dietary changes, like reducing caffeine and salt, regular exercise, stress management techniques such as yoga and meditation, and, if necessary, medical advice for severe symptoms, which might include medications or hormonal treatments.</p>}
                </div>
                <div className="bg-[#F4E1D2] border border-[#B6764D] rounded p-4 cursor-pointer" onClick={() => toggleFAQ(5)}>
                    <h3 className="text-xl font-semibold text-[#9A3F06]">When should I see a doctor about my menstrual cycle?</h3>
                    {activeFAQ === 5 && <p className="mt-2">You should consult a healthcare provider if you experience significant irregularities in your menstrual cycle, such as severe pain that interferes with daily activities, heavy bleeding, or missed periods for several months. Additionally, seek medical advice if you notice unusual symptoms like severe mood swings, significant weight changes, or other health issues affecting your cycle, as these could indicate underlying conditions requiring treatment.</p>}
                </div>
            </div>
            </section>
        </div>
    );
};

export default HomePage;