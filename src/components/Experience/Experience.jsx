// import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { BiCaretRight } from "react-icons/bi";
import { MdWorkOutline } from "react-icons/md";
import { Context } from "../../Context/ModalContext";

// ------> Css
import "./experience.css";

function Experience() {
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);

  // ------> Context
  const ctx = useContext(Context);
  const { show } = ctx;

  const handleClick1 = () => {
    setActive1(true);
    setActive2(false);
    setActive3(false);
  };
  const handleClick2 = () => {
    setActive1(false);
    setActive2(true);
    setActive3(false);
  };
  const handleClick3 = () => {
    setActive1(false);
    setActive2(false);
    setActive3(true);
  };

  return (
    <section id="experience" className="pt-[80px] sm:pt-[120px]">
      <div className="container">
        <h2 className="flex items-center justify-center text-xl sm:text-2xl text-white">
          <span className="inline-block w-14 sm:w-40 h-[1px] bg-[rgba(100,255,218,0.1)] rounded-full mr-5"></span>{" "}
          Experience{" "}
          <span className="inline-block ml-2">
            <MdWorkOutline className="text-lg sm:text-xl" />
          </span>
          <span className="inline-block w-14 sm:w-40 h-[1px] bg-[rgba(100,255,218,0.1)] rounded-full ml-5"></span>
        </h2>
        <div className="max-w-[800px] mx-auto">
          <div className="mt-8 sm:mt-12">
            <div className="flex flex-col sm:flex-row items-start">
              <div className="w-[70%] sm:w-[25%]">
                <button
                  className={`${
                    active1 ? "text-[#64ffda] active bg-[#971d3b]" : ""
                  } ${
                    show ? "!-z-10" : "z-0"
                  } track relative z- 20 text-sm text-white w-full text-start pl-4 py-[10px] duration-300 hover:bg-[#971d3b] rounded-r-md`}
                  onClick={handleClick1}
                >
                  VistaWave
                </button>
                <button
                  className={`${
                    active2 ? "text-[#64ffda] active bg-[#971d3b]" : ""
                  } ${
                    show ? "!-z-10" : "z-0"
                  } track relative z- 20 text-sm text-white w-full text-start pl-4 py-[10px] duration-300 hover:bg-[#971d3b] rounded-r-md`}
                  onClick={handleClick2}
                >
                  SATashkent
                </button>
                <button
                  className={`${
                    active3 ? "text-[#64ffda] active bg-[#971d3b]" : ""
                  } ${
                    show ? "!-z-10" : "z-0"
                  } track relative z- 20 text-sm text-white w-full text-start pl-4 py-[10px] duration-300 hover:bg-[#971d3b] rounded-r-md`}
                  onClick={handleClick3}
                >
                  RoboticsLab
                </button>
              </div>
              <div className="w-[100%] sm:w-[75%] sm:ml-10 mt-8 sm:mt-0">
                {active1 ? (
                  <>
                    <h2 className="text-xl text-[#64ffda] font-medium">
                      <span className="inline-block text-white">
                        Backend Developer at
                      </span>{" "}
                      VistaWave
                    </h2>
                    <strong className="inline-block font-normal text-sm text-white tracking-wide">
                      Yanuary 2024 - Present
                    </strong>
                    <ul className="space-y-3 mt-6">
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#64ffda] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-white">
                          - Learned how to work with a team <br />- Learned
                          working collaboratively in github
                        </span>
                      </li>
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#64ffda] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-white">
                          - Build dynamic, responsive websites designed to
                          engage users and drive business growth.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#64ffda] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-white">
                          - Been working with senior developers who teach me
                          write clean and understandable code so that next
                          person, who is going to take the responsibility to
                          process, can read my code easily
                        </span>
                      </li>
                    </ul>
                  </>
                ) : (
                  ""
                )}
                {active2 ? (
                  <>
                    <h2 className="text-xl text-[#64ffda] font-medium">
                      <span className="inline-block text-white">
                        SAT Mentor (Math) at
                      </span>{" "}
                      SATashkent
                    </h2>
                    <strong className="inline-block font-normal text-sm text-white tracking-wide">
                      January 2024 - Present
                    </strong>
                    <ul className="space-y-3 mt-6">
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#64ffda] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-white">
                          - Problem-solving strategies and critical thinking{" "}
                          <br />- Encourages students to approach problems
                          systematically and break them down into smaller steps.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#64ffda] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-white">
                          - Foundational math concepts.
                          <br />- Reinforces essential topics like algebra,
                          geometry, and data analysis through practice and
                          explanations.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#64ffda] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-white">
                          - Time management and test-taking strategies. <br />-
                          Teaches students effective techniques for pacing
                          themselves during the SAT and managing their time
                          efficiently.
                        </span>
                      </li>
                    </ul>
                  </>
                ) : (
                  ""
                )}
                {active3 ? (
                  <>
                    <h2 className="text-xl text-[#64ffda] font-medium">
                      <span className="inline-block text-white">
                        Robotics Engineer at
                      </span>{" "}
                      RoboticsLab
                    </h2>
                    <strong className="inline-block font-normal text-sm text-white tracking-wide">
                      July 2023 - August 2023
                    </strong>
                    <ul className="space-y-3 mt-6">
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#64ffda] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-white">
                          - During my time at Robotics Lab, I had the unique
                          opportunity to work in the Robotics Lab, where I
                          expanded my skill set and discovered a passion for
                          robotics. This role provided me with diverse learning
                          experiences and professional growth.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#64ffda] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-white">
                          - Exploring Frontend Libraries and Robotics: In the
                          Robotics Lab, I delved into various frontend
                          development libraries, broadening my technical
                          knowledge. This experience also sparked my passion for
                          robotics, leading me to learn C, C++, Python, and ROS
                          alongside my frontend development duties.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <BiCaretRight className="w-4 h-4 text-[#64ffda] mt-1 mr-2" />
                        <span className="inline-block max-w-[500px] w-full text-white">
                          - Version Control and Collaboration on GitHub: I
                          learned how to work effectively with a team using
                          GitHub. This included managing branches, conducting
                          code reviews, and ensuring smooth integration of code
                          changes, which are crucial for collaborative
                          development.
                        </span>
                      </li>
                    </ul>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
