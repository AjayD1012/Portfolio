import React from "react";
import java from "../../public/images/java-light.svg"
import Github from "../../public/images/github-light.svg";
import HTML from "../../public/images/html-light.svg";
import css from "../../public/images/css-light.svg";
import Javascript from "../../public/images/javascript.svg";
import Tailwind from "../../public/images/tailwindcss-light.svg";
import Bootstrap from "../../public/images/bootstrap-light.svg"
import Reactt from  "../../public/images/react-light.svg"
function Skills() {
  const cardItem = [
    {
      id: 1,
      logo: HTML,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: java,
      name: "Java",
    },
    {
      id: 4,
      logo: Javascript,
      name: "JavaScript",
    },
    {
      id: 5,
      logo: Reactt,
      name: "React",
    },
    {
      id: 6,
      logo: Bootstrap,
      name: "Bootstrap",
    },
    {
      id: 7,
      logo: Tailwind,
      name: "Tailwind",
    },
    {
      id: 8,
      logo: Github,
      name: "Github",
    },
  ];
  return (
    <div
      name="Skills"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Skills</h1>
        <p className="  ">
         I have learned all the below skills and able to work with them.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[1px] border-[#5e0826] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300 "
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;