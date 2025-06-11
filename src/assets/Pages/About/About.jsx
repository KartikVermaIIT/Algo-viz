import React, { useState } from 'react';
import Buttons from "./Buttons";
import styled from "styled-components";
import Project from './Project';
import Me from './Me';

function About() {
  const [about, setAbout] = useState("Me");

  return (
    <div className="flex flex-col w-full max-w-6xl h-auto min-h-screen px-4 py-6 mx-auto gap-6 sm:gap-8 md:py-10">
      <div className="w-full flex flex-col gap-4">
        <Buttons setAbout={setAbout} />
      </div>
      <Blured className="w-full flex flex-col gap-5 rounded-lg items-center justify-center p-4 sm:p-6">
        <div className="w-full">
          {about === "Me" ? <Me /> : <></>}
        </div>
      </Blured>
    </div>
  );
}

export default About;

const Blured = styled.div`
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.18);
  backdrop-filter: blur(100px);
  box-shadow: 0px 0px 30px 20px rgba(255, 168, 0, 0.18);
`;

const Box = styled.div`
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: larger;
  font-weight: 500;
  background-color: ${props => props.bg || "white"};
  border-radius: 10px;

  &:hover {
    background-color: #FFA800;
    color: black;
    cursor: pointer;
  }

  @media (max-width: 675px) {
    width: 10vw;
    height: 10vw;
  }
`;
