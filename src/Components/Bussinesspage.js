import React from 'react';

const Bussinesspage = () => {
  return (
    <div className="w-[1535px] h-[552px] bg-black flex flex-col items-center">
      <div className="w-[1170px] h-[170px] items-center flex flex-col">
        {/* Heading */}
        <span className="w-[743px] h-[152px] mt-8 text-white font-bold text-4xl text-center">
          Securico Can Help You Protect Your <br /> Home & Business from thefts,
          <br />
          burglaries and Fire!
        </span>

        {/* Images Container */}
        <div className="w-[970px] h-[290px] mt-9 gap-8 flex">
          {/* First Image Card */}
          <div className="w-full h-[290px] relative group overflow-hidden rounded-md">
            <img
              src="https://www.securicoelectronics.com/wp-content/uploads/2023/03/Residential-1-1024x678.jpg"
              alt="Residential Solutions"
              className="w-full h-full transition-transform duration-700 group-hover:rotate-[180deg]"
            />

            <div className="absolute inset-0 bg-red-900 bg-opacity-100 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col items-center justify-center p-6">
              <h2 className="text-xl font-bold mb-2">
                Our Solutions For Homes
              </h2>
              <p className="text-center mb-4">
                Wake up! We need to protect ourselves from criminals who are
                spreading like plague. Crime has taken a nasty shape and brutal
                attacks, murders, robberies, burglaries have become so common
                that we feel helpless and humiliated and our lives are being
                shattered.
              </p>
              <button className="border border-white text-white px-4 py-2 rounded-md hover:bg-red-800 transition duration-300">
                Learn More
              </button>
            </div>
            <div>Security Solutions for businesses</div>
          </div>

          {/* Second Image Card */}
          <div className="w-full h-[290px] relative group overflow-hidden rounded-md">
            <img
              src="https://www.securicoelectronics.com/wp-content/uploads/2020/10/Corporates-Offices_Banner-Image-1-600x450.jpg"
              alt="Business Solutions"
              className="w-full h-full transition-transform duration-700 group-hover:rotate-[180deg]"
            />
            <div className="absolute inset-0 bg-red-900 bg-opacity-100 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col items-center justify-center p-6">
              <h2 className="text-xl font-bold mb-2">
                Our Solutions For Businesses
              </h2>
              <p className="text-center mb-4">
                It is not practical to be physically present and keep a watch on
                your business 24/7. Let us know what you want to monitor, and
                we'll help you achieve that without you having to be present at
                the office. We can help you monitor staff activity, general
                office environment, improve work quality, and overall
                operational efficiency.
              </p>
              <button className=" text-white px-4 py-2 border border-white rounded-md hover:bg-red-800 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="w-[970px] h-[28px] flex mt-4  mx-auto justify-center ">
          <div className="text-xl font-bold mr-52 text-white">
            Security Solutions For Homes
          </div>
          <div className="text-xl font-bold text-white">
            Security Solutions For Businesses
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bussinesspage;
