"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";

interface Quiz {
  question: string;
  options: string[];
  answer: number;
}

interface Result {
  notes: string[];
  quizs: Quiz[];
}

interface Props {
  data: Result;
}

const NoteAndQuiz: React.FC<Props> = ({ data }) => {
  const { notes, quizs } = data;

  const { control, watch } = useForm<{ [key: string]: string }>({
    defaultValues: quizs.reduce((acc, quiz, idx) => {
      acc[`quiz-${idx}`] = ""; // default no selection
      return acc;
    }, {} as Record<string, string>),
  });

  const selectedValues = watch();

  return (
    <div>
      {/* Notes Section */}
      <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Notes
      </h2>

      <div className="px-4">
        {notes.map((note, index) => (
          <label
            key={index}
            className="flex gap-x-3 py-3 flex-row"
          >
            <input
              type="checkbox"
              className="h-5 w-5 rounded border-[#dbe0e6] border-2 bg-transparent text-[#3d99f5] checked:bg-[#3d99f5] checked:border-[#3d99f5] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#dbe0e6] focus:outline-none"
            />
            <p className="text-[#111418] text-base font-normal leading-normal">
              {note}
            </p>
          </label>
        ))}
      </div>

      {/* MCQ Section */}
      <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Multiple Choice Questions
      </h2>

      {quizs.map((quiz, idx) => (
        <div key={idx} className="flex flex-col gap-3 p-4">
          <div>Q.{quiz.question} </div>
          {quiz.options.map((option, optionIdx) => {
            const isSelected = watch(`quiz-${idx}`) === option;
            const isCorrect = optionIdx === quiz.answer; // correct answer index
            const isWrongSelection = isSelected && !isCorrect;

            return (
              <label
                key={option}
                className={`flex items-center gap-4 rounded-lg border border-solid p-[15px]
        ${isSelected
                    ? isCorrect
                      ? "border-green-500 bg-green-50" 
                      : "border-red-500 bg-red-50"     
                    : "border-[#dbe0e6]"               
                  }
      `}
              >
                <Controller
                  name={`quiz-${idx}`}
                  control={control}
                  render={({ field }) => (
                    <input
                      type="radio"
                      className="h-5 w-5 border-2 border-[#dbe0e6] bg-transparent text-transparent checked:border-[#111418] checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#111418]"
                      value={option}
                      checked={field.value === option}
                      onChange={() => field.onChange(option)}
                    />
                  )}
                />
                <div className="flex grow flex-col">
                  <p className="text-[#111418] text-sm font-medium leading-normal">{option}</p>
                </div>
              </label>
            );
          })}

          
        </div>
      ))}

      {/* Debug output (optional) */}
      {/* <pre>{JSON.stringify(selectedValues, null, 2)}</pre> */}
    </div>
  );
};

export default NoteAndQuiz;
