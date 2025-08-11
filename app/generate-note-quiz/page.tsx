"use client"
import React, { useState } from 'react';
import axios from 'axios';
import NoteAndQuiz from '@/libs/component/NoteAndQuiz';

interface Quiz {
  question: string;
  options: string[];
  answer: number
}

interface Result {
  notes: string[];
  quizs: Quiz[]
}
const TextProcessingApp = () => {
  const [text, setText] = useState<string>('');
  const [data, setdata] = useState<Result | null >(null)
  const [generatingNQ, setgeneratingNQ] = useState(false)
  const handleGenerate = () => {
    setgeneratingNQ(true)
    axios.post("/api/getnotenquiz",{text: text})
    .then((res)=>setdata(res.data.data))
    .catch((err)=>alert(err))
    .finally(()=>setgeneratingNQ(false))
  };

  return (
    <div
      className="relative flex min-h-screen flex-col bg-white overflow-x-hidden"
      style={{
        fontFamily: 'Inter, "Noto Sans", sans-serif',
        // @ts-expect-error - CSS custom propertie
        "--checkbox-tick-svg": "url('data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27rgb(255,255,255)%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath d=%27M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z%27/%3e%3c/svg%3e')",
        "--radio-dot-svg": "url('data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27rgb(17,20,24)%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3ccircle cx=%278%27 cy=%278%27 r=%273%27/%3e%3c/svg%3e')"
      }}
    >
      <div className="flex flex-col flex-grow">
        <div className="flex flex-1 justify-center px-4 md:px-20 lg:px-40 py-5">
          <div className="flex flex-col flex-1 w-full max-w-[960px]">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#111418] tracking-light text-2xl md:text-3xl lg:text-[32px] font-bold leading-tight min-w-48">
                Notes and Quiz Generation
              </p>
            </div>

            <div className="flex w-full flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col w-full">
                <textarea
                  placeholder="Enter your text here"
                  className="form-input flex w-full resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-none border border-[#dbe0e6] bg-white min-h-36 placeholder:text-[#60758a] p-4 text-base"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </label>
            </div>
            <div className='flex justify-center text-blue-400'>
              <div>{generatingNQ && 'Generating notes and quizes...'}</div>
            </div>
            <div className="flex px-4 py-3 justify-end">
              <button
              disabled={generatingNQ}
                className= {`flex w-full sm:w-auto min-w-[84px] items-center justify-center rounded-lg h-10 px-4  text-white text-sm font-bold ${generatingNQ ? "bg-gray-400" : "bg-[#3d99f5]"}`}
                onClick={handleGenerate}
              >
                <span className="truncate hover:cursor-pointer">Generate</span>
              </button>
            </div>
            {data!==null && <NoteAndQuiz data={data}/>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextProcessingApp;
