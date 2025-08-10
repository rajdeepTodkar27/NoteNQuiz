"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
const App = () => {
  const router = useRouter()
  const handleOnclick = ()=>{
    router.push("/generate-note-quiz")
  }
  return (
    <div
      className="relative flex min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Lexend, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        

        <div className="px-6 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-full max-w-[960px] flex-1">
            <div className="@container">
              <div className="flex flex-col gap-6 px-4 py-10 sm:gap-8 lg:flex-row">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg sm:h-auto sm:min-w-[300px] md:min-w-[400px] lg:w-full"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAB-KuzwmI0MqkYkarsBcjgu5wtsIbPYK8DObDEHQYwGAhKI0AO77yKT38ao2Lx_eNJvWB-sxicQx724nN7gsMD9nk0z3buYbdkm8fSraPlXi2TKJFJzf1x53kjdTqHBMupZ_srPq4YYU-gJ1s7-_hsfqTDI8tdO5llSbYKto03pVZt-8YmgBGhJpnWzZ_ybSentMSofjChBoe2toPVrByb2xvBiOP8oFasZFQqZrTjX32--F4AfNgoqRxslntysIA_uQLDA9RU4IY")',
                  }}
                ></div>
                <div className="flex flex-col gap-6 sm:min-w-[300px] md:min-w-[400px] sm:gap-8 lg:justify-center">
                  <div className="flex flex-col gap-2 text-left">
                    <h1 className="text-[#111418] text-3xl sm:text-4xl font-black leading-tight tracking-[-0.033em] sm:font-black sm:leading-tight sm:tracking-[-0.033em]">
                      Transform your text into smart notes and quizzes.
                    </h1>
                    <h2 className="text-[#111418] text-sm sm:text-base font-normal leading-normal">
                      NoteQuiz helps you study more efficiently by automatically generating notes and quizzes from your long texts. Quickly assess your knowledge and improve your
                      understanding with our intuitive platform.
                    </h2>
                  </div>
                  <button onClick={handleOnclick} className="flex min-w-[84px] max-w-full sm:max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 sm:h-12 sm:px-5 bg-[#3d99f5] text-white text-sm font-bold leading-normal tracking-[0.015em] sm:text-base sm:font-bold sm:leading-normal sm:tracking-[0.015em]">
                    <span className="truncate">Get Started</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-10 px-4 py-10 @container">
              <div className="flex flex-col gap-4">
                <h1 className="text-[#111418] tracking-light text-2xl sm:text-[32px] font-bold leading-tight sm:leading-tight sm:tracking-[-0.033em] max-w-[720px]">
                  Key Features
                </h1>
                <p className="text-[#111418] text-base font-normal leading-normal max-w-[720px]">
                  Explore the powerful features of NoteQuiz designed to enhance your learning experience.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 p-0">
                {[
                  {
                    title: 'Text Input',
                    desc: 'Easily input your paragraphs or long texts into the application.',
                    icon: (
                      <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z" />
                    ),
                  },
                  {
                    title: 'Automated Note Generation',
                    desc: 'Our system automatically generates concise and informative notes from your text.',
                    icon: (
                      <path d="M88,96a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,96Zm8,40h64a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16Zm32,16H96a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16ZM224,48V156.69A15.86,15.86,0,0,1,219.31,168L168,219.31A15.86,15.86,0,0,1,156.69,224H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM48,208H152V160a8,8,0,0,1,8-8h48V48H48Zm120-40v28.7L196.69,168Z" />
                    ),
                  },
                  {
                    title: 'Interactive Quizzes',
                    desc: 'Engage with interactive quizzes created from your notes to test your knowledge.',
                    icon: (
                      <path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" />
                    ),
                  },
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 flex-col"
                  >
                    <div className="text-[#111418]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        {feature.icon}
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h2 className="text-[#111418] text-base font-bold leading-tight">
                        {feature.title}
                      </h2>
                      <p className="text-[#60758a] text-sm font-normal leading-normal">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
