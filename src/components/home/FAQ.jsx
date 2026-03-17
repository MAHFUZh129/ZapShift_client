import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { GoArrowUpRight } from "react-icons/go";

const faqs = [
  {
    question: "How does this posture corrector work?",
    answer:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
  },
  {
    question: "Is it suitable for all ages and body types?",
    answer: "Yes, it is designed to fit most body types comfortably.",
  },
  {
    question: "Does it really help with back pain and posture improvement?",
    answer: "Regular use can help improve posture and reduce discomfort.",
  },
  {
    question: "Does it have smart features like vibration alerts?",
    answer: "Some models include smart vibration alerts for posture correction.",
  },
  {
    question: "How will I be notified when the product is back in stock?",
    answer: "You will receive an email notification when it's available.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-gray-100 max-w-3xl mx-auto py-16 px-4">
      <div className=" text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-secondary">
          Frequently Asked Question (FAQ)
        </h2>
        <p className="text-gray-500 mt-2 text-sm">
          Enhance posture, mobility, and well-being effortlessly.Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce   pain, and strengthen your body with ease!
        </p>
      </div>

      <div className="space-y-3 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`rounded-xl border ${
              openIndex === index
                ? "border-teal-400 bg-teal-50"
                : "bg-white"
            }`}
          >
            {/* Question */}
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="w-full flex justify-between items-center p-4 text-left"
            >
              <span className="font-medium text-gray-700">
                {faq.question}
              </span>

              <ChevronDown
                className={`transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Answer */}
            {openIndex === index && (
              <div className="px-4 pb-4 text-sm text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-10">
        <button className="bg-primary text-black px-6 py-2 rounded-xl flex items-center gap-2 shadow hover:bg-primary transition">
          See More FAQ's
          
        </button>
        <button className="btn btn-circle bg-black "><GoArrowUpRight  className='text-primary stroke-1' size={22} /></button>
      </div>
    </section>
  );
};

export default FAQ;