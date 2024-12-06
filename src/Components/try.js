import React from 'react';

const Choose = () => {
  return (
    <div className="w-[1535px] h-[350px] bg-gray-200 mx-auto border flex  items-center justify-center border-blue-600">
      <div className="w-[1170px] h-[321px] flex flex-col gap-5 items-center justify-center border border-red-800">
        <div className="flex gap-12">
          {/* first box */}
          <div className="w-[135px] h-[120px] bg-white border flex flex-col items-center gap-2 justify-center border-red-500">
            <div className="w-[50px] h-[50px] flex justify-center">
              <img
                src="https://cdn-icons-png.freepik.com/256/14268/14268099.png?ga=GA1.1.15873822.1728281003&semt=ais_hybrid"
                alt="not found"
                className="w-[80%] h-[50px]"
              />
            </div>
            <div className="w-[70px] h-[30px] items-center flex justify-center font-bold text-3xl">
              40+
            </div>
          </div>
          {/* second box */}
          <div className="w-[135px] h-[120px] bg-white border flex flex-col items-center gap-2 justify-center border-red-500">
            <div className="w-[50px] h-[50px] flex justify-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2652/2652673.png"
                alt="not found"
                className="w-[80%] h-[50px]"
              />
            </div>
            <div className="w-[70px] h-[30px] items-center flex justify-center font-bold text-3xl">
              4000+
            </div>
          </div>
          {/* third box */}
          <div className="w-[135px] h-[120px] bg-white border flex flex-col items-center gap-2 justify-center border-red-500">
            <div className="w-[50px] h-[50px] flex justify-center">
              <img
                src="https://cdn-icons-png.freepik.com/256/9078/9078904.png?ga=GA1.1.15873822.1728281003&semt=ais_hybrid"
                alt="not found"
                className="w-[80%] h-[50px]"
              />
            </div>
            <div className="w-[70px] h-[30px] items-center flex justify-center font-bold text-3xl">
              300+
            </div>
          </div>
          {/* fourth box */}
          <div className="w-[135px] h-[120px] bg-white border flex flex-col items-center gap-2 justify-center border-red-500">
            <div className="w-[50px] h-[50px] flex justify-center">
              <img
                src="https://www.shutterstock.com/shutterstock/photos/1905864625/display_1500/stock-vector-golden-star-brooch-symbol-of-victory-awards-of-winners-in-sports-events-1905864625.jpg"
                alt="not found"
                className="w-[80%] h-[50px]"
              />
            </div>
            <div className="w-[70px] h-[30px] items-center flex justify-center font-bold text-3xl">
              500+
            </div>
          </div>
          {/* fifth box */}
          <div className="w-[135px] h-[120px] border flex flex-col items-center gap-2 justify-center border-red-500 bg-white">
            <div className="w-[50px] h-[50px] flex justify-center">
              <img
                src="https://png.pngtree.com/png-clipart/20240109/original/pngtree-smile-icon-smile-logo-vector-design-happy-emoticon-business-funny-design-png-image_14066997.png"
                alt="not found"
                className="w-[100%] h-[50px]"
              />
            </div>
            <div className="w-[70px] h-[30px] items-center flex justify-center font-bold text-3xl">
              300000+
            </div>
          </div>
        </div>

        {/* 2nd div */}

        {/* 1 heading */}
        <div className="flex justify-center items-center gap-12">
          <div className="border w-[135px] h-[78px] font-bold gap-4 text-xl border-black">
            <span>Years in Business</span>
          </div>

          {/* 2 heading */}
          <div className="border  w-[135px] h-[78px] font-bold gap-4  text-xl flex items-center justify-center border-black">
            <span>System Integrators</span>
          </div>

          {/* 3 heading */}
          <div className="border  w-[135px] h-[78px] font-bold gap-4 text-xl flex items-center justify-center border-black">
            <span> Cities Served </span>
          </div>

          {/* 4 heading */}
          <div className="border w-[135px] h-[78px] font-bold gap-4 text-xl flex items-center justify-center border-black">
            <span> Years Leadership Experience </span>
          </div>

          {/* 5 heading */}
          <div className="border w-[135px] h-[78px] font-bold gap-4 text-xl flex items-center justify-center border-black">
            <span>
              {' '}
              Satisfied <br /> End Users{' '}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
