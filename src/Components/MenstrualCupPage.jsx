import React from 'react';
import Header from './Header';
import Footer from './Footer';

function MenstrualCupsPage() {
  return (
    <>
    <Header/>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-[#622915] text-center">Why Use Menstrual Cups?</h1>
      <img
        src="/photos/MenstrualCups.png"
        alt="Menstrual Cups"
        className="w-1/2 h-1/2 mt-4 mb-6 rounded-lg shadow-lg"
      />

      <div className="bg-[#F9F9F9] p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-[#622915]">What's in this page?</h2>
        <ul className="list-disc list-inside mt-2">
          <li><a href="#benefits" className="text-[#9A3F06] hover:underline">Benefits of Menstrual Cups</a></li>
          <li><a href="#usage" className="text-[#9A3F06] hover:underline">How to Use a Menstrual Cup</a></li>
          <li><a href="#myths" className="text-[#9A3F06] hover:underline">Common Myths and Facts</a></li>
        </ul>
      </div>

      <section id="benefits" className="mt-8">
        <h2 className="text-3xl font-bold text-[#622915]">Benefits of Menstrual Cups</h2>
        <p className="mt-2">
          Menstrual cups are a sustainable and cost-effective alternative to traditional menstrual products. Here are some key benefits:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><strong>Eco-Friendly:</strong> Made from medical-grade silicone or rubber, menstrual cups are reusable and reduce menstrual product waste, making them an environmentally friendly option.</li>
          <li><strong>Cost-Effective:</strong> While the initial investment is higher, menstrual cups can last up to 10 years with proper care, saving money in the long run compared to disposable products.</li>
          <li><strong>High Capacity:</strong> Menstrual cups can hold more fluid than tampons or pads, making them ideal for extended wear, including overnight use.</li>
          <li><strong>Convenient:</strong> With proper use, menstrual cups can be worn for up to 12 hours, reducing the need for frequent changes and providing peace of mind during activities.</li>
        </ul>
        <p className="mt-2">
          For more insights on the benefits of menstrual cups, visit <a href="https://www.healthline.com/health/menstrual-cup" className="text-[#9A3F06] hover:underline" target="_blank" rel="noopener noreferrer">Healthline’s guide on menstrual cups</a>.
        </p>
      </section>

      <section id="usage" className="mt-8">
        <h2 className="text-3xl font-bold text-[#622915]">How to Use a Menstrual Cup</h2>
        <p className="mt-2">
          Using a menstrual cup involves a few simple steps:
        </p>
        <ol className="list-decimal list-inside mt-2">
          <li><strong>Folding and Insertion:</strong> Fold the cup as instructed (e.g., C-fold or punch-down fold), then insert it into the vagina, positioning it below the cervix. The cup should form a seal against the vaginal walls.</li>
          <li><strong>Removal and Emptying:</strong> To remove, pinch the base of the cup to break the seal and gently pull it out. Empty the contents into the toilet, rinse the cup with water, and reinsert it.</li>
          <li><strong>Cleaning and Sterilizing:</strong> Clean the cup with mild soap and water between uses. At the end of your cycle, sterilize the cup by boiling it in water for a few minutes before storing it in a clean, dry place.</li>
        </ol>
        <p className="mt-2">
          For detailed instructions on using a menstrual cup, visit <a href="https://www.verywellhealth.com/menstrual-cups-4175272" className="text-[#9A3F06] hover:underline" target="_blank" rel="noopener noreferrer">Verywell Health’s guide on menstrual cups</a>.
        </p>
      </section>

      <section id="myths" className="mt-8">
        <h2 className="text-3xl font-bold text-[#622915]">Common Myths and Facts</h2>
        <p className="mt-2">
          Several misconceptions about menstrual cups exist. Here are some common myths and the facts that dispel them:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><strong>Myth: Menstrual Cups Are Hard to Use</strong> - <em>Fact:</em> With practice, most users find menstrual cups easy to use. Following proper instructions and hygiene practices ensures a smooth experience.</li>
          <li><strong>Myth: Menstrual Cups Are Uncomfortable</strong> - <em>Fact:</em> When properly inserted, menstrual cups should be comfortable and barely noticeable. Choosing the right size and position can enhance comfort.</li>
          <li><strong>Myth: Menstrual Cups Can Get Lost Inside You</strong> - <em>Fact:</em> Menstrual cups cannot get lost inside the vagina. They are designed to stay in place and can be removed easily with a gentle tug.</li>
          <li><strong>Myth: Menstrual Cups Are Unsanitary</strong> - <em>Fact:</em> Menstrual cups are made from medical-grade silicone or rubber, which are hygienic and safe for internal use. Regular cleaning and proper handling minimize any risks.</li>
        </ul>
        <p className="mt-2">
          For more information on menstrual cup myths and facts, visit <a href="https://www.verywellhealth.com/menstrual-cup-faqs-4176921" className="text-[#9A3F06] hover:underline" target="_blank" rel="noopener noreferrer">Verywell Health’s FAQ on menstrual cups</a>.
        </p>
      </section>
    </div>
    <br/>
    <Footer/>
    </>
  );
}

export default MenstrualCupsPage;