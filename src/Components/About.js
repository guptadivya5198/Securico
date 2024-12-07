import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const About = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true); // Show the video player
  };

  const handleClose = () => {
    setIsPlaying(false); // Hide the video player
  };
  return (
    // main div of page
    <div className="w-[1535px] h-[480px] bg-yellow-100 flex mx-auto gap-0">
      <div className="w-[750px] h-full mx-auto flex justify-center items-center">
        <div className="relative w-[70%] h-[280px] ">
          {/* If not playing, show image with play button */}
          {!isPlaying && (
            <div className="relative w-full h-full items-center">
              <img
                src="https://www.securicoelectronics.com/wp-content/uploads/2023/03/Our-Corporate-Head-Office-1536x852-1-1024x568.jpg"
                alt="Video Thumbnail"
                className="w-full h-full object-cover"
              />
              <button
                onClick={handlePlay}
                className="absolute inset-0 flex items-center justify-center text-white text-6xl bg-black/50  p-4"
              >
                ▶
              </button>
            </div>
          )}

          {/* When playing, render the ReactPlayer */}
          {isPlaying && (
            <div className="absolute top-0 left-0 w-full h-full bg-black">
              <ReactPlayer
                url="https://youtu.be/7am-NqlFE5o"
                playing
                controls
                width="100%"
                height="100%"
              />
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-0 right-0 text-white text-xl p-2 hover:bg-red-700"
              >
                ✖
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="w-[784px] h-full mr-12 mx-auto flex items-center">
        <div
          className="flex flex-col w-[80%] h-[380px] mt-24
         mx-auto"
        >
          <div className="flex">
            <h2 className="text-xl font-bold text-red-900">About Us</h2>
            <span className="inline-block w-10 h-[3px] mt-4 bg-red-900 ml-3"></span>
          </div>
          <p className="text-3xl font-bold py-4 w-[60%]">
            We are India’s largest & favorite smart security systems
            manufacturer
          </p>
          <p className="text-lg font-lg py-2">
            Securico has completed{' '}
            <span className="font-semibold">4 decades of manufacturing </span>
            excellence and offers a complete range of IoT based electronic
            Security Solutions.
          </p>
          <p className="text-lg font-lg py-2">
            Our team is present along the length and breadth of the country and
            in the past 3 decades we have provided security to vast type of
            premises ranging from a small flat to currency chests of the bank.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
