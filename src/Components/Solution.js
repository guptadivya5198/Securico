import React from 'react';
import Footer from './Footer';

const Solution = () => {
  return (
    <div className="w-[]1535px] h-[3556px]">
      <div className="w-[1535px] h-[450px] relative">
        <img
          src="https://www.securicoelectronics.com/wp-content/uploads/2023/03/Corporates-Offices_Banner-Image-1-1536x1024-1-1024x683.jpg"
          alt="not found img"
          className="w-full h-full object-cover opacity-140"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-bold text-slate-800 text-5xl font-bold  px-4 py-1 ">
            Electronic Security Solution <br />{' '}
            <span className="ml-64">for</span>
            <br />
            Smart Home & Businesses!
          </div>
        </div>
      </div>
      {/* 2nd main div */}
      <div className="w-[1535px] h-[2600px]">
        <div className="w-[70%] h-full flex flex-col ">
          <p className="w-[890px] h-[170px] mx-auto text-lg mt-10">
            We have over 4 decades of experience in designing end-to-end
            electronic security solutions for banks, warehouses, retail chains,
            factories and residences. Our experienced team of highly qualified
            security consultants, engineers and installers study the security
            arrangements at the site to identify the gaps and then design custom
            made security solutions as per our client’s specific requirements,
            which not only increases the security of the premises but also help
            in reduction of the security expenditure.
          </p>
          <div className="w-[527px] h-[500px] mx-auto mt-8">
            <img
              src="https://www.securicoelectronics.com/wp-content/uploads/elementor/thumbs/Solutions-Main-Page-q14jdb7tvnez892xmnvemekrmlyp8a555u3vip02yo.png"
              alt="no"
            />
          </div>
          <p className="text-3xl font-semibold ml-56 pt-8">
            Verticals We Serve
          </p>
          {/* outer div for both images or paragraph */}
          <div className="grid grid-cols-2 w-[775px] h-[1700px] ml-64 pt-6 gap-4">
            {/*1st inner image div*/}
            <div className="w-[378px] h-[513px] hover:cursor-pointer flex flex-col gap-5">
              <img
                className="w-[358px] h-[268px]"
                src="https://www.securicoelectronics.com/wp-content/uploads/2020/10/Retail_Banner-Image-600x450.jpg"
              />
              <h1 className="text-2xl h-[28px] font-sans font-semibold hover:cursor-pointer hover:text-blue-500">
                Retail
              </h1>
              <p className="w-full h-[175px] flex flex-col">
                <p>
                  When you lock up your shop or showroom at the end of the day,
                  there's often that underlying fear of a chance of burglary.
                  You have to rely on your lock, whether you put one or two
                  doesn't really make that much of a difference.
                </p>
                <p className="text-xl text-slate-400">Read More...</p>
              </p>
            </div>
            {/*2nd inner image div*/}
            <div className="w-[378px] h-[513px] hover:cursor-pointer flex flex-col gap-5">
              <img
                className="w-[358px] h-[268px]"
                src="https://www.securicoelectronics.com/wp-content/uploads/2023/06/Warehouses-Godowns_Banner-Image-scaled-1-600x450.jpg"
              />
              <h1 className="text-2xl h-[28px] font-sans font-semibold hover:cursor-pointer hover:text-blue-500">
                Warehouses & Godowns
              </h1>
              <p className="w-full h-[175px] flex flex-col">
                <p>
                  Warehouses and godowns stock large amounts and high values of
                  stock and are therefore under constant threat of burglary,
                  robbery, pilferage and fire.
                </p>
                <p className="text-xl text-slate-400">Read More...</p>
              </p>
            </div>
            {/*3rd inner image div*/}
            <div className="w-[378px] h-[533px] hover:cursor-pointer flex flex-col gap-5">
              <img
                className="w-[358px] h-[268px]"
                src="https://www.securicoelectronics.com/wp-content/uploads/2020/10/Corporates-Offices_Banner-Image-1-600x450.jpg"
              />
              <h1 className="text-2xl h-[28px] font-sans font-semibold hover:cursor-pointer hover:text-blue-500">
                Corporates & Offices
              </h1>
              <p className="w-full h-[175px] flex flex-col">
                <p>
                  It is not practical to be physically present and keep a watch
                  on your business 24/7. Let us know what you want to monitor
                  and we'll help you achieve that without you having to be
                  present at the office. We can help you monitor staff activity,
                  general office environment, improve work quality and overall
                  operational efficiency.
                </p>
                <p className="text-xl text-slate-400">Read More...</p>
              </p>
            </div>
            {/*4th inner image div*/}
            <div className="w-[378px] h-[513px] hover:cursor-pointer flex flex-col gap-5">
              <img
                className="w-[358px] h-[268px]"
                src="https://www.securicoelectronics.com/wp-content/uploads/2020/10/Industrial_Banner-Image-600x450.jpg"
              />
              <h1 className="text-2xl h-[28px] font-sans font-semibold hover:cursor-pointer hover:text-blue-500">
                Industrial
              </h1>
              <p className="w-full h-[175px] flex flex-col">
                <p>
                  Though it is possible to view live and recorded camera feeds
                  from a mobile phone, tablet or remote PC, these facilities are
                  usually used either in case of an incident or on a random
                  basis every now and then.
                </p>
                <p className="text-xl text-slate-400">Read More...</p>
              </p>
            </div>
            {/*5th inner image div*/}
            <div className="w-[378px] h-[513px] hover:cursor-pointer flex flex-col gap-5">
              <img
                className="w-[358px] h-[268px]"
                src="https://www.securicoelectronics.com/wp-content/uploads/2020/10/Residential-1-600x450.jpg"
              />
              <h1 className="text-2xl h-[28px] font-sans font-semibold hover:cursor-pointer hover:text-blue-500">
                Residential
              </h1>
              <p className="w-full h-[175px] flex flex-col">
                <p>
                  Our monitoring officers are alert and on the look out when you
                  & your loved ones are at home, whether awake or asleep and
                  when you're out of your home during the day or away on
                  vacation.
                </p>
                <p className="text-xl text-slate-400">Read More...</p>
              </p>
            </div>
            {/*6th inner image div*/}
            <div className="w-[378px] h-[600px] hover:cursor-pointer flex flex-col gap-5">
              <img
                className="w-[358px] h-[268px]"
                src="https://www.securicoelectronics.com/wp-content/uploads/2020/10/school-600x450.jpg"
              />
              <h1 className="text-2xl h-[28px] font-sans font-semibold hover:cursor-pointer hover:text-blue-500">
                School & Educational Institutions
              </h1>
              <p className="w-full h-[175px] flex flex-col">
                <p>
                  Safety and security of students is a growing concern and one
                  of the main responsibilities of all educational institutions.
                  The school/college/institute also needs to protect other
                  assets such as computers, lab equipment and supplies, sports
                  equipment, audio-visual equipment, books, confidential
                  documents and exam papers from burglary and fire.
                </p>
                <p className="text-xl text-slate-400">Read More...</p>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Solution;
