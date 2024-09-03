import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

// ------> Images
import Me from "../../Assets/Images/me.png";

function Footer() {
  return (
    <footer className="mt-[80px] sm:mt-[120px]">
      <div className="container mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:[#800020] lg:my-8" />
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <img
              className="h-[40px] md:h-[70px] w-[55px] md:w-[100px] z-50"
              src={Me}
              alt="front-img"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                Academic skills
              </h2>
              <ul className="text-white dark:text-white font-medium space-y-2">
                <li data-aos="fade-up" data-aos-duration="600">
                  <p>Calculus 1, 2</p>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="50"
                >
                  <p>Physics</p>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="100"
                >
                  <p>Linear Algebra</p>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="100"
                >
                  <p>OOP</p>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="100"
                >
                  <p>English & Russion</p>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                Passion projects
              </h2>
              <ul className="text-white dark:text-white space-y-2">
                <li data-aos="fade-up" data-aos-duration="600">
                  <a
                    href="/"
                    className="hover:underline"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Spacemen
                  </a>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="50"
                >
                  <a
                    href="https://www.vistawaves.uz/"
                    className="hover:underline"
                    rel="noreferrer"
                    target="_blank"
                  >
                    VistaWave
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-white dark:text-white space-y-2">
                <li data-aos="fade-up" data-aos-duration="600">
                  <a href="/" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="50"
                >
                  <a href="/" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <hr className=" border-gray-200 sm:mx-auto dark:border-gray-700 " /> */}
        <div className="sm:flex sm:items-center sm:justify-between sm:flex-row-reverse mt-10 md:mt-6">
          <ul className="flex items-center space-x-4 ">
            <li>
              <a
                href="https://www.linkedin.com/in/shavkat-sadulloyev-5262a6280/"
                target="_blank"
                rel="noreferrer"
              >
                <CiLinkedin className="text-white w-7 h-7" />
              </a>
            </li>
            <li>
              <a href="https://t.me/shavkat_s777" target="_blank" rel="noreferrer">
                <FaTelegramPlane className="text-white w-7 h-7" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.instagram.com/_moon737/"
                rel="noreferrer"
              >
                <FaInstagram className="text-white w-7 h-7" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/shavkat7"
              >
                <FaGithub className="text-white w-7 h-7" rel="noreferrer" />
              </a>
            </li>
          </ul>
          <span className="inline-block text-sm text-white dark:text-white my-5">
            © 2022 . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
