import React from "react";
import img1 from"../../public/images/yummytummyProject.jpg"
import img2 from "../../public/images/dictionary.jpg"
import img3 from "../../public/images/calculator.jpg"

function Projects() {
 
  return (
    <div name="Projects" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
    <div className="">
      <h1 className="text-3xl font-bold mb-5">Project Work</h1>
      <span className="underline font-semibold">Featured Projects</span>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-5 ">
        {/**/}
  
        <div className="rounded-lg shadow-lg p-1 cursor-pointer hover:scale-105 duration-300 border-[2px] border-[#5e0826]">
          <img src={img1} className="w-full h-[320px] p-1 border-2" alt="Project Image" />
          <div>
            <div className="px-2 font-bold text-xl mb-2">Yummy Tummy</div>
            <p className="px-2 text-gray-700">
            Yummy Tummy!! a responsive restaurant website using React, JavaScript, and Tailwind CSS. The website features multiple sections, ensuring a seamless user experience across devices. It showcases the restaurant's offerings with an intuitive and visually appealing design.
            </p>
          </div>
          <div className="px-6 py-4 space-x-3 justify-center mb-0 mt-4">
            <button className="bg-[#5e0826] hover:bg-[#5e0100] text-white font-bold px-4 py-2 rounded" >
              <a href="https://ajayd1012.github.io/Yummy-Tummy/"> Live Demo</a>
             
            </button>
         
          </div>
        </div>
  
        <div className="rounded-lg shadow-lg p-1 cursor-pointer hover:scale-105 duration-300 border-[2px] border-[#5e0826]">
          <img src={img2} className="w-full h-[320px] p-1 border-2" alt="Project Image" />
          <div>
            <div className="px-2 font-bold text-xl mb-2">Dictionary</div>
            <p className="px-2 text-gray-700">
            
 developed a dictionary project using HTML, CSS, and JavaScript, incorporating an API to fetch word meanings. The application provides users with quick and accurate definitions for any searched word. Its clean interface ensures an easy and efficient user experience.
            </p>
          </div>
          <div className="px-6 py-4 space-x-3 justify-center mb-0 mt-4">
            <button className="bg-[#5e0826] hover:bg-[#5e0100] text-white font-bold px-4 py-2 rounded">
             <a href="https://ajayd1012.github.io/Project-dictionary/">Live Demo</a>
            </button>
         
          </div>
        </div>
  
        <div className="rounded-lg shadow-lg p-1 cursor-pointer hover:scale-105 duration-300 border-[2px] border-[#5e0826]">
          <img src={img3} className="w-full h-[320px] p-1 border-2" alt="Project Image" />
          <div>
            <div className="px-2 font-bold text-xl mb-2">Calculator</div>
            <p className="px-2 text-gray-700 ">
            calculator project is a web-based application developed using HTML, CSS, and JavaScript. It performs basic arithmetic operations and provides a user-friendly interface for quick and easy calculations.

            </p>
          </div>
          <div className="px-6 py-4 space-x-3 justify-center mb-0 mt-4">
            <button className="bg-[#5e0826] hover:bg-[#5e0100] text-white font-bold px-4 py-2 rounded">
            <a href="https://ajayd1012.github.io/Project-calculator/">Live Demo</a>
            </button>
         
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default PortFolio;