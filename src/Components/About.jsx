import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, I'm Ajay, a passionate Web developer with a keen eye for Java full 
          Stack . With a background in IT, I strive to create impactful and
          visually stunning Software solutions that leave a lasting impression.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education 
        </h1>
        <span>
        BCS - MGM College of Computer Science & IT, Nanded - 2023 <br />
        12th - Sanskar Junior College, Pathri - 2020
        </span>
        <br />
        <br />
      
        <h1 className="text-green-600 font-semibold text-xl">
          Goal
        </h1>
        <p>
        My short-term goal is to secure a job at the earliest opportunity to support my family and contribute financially. I aim to work alongside seasoned professionals, which will allow me to learn extensively and enhance my skills. This experience will be invaluable in my journey to grow both personally and professionally while taking on the responsibility of ensuring my family's well-being.
        </p>
      </div>
    </div>
  );
}

export default About;