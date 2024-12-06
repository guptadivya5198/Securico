import React from 'react';

const Choose = () => {
  return (
    <div
      className="w-full h-[350px] relative mx-auto flex items-center justify-center"
      style={{
        backgroundImage: `url('https://t4.ftcdn.net/jpg/05/01/68/67/360_F_501686752_qPzSB2LT68q5KTefab0iVbUgwa1NG3Am.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Blackish Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 w-[1170px] h-[321px] flex flex-col gap-5 items-center justify-center">
        <div className="flex gap-12">
          {/* Card */}
          {[
            {
              image:
                'https://cdn-icons-png.freepik.com/256/14268/14268099.png?ga=GA1.1.15873822.1728281003&semt=ais_hybrid',
              text: '40+',
            },
            {
              image: 'https://cdn-icons-png.flaticon.com/128/2652/2652673.png',
              text: '4000+',
            },
            {
              image:
                'https://cdn-icons-png.freepik.com/256/9078/9078904.png?ga=GA1.1.15873822.1728281003&semt=ais_hybrid',
              text: '300+',
            },
            {
              image:
                'https://www.shutterstock.com/shutterstock/photos/1905864625/display_1500/stock-vector-golden-star-brooch-symbol-of-victory-awards-of-winners-in-sports-events-1905864625.jpg',
              text: '500+',
            },
            {
              image:
                'https://png.pngtree.com/png-clipart/20240109/original/pngtree-smile-icon-smile-logo-vector-design-happy-emoticon-business-funny-design-png-image_14066997.png',
              text: '300000+',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="w-[135px] h-[120px] rounded-md bg-white flex flex-col items-center gap-2 justify-center 
              transform transition-transform duration-300 hover:-translate-y-2 shadow-lg"
            >
              <div className="w-[50px] h-[50px] flex justify-center transform transition-transform duration-300 hover:-translate-y-1">
                <img
                  src={item.image}
                  alt="not found"
                  className="w-[80%] h-[50px]"
                />
              </div>
              <div className="w-[70px] h-[30px] items-center flex justify-center font-bold text-3xl">
                {item.text}
              </div>
            </div>
          ))}
        </div>

        {/* Second row (Headings) */}
        <div className="flex text-center gap-12">
          <div className="border text-white w-[135px] h-[78px] font-bold gap-4 text-xl border-black">
            <span> Years in Business</span>
          </div>
          <div className=" text-white w-[135px] h-[78px] font-bold gap-4 text-xl flex items-center justify-center">
            <span>System Integrators</span>
          </div>
          <div className="text-white w-[135px] h-[78px] font-bold gap-4 text-xl flex items-center justify-center">
            <span>
              Cities <br /> Served
            </span>
          </div>
          <div className="text-white w-[135px] h-[78px] font-bold gap-4 text-xl flex items-center justify-center">
            <span>Years Leadership Experience</span>
          </div>
          <div className=" text-white w-[135px] h-[78px] font-bold gap-4 text-xl flex items-center justify-center ">
            <span>
              Satisfied <br /> End Users
            </span>
          </div>
        </div>
        <button className="text-white text-xl font-bold bg-red-800 p-3 rounded-md hover:bg-blue-950">
          More reason to choose you
        </button>
      </div>
    </div>
  );
};

export default Choose;
