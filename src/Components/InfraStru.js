import React from 'react';

const InfraStru = () => {
  return (
    // main div
    <div className="w-[1535px] h-[634px] bg-slate-200 flex">
      {/* 1 div divison */}
      <div className="w-[50%] flex items-center mt-10 flex-col gap-4">
        {/* first div for img */}
        <div className="w-[570px] h-[382px] ml-40 hover:cursor-pointer">
          <img
            src="https://www.securicoelectronics.com/wp-content/uploads/2023/03/Our-Corporate-Head-Office-1536x852-1-1024x568.jpg"
            className="w-full h-full"
            alt="img not found"
          />
        </div>
        {/* second for paragraph */}
        <div className="w-[570px] ml-40 h-[167px] ">
          <h1 className="w-full h-[35px] text-center text-3xl font-bold hover:cursor-pointer text-red-900">
            {' '}
            Our Infrastructure
          </h1>
          <p className="w-full h-[120px] text-base mt-4 text-center">
            {' '}
            Securico has 3 manufacturing plants where we manufacture our
            products through advanced machines and fully automated production
            lines. We also boast a world class Research & Development facility
            which helps us manufacture products that are class apart.
          </p>
        </div>
      </div>
      {/* 2nd div divison */}
      <div className="w-[50%] flex items-center mt-10 flex-col gap-4">
        {/* second's div for img */}
        <div className="w-[570px] h-[382px] hover:cursor-pointer mr-40">
          <img
            src="https://www.securicoelectronics.com/wp-content/uploads/2020/11/2.jpg"
            alt="img not found"
            className="w-full h-full"
          />
        </div>
        {/* second div for paragraph */}
        <div className="w-[570px] h-[120px] mr-40">
          <h1 className="w-full h-[33px] text-center text-3xl font-bold hover:cursor-pointer text-red-900">
            Our Command Center
          </h1>
          <p className="w-full h-[90px] text-base mt-4 text-center">
            We also host a state-of-the-art security command center for alert
            based and scheduled monitoring of the sites. Now, get your site
            monitored 24 X 7 by our vigilant monitoring officers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfraStru;
