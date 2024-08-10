import React from 'react';
import Header from './Header';
import Footer from './Footer';

function EndometriosisPage() {
  return (
    <>
    <Header/>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-[#622915]">What is Endometriosis?</h1>
      <img
        src="/photos/endometriosis.png"
        alt="Endometriosis"
        className="max-w-md h-1/2 mt-4 mb-6 rounded-lg shadow-lg"
      />

      <div className="bg-[#F9F9F9] p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-[#622915]">What's in this page?</h2>
        <ul className="list-disc list-inside mt-2">
          <li><a href="#overview" className="text-[#9A3F06] hover:underline">Understanding Endometriosis</a></li>
          <li><a href="#symptoms" className="text-[#9A3F06] hover:underline">Recognizing the Symptoms</a></li>
          <li><a href="#treatment" className="text-[#9A3F06] hover:underline">Treatment and Management</a></li>
        </ul>
      </div>

      <section id="overview" className="mt-8">
        <h2 className="text-3xl font-bold text-[#622915]">Understanding Endometriosis</h2>
        <p className="mt-2">
          Endometriosis is a chronic condition where tissue similar to the lining of the uterus (endometrium) grows outside the uterus. This tissue can be found on the ovaries, fallopian tubes, and other organs within the pelvis. During the menstrual cycle, this tissue responds to hormonal changes just like the endometrial lining inside the uterus, causing inflammation and pain when it cannot be shed properly.
        </p>
        <p className="mt-2">
          The exact cause of endometriosis is not fully understood, but it is believed to involve a combination of genetic, hormonal, and immune system factors. Endometriosis can impact a woman’s quality of life and fertility, making early diagnosis and management crucial.
        </p>
        <p className="mt-2">
          For more information on endometriosis, visit the <a href="https://www.endometriosis.org/what-is-endometriosis/" className="text-[#9A3F06] hover:underline" target="_blank" rel="noopener noreferrer">Endometriosis Foundation of America's overview</a>.
        </p>
      </section>

      <section id="symptoms" className="mt-8">
        <h2 className="text-3xl font-bold text-[#622915]">Recognizing the Symptoms</h2>
        <p className="mt-2">
          Symptoms of endometriosis can vary but commonly include:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Pelvic pain, often associated with menstrual periods</li>
          <li>Heavy menstrual bleeding or bleeding between periods</li>
          <li>Pain during intercourse</li>
          <li>Pain with bowel movements or urination, especially during menstrual periods</li>
          <li>Infertility</li>
        </ul>
        <p className="mt-2">
          If you experience any of these symptoms, it’s important to consult with a healthcare provider for proper evaluation and diagnosis. For further details, check out the <a href="https://www.mayoclinic.org/diseases-conditions/endometriosis/symptoms-causes/syc-20356695" className="text-[#9A3F06] hover:underline" target="_blank" rel="noopener noreferrer">Mayo Clinic’s guide on Endometriosis Symptoms</a>.
        </p>
      </section>

      <section id="treatment" className="mt-8">
        <h2 className="text-3xl font-bold text-[#622915]">Treatment and Management</h2>
        <p className="mt-2">
          Treatment for endometriosis aims to alleviate symptoms and improve quality of life. Common approaches include:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><strong>Medication:</strong> Pain relief and hormonal therapies can help manage symptoms. These include nonsteroidal anti-inflammatory drugs (NSAIDs) and hormonal treatments to reduce or eliminate menstruation.</li>
          <li><strong>Hormone Therapy:</strong> Hormonal treatments can help reduce or eliminate menstrual flow, which can lessen endometriosis-related pain.</li>
          <li><strong>Surgery:</strong> In cases where medication is not effective, surgical options may be considered to remove endometrial tissue while preserving the reproductive organs.</li>
          <li><strong>Lifestyle Changes:</strong> Diet and exercise may also play a role in managing symptoms. Maintaining a healthy lifestyle can support overall well-being.</li>
        </ul>
        <p className="mt-2">
          For comprehensive information on treatment options, visit the <a href="https://www.nichd.nih.gov/health/topics/endometriosis/conditioninfo/treatment" className="text-[#9A3F06] hover:underline" target="_blank" rel="noopener noreferrer">National Institute of Child Health and Human Development’s treatment guide</a>.
        </p>
      </section>
    </div>
    <br/>
    <Footer/>
    </>
  );
}

export default EndometriosisPage;