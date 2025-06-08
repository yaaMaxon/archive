"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { frequantlyQuestions } from "@/app/constants/FrequantlyQuestionsSettings";
import QuestionIcon from "@assets/icons/plus.svg";

const QuestionBox = () => {
  const [isAnswerVisible, setIsAnswerVisible] = useState<{
    [key: number]: boolean;
  }>({});

  const handleIsAnswerVisible = (index: number) => {
    setIsAnswerVisible((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  return (
    <div className="flex flex-col gap-8 lg:gap-32 lg:flex-row lg:justify-center px-6 lg:px-16 pt-[56px] lg:pt-[96px] lg:relative">
      <div className="pb-2 border-b border-b-[#E8EDED] min-w-[314px] max-h-8 lg:sticky lg:top-24">
        <span className="text-[#0C1E21] uppercase">Цікаво знати</span>
      </div>
      <div className="flex-1/2 flex-col lg:max-w-[850px]">
        <h2 className="text-[32px] lg:text-[48px] text-[#0C1E21] leading-[100%]">
          Знайди відповідь тут
        </h2>
        <ul className="flex gap-6 flex-col lg:gap-[32px] pt-[32px] lg:pt-[64px]">
          {frequantlyQuestions.map(({ question, answer }, index) => {
            const isOpen = isAnswerVisible[index];

            return (
              <li
                key={index}
                onClick={() => handleIsAnswerVisible(index)}
                className="cursor-pointer"
              >
                <div className="pb-[32px] border-b border-b-[#E8EDED]">
                  <div className="flex gap-4 md:justify-between items-center">
                    <span className="text-[#0C1E21] text-xl lg:text-2xl">
                      {question}
                    </span>
                    <button type="button" className="cursor-pointer">
                      <div className="rounded-full border border-[#E8EDED] bg-[#F4F8F8] p-2 flex items-center justify-center">
                        <motion.div
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <QuestionIcon className="w-[16px] h-[16px]" />
                        </motion.div>
                      </div>
                    </button>
                  </div>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.p
                        key="answer"
                        initial={{ opacity: 0, maxHeight: 0 }}
                        animate={{ opacity: 1, maxHeight: 500 }}
                        exit={{ opacity: 0, maxHeight: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="text-[rgba(6,39,44,0.6)] pt-4 lg:pt-2 overflow-hidden"
                      >
                        {answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default QuestionBox;
