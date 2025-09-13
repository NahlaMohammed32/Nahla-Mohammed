import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/Nahla.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
        
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Nahla Mohammed
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#edeb85ff] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'Frontend Developer',
                'Full Stack .NET Developer',
                'React & Angular Developer',
                'Web Developer'
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#edeb85ff]">{cursor}</span>
              )}
            />
          </h3>
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a Full Stack .NET developer with hands-on experience in building and maintaining web applications. 
            Skilled in both front-end and back-end development, I work with technologies like C#, ASP.NET Core, 
            Entity Framework, SQL Server, React, Angular, JavaScript, TypeScript, HTML, and CSS. 
            I focus on creating responsive, user-friendly interfaces and reliable backend systems that deliver 
            efficient and scalable solutions.
          </p>
          <a
            href="https://drive.google.com/drive/folders/1OGVunFc5y370s5MtoaPYHEifNJylOYEu?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #edeb85ff, hsla(58, 13%, 53%, 1.00))',
              boxShadow: '0 0 2px #c9c779, 0 0 2px #d4d27c, 0 0 40px #edeb85ff',
            }}
          >
            DOWNLOAD CV
          </a>
          
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-[#edeb85ff] rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Nahla Mohammed"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(237,235,133,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;