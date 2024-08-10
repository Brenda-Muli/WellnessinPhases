import React from 'react';
import Header from './Header';
import Footer from './Footer';

function PeriodMythsPage() {
  return (
    <>
    <Header/>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-[#622915]">10 Myths About Periods</h1>
      <img
        src="/photos/Periodmyths.png"
        alt="Period Myths"
        className="w-1/2 h-1/2 mt-4 mb-6 rounded-lg shadow-lg"
      />

      <div className="bg-[#F9F9F9] p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-[#622915]">What's in this page?</h2>
        <ul className="list-disc list-inside mt-2">
          <li><a href="#myths" className="text-[#9A3F06] hover:underline">Top 10 Myths and Facts</a></li>
        </ul>
      </div>

      <section id="myths" className="mt-8">
        <h2 className="text-3xl font-bold text-[#622915]">Unveiling the Truth: 10 Myths About Periods</h2>
        <p className="mt-2">
          Menstruation is a natural and vital part of the reproductive cycle, yet it is often surrounded by misconceptions and myths. These misunderstandings can perpetuate stigma and misinformation. In this guide, we aim to dispel some of the most common myths about periods and provide accurate, evidence-based information to help you better understand this normal biological process. By debunking these myths, we hope to foster a more informed and supportive environment for all individuals who experience menstruation.
        </p>
        <p className="mt-2">
          Below, we address ten prevalent myths about periods, offering clear explanations and factual information to clarify these common misconceptions.
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><strong>Myth: You Can’t Get Pregnant During Your Period</strong> - <em>Fact:</em> While less likely, it is still possible to conceive during your period. Sperm can live inside the female reproductive tract for up to five days, so if you have a short cycle and ovulate soon after your period, pregnancy is possible.</li>
          <li><strong>Myth: Menstrual Blood is Dirty</strong> - <em>Fact:</em> Menstrual blood is a natural bodily fluid and is not inherently dirty. It’s a mix of blood, mucus, and uterine lining that is expelled from the body and is no different from other bodily fluids.</li>
          <li><strong>Myth: You Should Avoid Exercise During Your Period</strong> - <em>Fact:</em> Exercise can actually help alleviate menstrual cramps and improve mood. Many women find that physical activity during their period can be beneficial for overall well-being.</li>
          <li><strong>Myth: Menstrual Products Are Unhealthy</strong> - <em>Fact:</em> Modern menstrual products, including tampons, pads, and menstrual cups, are designed to be safe and hygienic. Using them as directed minimizes any risk of infection.</li>
          <li><strong>Myth: Periods Should Always Be Regular</strong> - <em>Fact:</em> It’s normal for menstrual cycles to vary from month to month, especially in the years leading up to menopause. Stress, diet, and exercise can affect cycle regularity.</li>
          <li><strong>Myth: You Can’t Swim on Your Period</strong> - <em>Fact:</em> You can swim during your period using tampons or menstrual cups. These products manage menstrual flow effectively, allowing you to engage in swimming and other activities.</li>
          <li><strong>Myth: Menstrual Cramps Are Normal and You Just Have to Deal With Them</strong> - <em>Fact:</em> While some discomfort is common, severe cramps may indicate conditions like endometriosis. Consult a healthcare provider if cramps are severe or debilitating.</li>
          <li><strong>Myth: You Lose a Lot of Blood During Your Period</strong> - <em>Fact:</em> On average, women lose about 30-40 milliliters of blood per period, which is roughly 2-3 tablespoons. This amount is generally not significant and doesn’t usually lead to anemia.</li>
          <li><strong>Myth: You Should Take Birth Control to Regulate Your Period</strong> - <em>Fact:</em> Birth control can help regulate periods for some women, but it’s not necessary for everyone. Period regulation can vary based on individual health needs and preferences.</li>
          <li><strong>Myth: Menstrual Flow Is the Same for Every Woman</strong> - <em>Fact:</em> Menstrual flow varies widely among women. It can range from light to heavy and can be influenced by factors such as hormonal balance, health conditions, and age.</li>
        </ul>
        <p className="mt-4">
          For more information on menstrual health and common misconceptions, visit the <a href="https://www.plannedparenthood.org/learn/health-and-wellness/menstrual-cycle" className="text-[#9A3F06] hover:underline" target="_blank" rel="noopener noreferrer">Planned Parenthood's guide on Menstrual Health</a>.
        </p>
      </section>
    </div>
    <br />
    <Footer/>
    </>
  );
}

export default PeriodMythsPage;