"use client"
import React from 'react'
import { useState } from 'react';

const NoteAndQuiz = () => {
      const [notes, setNotes] = useState([
    "Key concept 1: Summary of the first important point.",
    "Key concept 2: Explanation of the second key idea.",
    "Key concept 3: Details about the third significant aspect."
  ]);
  
  const [questions, setQuestions] = useState([
    {
      id: "2f7963b3-72ab-4f10-a28c-e2ba580c179a",
      options: ["Option A", "Option B", "Option C", "Option D"],
      selected: "Option A"
    },
    {
      id: "770bba84-c3a3-44e7-8217-08f8f91f301c",
      options: ["Option A", "Option B", "Option C", "Option D"],
      selected: "Option A"
    },
    {
      id: "303e6eea-bde8-4c7c-a661-7abc83b4aa3b",
      options: ["Option A", "Option B", "Option C", "Option D"],
      selected: "Option A"
    }
  ]);
    const handleOptionSelect = (questionId: string, option: string) => {
    setQuestions(questions.map(q => 
      q.id === questionId ? {...q, selected: option} : q
    ));
  };
  return (
    <div>
      <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Notes
            </h2>
            
            <div className="px-4">
              {notes.map((note, index) => (
                <label key={index} className="flex gap-x-3 py-3 flex-row">
                  <input
                    type="checkbox"
                    className="h-5 w-5 rounded border-[#dbe0e6] border-2 bg-transparent text-[#3d99f5] checked:bg-[#3d99f5] checked:border-[#3d99f5] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#dbe0e6] focus:outline-none"
                  />
                  <p className="text-[#111418] text-base font-normal leading-normal">{note}</p>
                </label>
              ))}
            </div>
            
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Multiple Choice Questions
            </h2>
            
            {questions.map((question) => (
              <div key={question.id} className="flex flex-col gap-3 p-4">
                {question.options.map((option) => (
                  <label key={option} className="flex items-center gap-4 rounded-lg border border-solid border-[#dbe0e6] p-[15px]">
                    <input
                      type="radio"
                      className="h-5 w-5 border-2 border-[#dbe0e6] bg-transparent text-transparent checked:border-[#111418] checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#111418]"
                      name={question.id}
                      checked={question.selected === option}
                      onChange={() => handleOptionSelect(question.id, option)}
                    />
                    <div className="flex grow flex-col">
                      <p className="text-[#111418] text-sm font-medium leading-normal">{option}</p>
                    </div>
                  </label>
                ))}
              </div>
            ))}
    </div>
  )
}

export default NoteAndQuiz
