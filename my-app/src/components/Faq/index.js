import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from "react-icons/fa";

const FAQ = () => {
  const [faqItems, setFaqItems] = useState([
    {
      id: 1,
      question: "What is e-Hospital?",
      answer:
        "e-Hospital is a platform providing online consultations, lab test bookings, and digital medical records for patients.",
      isExpanded: false,
    },
    {
      id: 2,
      question: "How can I book a lab test?",
      answer:
        "You can book a lab test by visiting the 'Lab Tests' section, selecting your desired test, and scheduling an appointment.",
      isExpanded: false,
    },
    {
      id: 3,
      question: "What payment methods are accepted?",
      answer:
        "We accept payments through credit/debit cards, net banking, UPI, and popular digital wallets.",
      isExpanded: false,
    },
    {
      id: 4,
      question: "Are online consultations secure?",
      answer:
        "Yes, we prioritize your privacy and use end-to-end encryption for all online consultations.",
      isExpanded: false,
    },
    {
      id: 5,
      question: "Can I cancel or reschedule an appointment?",
      answer:
        "Yes, you can cancel or reschedule an appointment up to 24 hours before the scheduled time.",
      isExpanded: false,
    },
  ]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const toggleExpand = (id) => {
    setFaqItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isExpanded: !item.isExpanded } : item
      )
    );
  };

  return (
    <div
      className="bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen py-12"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center mb-10">
          <FaQuestionCircle className="text-blue-600 text-5xl mr-4" />
          <h1 className="text-4xl font-extrabold text-blue-600">
            Frequently Asked Questions (FAQ)
          </h1>
        </div>
        <div className="space-y-6">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg p-6 border border-gray-200 transition-transform transform hover:scale-105"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleExpand(item.id)}
              >
                <div className="flex items-center">
                  <FaQuestionCircle className="text-blue-500 mr-2" />
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.question}
                  </h2>
                </div>
                <div className="text-blue-500">
                  {item.isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>
              {item.isExpanded && (
                <p className="mt-4 text-gray-600">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
