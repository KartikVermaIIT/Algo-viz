import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Me() {
  return (
    <div className="flex flex-col lg:flex-row w-full gap-6 px-4 sm:px-6">
      {/* Avatar & Social Links */}
      <div className="flex flex-col items-center lg:items-start lg:w-1/3 gap-4">
        <img
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 object-cover object-center"
          src="/Kartik.jpeg"
          alt="Kartik Verma"
        />
        <div className="text-white text-center lg:text-left">
          <div className="text-xl sm:text-2xl font-semibold mb-2">Connect with Me</div>
          <div className="flex gap-5 justify-center lg:justify-start">
            <a
              href="https://www.linkedin.com/in/kartik-verma-6643161b2/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-white hover:text-[#0077b5] transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/kartik_verma_2328/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-white hover:text-pink-400 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/KartikVermaIIT"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-white hover:text-gray-300 transition"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="lg:w-2/3 text-white">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#420665] mb-4">
          Diving Deep into Code: Unveiling the World of Kartik Verma
        </h1>
        <p className="text-sm sm:text-base leading-relaxed">
          I'm Kartik Verma, an enthusiastic undergrad at IIT Mandi diving
          headfirst into the realms of Computer Science and Engineering. As
          a full-stack web developer, I merge my love for technology with an
          extensive understanding of Machine Learning and Deep Learning.
          With a firm grip on Data Structures and Algorithms, I thrive on
          exploring and contributing to the world of open source.
        </p>
        <p className="mt-4 text-sm sm:text-base leading-relaxed">
          My journey includes securing a globally under 40 rank in the NASA Space Apps Challenge 2024, 
          competing against more than 1500 teams, and being one of the three teams selected in India, where we developed a 
          system for greenhouse gas emission mapping, contributing to
          the frontend development of innovative solutions addressing
          complex problem statements.
        </p>
      </div>
    </div>
  );
}

export default Me;
