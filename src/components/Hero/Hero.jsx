import React, { useEffect } from "react";
import { BsTelephoneOutbound } from "react-icons/bs";
import AOS from "aos";

// ------> Images
import Space from "../../Assets/Images/spaceman.png";

// ------> Css
import "./hero.css";

function Hero() {
  // ------> Use aos animation library
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="home" className="mt-12 sm:mt-[70px] pt-[100px] sm:pt-[130px]">
      <div className="container flex flex-wrap justify-center lg:flex lg:items-center lg:justify-between">
        <div className="max-w-[500px] text-center lg:text-start space-y-5">
          <div data-aos="fade-up" data-aos-duration="600" className="flex">
            <h2 className="flex mx-auto lg:mx-0 items-end font-semibold text-4xl sm:text-5xl text-white tracking-normal">
              Hey, I'm
              <ul id="enthusiasm" className="list flex items-center m-0 p-0">
                <li id="N" className="item">
                  S
                </li>
                <li id="O" className="item">
                  h
                </li>
                <li id="D" className="item">
                  a
                </li>
                <li id="I" className="item">
                  v
                </li>
                <li id="R" className="item">
                  k
                </li>
                <li id="B" className="item">
                  a
                </li>
                <li id="E" className="item">
                  t
                </li>
                <li id="DOT" className="item">
                  .
                </li>
              </ul>
            </h2>
          </div>
          <p
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="100"
            className="text-white text-base"
          >
            A passionate individual with a deep fascination for space and
            robotics. From a young age, their curiosity about the universe has
            driven them to explore the mysteries of distant galaxies, stars, and
            planets. This passion has only grown stronger over time, leading
            them to dream of contributing to space exploration.
          </p>
          <a
            href="tel:+998997740510"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="150"
            className="flex items-center mx-auto lg:mx-0 w-fit text-sm border border-white text-white rounded-[4px] hover:bg-[rgb(104,25,25)] py-2 px-4 duration-200 !mt-10 group"
          >
            Contact Me <BsTelephoneOutbound className="ml-2 text-white" />
          </a>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="250"
          className="relative sm:ml-5 mt-14 lg:mt-0"
        >
          <img
            className="max-w-[300px] sm:max-w-[420px] w-full h-[300px] sm:h-[520px] z-50"
            src={Space}
            alt="front-img"
          />
          <span className="absolute w-[250px] sm:w-[350px] h-[20px] sm:h-[50px] rounded-full bg-[#290606] blur-2xl sm:blur-[30px] -right-[10px] sm:-right-[0px] bottom-[10px] -z-10"></span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
