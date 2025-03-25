import { useState } from "react";

export default function QuestionsComp() {
  const questions = [
    {
      id: 1,
      question: "How often should I exercise?",
      answer:
        "👉 The ideal exercise frequency depends on your goals, fitness level, and lifestyle. For most people, 3 to 5 tailored sessions per week strike the perfect balance between progress and recovery. However, to achieve faster and more sustainable results, a personalized training plan is essential. Together, we’ll create a routine that fits your schedule and maximizes your potential. Ready to take the first step toward a healthier, stronger you? Let’s get started!",
    },
    {
      id: 2,
      question: "What should I eat before a workout?",
      answer:
        "👉 Pre-workout nutrition is essential to maximize your performance. A balanced mix of complex carbohydrates and lean proteins provides the energy you need and supports muscle recovery. However, every body is different, and what works for one person might not work for another. With my personalized guidance, we'll design a nutrition plan tailored to your goals and lifestyle, ensuring every workout is more effective. Let me help you reach your best version!",
    },
    {
      id: 3,
      question: "What’s the best workout routine for weight loss?",
      answer:
        "👉 The best workout routine for weight loss combines strength training with strategic cardio sessions, tailored to your fitness level and metabolism. There is no one-size-fits-all solution, which is why I create customized plans that not only burn fat but also build a stronger, healthier body. If you want real, lasting results, let’s work together to design the perfect plan for you. Start today and transform your body!",
    },
    {
      id: 4,
      question: "How can I build muscle effectively?",
      answer:
        "👉 Building muscle effectively requires a smart training plan, proper nutrition, and adequate rest. The key is a well-structured program that challenges your muscles progressively while keeping you motivated and injury-free. If you want to accelerate your progress and avoid common mistakes, I can create a personalized plan tailored to your body and goals. Invest in yourself, and let's start your journey to a stronger physique!",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleAnswer = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div
      data-aos="fade-up"
      id="question"
      className="flex flex-col items-center pt-30 px-2"
    >
      <div className="xs:w-[320px] lg:w-[889px]">
        {/* container h2 & p */}
        <div className="pb-10">
          <h2 className="font-[anton] xs:text-[30px] lg:text-[60px] text-center">
            Commonly Asked Questions
          </h2>
          <p className="font-[outfit] text-[#909090] xs:text-[20px] lg:text-[32px] text-center">
            I am here to help!
          </p>
        </div>
        {/* /Preguntas/ */}
        <div>
          {questions.map((item, index) => (
            <div key={item.id} className="pb-4 border-b-1 border-[#525050]">
              <div
                onClick={() => toggleAnswer(index)}
                className="flex justify-between cursor-pointer pb-2"
              >
                <h4 className="font-[anton] text-[24px]">{item.question}</h4>
                <h3 className="text-[#FF2332] text-[30px]">
                  {openIndex === index ? "-" : "+"}
                </h3>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index
                    ? "max-h-80 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-[#909090] pt-4">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
