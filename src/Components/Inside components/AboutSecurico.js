import React from 'react';
import Footer from '../Footer';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

const AboutSecurico = () => {
  // Data structure representing each line and its bubbles, along with their colors
  const bubbleData = [
    [{ color: 'bg-black' }, { color: 'bg-red-500' }, { color: 'bg-black' }],
    [{ color: 'bg-black' }, { color: 'bg-black' }],
    [{ color: 'bg-red-500' }],
  ];

  // PDF URL
  const pdfUrl =
    'https://www.securicoelectronics.com/wp-content/uploads/Securico-Brief-Company-Profile.pdf';

  return (
    <div className="w-[1535px] flex flex-col">
      {/* image 2 div */}
      <div className="w-full h-[360px] flex">
        <img
          src="https://www.securicoelectronics.com/wp-content/uploads/2023/03/Our-Corporate-Head-Office-1536x852-1-1024x568.jpg"
          alt="not found"
          className="w-full h-[350px]"
        />
        <img
          src="https://www.securicoelectronics.com/wp-content/uploads/2020/10/manufacturing-unit-2.jpg"
          alt="not found"
          className="w-full h-[350px]"
        />
      </div>

      {/* paragraph div */}
      <div className="w-full h-[628px] flex flex-col ">
        <div className="w-[1200px] h-full flex flex-col m-auto ">
          <div className="flex m-auto ">
            <div className="flex flex-col items-end mt-[6.3rem] mr-3 gap-1 ">
              {bubbleData.map((line, index) => (
                <div key={index} className="flex justify-center gap-1">
                  {line.map((bubble, i) => (
                    <div
                      key={i}
                      className={`${bubble.color} w-3 h-3 flex items-center justify-center rounded-full`}
                    ></div>
                  ))}
                </div>
              ))}
            </div>
            <p className="w-[570px] h-[220px] m-auto text-4xl font-bold text-left">
              Securico is a leader of manufacturing electronic <br /> security
              systems & remote monitoring solutions in <br /> India
            </p>
            <p className="w-[540px] h-[380px] text-lg text-start mt-8 leading-relaxed line-clamp-4 ">
              Securico has completed 40 successful years of manufacturing
              excellence and offers a complete range of IoT based{' '}
              <span className="text-red-700"> Electronic Security Systems</span>
              . Securico is the chosen brand of more than 4000 security system
              integrators in over 300 cities across India. With a highly
              qualified in-house R&D team, Securico is totally committed to
              providing the security industry with high-tech, multi-functional,
              top quality, low cost yet world-class products. Securico is
              privileged to have a large number of Indian and multinational
              banks along with thousands of corporate, commercial, retail and
              residential users as{' '}
              <span className="text-red-700 hover:cursor-pointer">
                satisfied clients
              </span>{' '}
              , which has been achieved through four decades of impeccable
              customer service and care.
            </p>
          </div>
          <div className="w-[1100px] h-[90px] rounded-md flex items-center justify-evenly m-auto bg-black text-white ">
            <p className="text-2xl font-bold">
              Want to know more about us?
              <span className="text-xl mt-2">
                Download our company profile.
              </span>
            </p>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white flex items-center gap-3 rounded-md w-[243px] h-[50px] mt-2 hover:cursor-pointer hover:bg-orange-400 px-4"
            >
              <span>Download Profile</span>
              <CloudDownloadIcon />
            </a>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default AboutSecurico;
