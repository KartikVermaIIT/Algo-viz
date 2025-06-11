import React, { useState } from 'react';
import Buttons from "./Buttons";
import styled from "styled-components";
import Project from './Project';
import Me from './Me';

function About() {
  const [about, setAbout] = useState("Me");

  return (
    <div className="flex flex-col w-full max-w-7xl h-auto min-h-screen px-4 sm:px-6 md:px-10 py-6 gap-4 sm:gap-6 mx-auto">
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
  backdrop-filter: blur(80px);
  box-shadow: 0px 0px 30px 10px rgba(255, 168, 0, 0.18);
`;
