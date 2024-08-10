import React from 'react';
import Header from './Header'
import Footer from './Footer';


function MenopausePage() {
  return (
    <>
    <Header/>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-[#622915]">Understanding Menopause</h1>
      <img
        src="/photos/Menopause.png"
        alt="Menopause"
        className="w-1/2 h-1/2 mt-4 mb-6 rounded-lg shadow-lg"
      />

      <div className=" p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-[#622915]">What's in this page?</h2>
        <ul className="list-disc list-inside mt-2">
          <li><a href="#overview" className="text-[#9A3F06] hover:underline">Introduction to Menopause</a></li>
          <li><a href="#cycle-correlation" className="text-[#9A3F06] hover:underline">Correlation Between Menopause and the Menstrual Cycle</a></li>
          <li><a href="#lifestyle" className="text-[#9A3F06] hover:underline">Embracing Lifestyle Changes</a></li>
        </ul>
      </div>

      <section id="overview" className="mt-8">
        <h2 className="text-3xl font-bold text-[#622915]">Introduction to Menopause</h2>
        <p className="mt-2">
          Menopause is a significant and natural phase in a woman's life, representing the end of her reproductive years. It is officially defined as the absence of menstrual periods for 12 consecutive months. This phase typically occurs between the ages of 45 and 55 and is a result of the gradual decline in ovarian function and a decrease in the production of key hormones such as estrogen and progesterone.
        </p>
        <p className="mt-2">
          As women approach menopause, they experience a variety of physiological changes. These include the cessation of menstruation and changes in reproductive hormone levels. While menopause itself is a normal biological process, the transition can be accompanied by various changes in the body. Understanding these changes helps in approaching this phase with confidence and preparing for a smooth transition.
        </p>
        <p className="mt-2">
          For a comprehensive overview and additional details about menopause, you can visit the <a href="https://www.mayoclinic.org/tests-procedures/menopause/about/pac-20328294" className="text-[#9A3F06] hover:underline" target="_blank" rel="noopener noreferrer">Mayo Clinic's guide on Menopause</a>.
        </p>
      </section>

      <section id="cycle-correlation" className="mt-8">
        <h2 className="text-3xl font-bold text-[#622915]">Correlation Between Menopause and the Menstrual Cycle</h2>
        <p className="mt-2">
          Menopause signifies the conclusion of a woman’s menstrual cycles, marking a significant shift in her reproductive life. The transition to menopause, often referred to as perimenopause, involves a gradual change in menstrual patterns as a result of fluctuating hormone levels. During this transitional phase, women may experience irregular menstrual cycles, which can include variations in the length and intensity of periods.
        </p>
        <p className="mt-2">
          The perimenopausal period can last several years before menstruation completely stops. It is characterized by fluctuating levels of estrogen and progesterone, the hormones responsible for regulating the menstrual cycle. As these hormone levels decrease, menstrual cycles become less predictable, with some women experiencing shorter or longer cycles, heavier or lighter bleeding, and occasional skipped periods. Eventually, menstruation ceases altogether, marking the official onset of menopause.
        </p>
        <p className="mt-2">
          For a deeper understanding of the hormonal changes and their impact on the menstrual cycle, you may explore the <a href="https://www.nhs.uk/conditions/menopause/" className="text-[#9A3F06] hover:underline" target="_blank" rel="noopener noreferrer">NHS guide on Menopause</a>.
        </p>
      </section>

      <section id="lifestyle" className="mt-8">
        <h2 className="text-3xl font-bold text-[#622915]">Embracing Lifestyle Changes</h2>
        <p className="mt-2">
          Adopting a healthy lifestyle is crucial for maintaining well-being during menopause. Positive lifestyle changes can help manage the transition more effectively and improve overall quality of life. Here are some strategies to consider:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><strong>Balanced Diet:</strong> Incorporate a variety of nutrient-rich foods into your diet. Focus on fruits, vegetables, whole grains, and lean proteins. Foods high in calcium and vitamin D are especially beneficial for maintaining bone health.</li>
          <li><strong>Regular Exercise:</strong> Engage in regular physical activity, including aerobic exercises, strength training, and flexibility exercises. Exercise helps manage weight, boost mood, and support cardiovascular health.</li>
          <li><strong>Stress Management:</strong> Implement stress-reducing techniques such as mindfulness, meditation, and yoga. Managing stress effectively can improve emotional well-being and overall quality of life.</li>
          <li><strong>Adequate Sleep:</strong> Establish a consistent sleep routine and create a restful sleep environment. Good sleep hygiene supports physical and mental health during menopause.</li>
        </ul>
        <p className="mt-2">
          For more tips on maintaining a healthy lifestyle during menopause, visit the <a href="https://www.cdc.gov/menstrual-cycle/menopause.html" className="text-[#9A3F06] hover:underline" target="_blank" rel="noopener noreferrer">CDC's guide on Menopause and Health</a>.
        </p>
      </section>
    </div>
    <br /> <br />
    <Footer/>
    </>
  );
}

export default MenopausePage;