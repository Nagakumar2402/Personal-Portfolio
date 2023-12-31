import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen tracking-wide text-gray-300">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="pb-8 pl-4 sm:text-right">
            <p className="inline text-4xl font-bold border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="text-2xl font-bold capitalize md:text-4xl sm:text-right">
            <p>
              Hi. I'm Naga kumar, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p className="mb-3">
              After graduating with a Bachelor of Technology in{" "}
              <span className="font-medium capitalize">
                AutoMobile engineering
              </span>
              , I decided to pursue my passion for programming. I enrolled in a
              coding bootcamp and learned{" "}
              <span className="font-medium">full-stack web development</span>.{" "}
              <span className="italic">My favorite part of programming</span> is
              the problem-solving aspect. I{" "}
              <span className="underline">love</span> the feeling of finally
              figuring out a solution to a problem. My core stack is{" "}
              <span className="font-medium">
                React, Next.js, Node.js, and MongoDB
              </span>
              . I am also familiar with firebase and tailwind. I am always
              looking to learn new technologies. I am currently looking for a{" "}
              <span className="font-medium">full-time position</span> as a
              software developer.
            </p>

            <p>
              <span className="italic">When I'm not coding</span>, I enjoy
              playing video games, watching movies.I also enjoy{" "}
              <span className="font-medium">learning new things</span>. I am
              currently learning about{" "}
              <span className="font-medium">history </span>. I'm also learning
              how to play the chess.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
