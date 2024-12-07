import React from 'react';
import Footer from '../Footer';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const IPBasedProduct = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/neuron'); // Replace '/neuron' with your desired route for <NEURON />
  };

  return (
    <div className="w-[1535px] flex flex-col h-[3067px] bg-yellow-10">
      {/* inner 1st div */}
      <div className="pt-[90px] w-full h-[2561px] justify-evenly flex ">
        <div className="w-[870px] h-[1016px]">
          <div className="w-full h-[60px]">
            <h1 className="text-lg font-sans text-center">
              Showing all 4 results
            </h1>
          </div>
          <div className="flex flex-wrap gap-6 justify-center items-center ml-[100px] ">
            <div className="w-[240px] h-[427px] rounded-xl bg-white shadow-2xl relative group">
              {/* Image */}
              <img
                src="https://www.securicoelectronics.com/wp-content/uploads/2022/11/Neuron-300x300.jpg"
                alt="not found"
                className="w-full h-[240px] rounded-t-xl"
              />
              {/* Title */}
              <p className="w-full h-[26px] text-center">IP Series</p>
              {/* Description */}
              <p className="w-[202px] h-[103px] text-center ml-4 font-bold text-xl hover:cursor-pointer hover:text-red-800">
                Neuron: Security and Automation Hub for Residences and Small
                Businesses
              </p>

              {/* Hover Effect */}
              <div
                className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                onClick={handleNavigate}
              >
                <RemoveRedEyeIcon style={{ fontSize: 36, color: 'white' }} />
                <p className="text-white text-lg mt-2">Quick View</p>
              </div>
            </div>
            {/* 2 card */}
            <div className="w-[240px] h-[350px] rounded-xl bg-white shadow-2xl">
              <img
                src="https://www.securicoelectronics.com/wp-content/uploads/2020/11/SEC-12IP-1-300x300.jpg"
                alt="not found"
                className="w-full h-[240px]"
              />
              <p className="w-full h-[26px] text-center">IP Series</p>
              <p className="w-[202px] h-[25px] text-center ml-4 font-bold text-xl hover:cursor-pointer hover:text-red-800">
                PRESIDENT IP | SEC 12IP
              </p>
            </div>
            {/* 3 card */}
            <div className="w-[240px] h-[401px] rounded-xl bg-white shadow-2xl">
              <img
                src="https://www.securicoelectronics.com/wp-content/uploads/2020/11/Security-and-Automation-IoT-Hub-300x300.jpg"
                alt="not found"
                className="w-full h-[240px]"
              />
              <p className="w-full h-[26px] text-center"> IP Series</p>
              <p className="w-[237px] h-[77px]  text-center  font-bold text-xl hover:cursor-pointer hover:text-red-800">
                SECURITY & AUTOMATION IoT HUB (24 Zone IP Panel) | SEC GX 4816
                IP A1
              </p>
            </div>
            {/* 4 card */}
            <div className="w-[240px] h-[401px]  rounded-xl bg-white shadow-2xl">
              <img
                src="https://www.securicoelectronics.com/wp-content/uploads/2020/11/SEC-GX-4816-IP-B2-300x300.jpg"
                alt="not found"
                className="w-full h-[240px]"
              />
              <p className="w-full h-[26px] text-center"> IP Series</p>
              <p className="w-[238px] h-[51px] text-center font-bold text-xl hover:cursor-pointer hover:text-red-800">
                SECURITY & AUTOMATION IoT HUB | SEC GX 4816 IP B2
              </p>
            </div>
          </div>
        </div>
        <div className="w-[300px] h-[2561px] ">
          {/* search div */}
          <div className="w-[270px] h-[50px] flex">
            <input
              type="search"
              placeholder="Search"
              className="border border-gray-200 w-full h-full items-center"
            />
            <div className="h-full w-[80px] text-center pt-2 border border-gray-200">
              <SearchIcon />
            </div>
          </div>
          {/* heading */}
          <div className="w-[270px] h-[35px] ">
            <h1 className="font-bold text-lg p-[10px] m-[10px]">
              Product categories
            </h1>
          </div>
          {/* list item */}
          <ul className="mt-4">
            <li className="border-b-2  border-slate-300 w-[260px] h-[58px] p-3 m-2">
              > AUTO DIALERS
            </li>
            <li className="border-b-2  border-slate-300 w-[260px] h-[58px] p-3 m-2">
              > DIGITAL COMMUNICATORS
            </li>
            <li className="border-b-2  border-slate-300 w-[260px] h-[58px] p-3 m-2">
              > GSM AUTO DIALERS
            </li>
            <li className="border-b-2  border-slate-300 w-[260px] h-[58px] p-3 m-2">
              > PSTN AUTO DIALERS
            </li>
            <li className="border-b-2  border-slate-300 w-[260px] h-[58px] p-3 m-2">
              > AUTOMATION SYSTEMS
            </li>
            <li className="border-b-2  border-slate-300 w-[260px] h-[58px] p-3 m-2">
              > STAND ALONE 220V MOTION SENSORS
            </li>
            <li className="border-b-2  border-slate-300 w-[260px] h-[58px] p-3 m-2">
              > STAND ALONE DEVICES
            </li>
            <li className="border-b-2  border-slate-300 w-[260px] h-[58px] p-3 m-2">
              > CABLES INTRUDER
            </li>
            <li className="border-b-2  border-slate-300 w-[260px] h-[58px] p-3 m-2">
              > ALARM CABLE
            </li>
            <li className="border-b-2  border-slate-300 w-[260px] h-[58px] p-3 m-2">
              > VIDEO DOOR PHONE AND CCTV CABLE
            </li>
            <li className="border-b-2  border-slate-300 w-[260px] h-[58px] p-3 m-2">
              > CCTV Accessories
            </li>
            <li className="border-b-2  border-slate-300 w-[260px] h-[58px] p-3 m-2">
              > Digital Video Recorder
            </li>
            <li className="border-b-2  border-slate-300 w-[260px] h-[58px] p-3 m-2">
              > HD CCTV Cameras
            </li>
            <li className="border-b-2  border-slate-300 w-[260px] h-[58px] p-3 m-2">
              > IP CCTV Camera
            </li>
            <li className="border-b-2  border-slate-300 w-[260px] h-[58px] p-3 m-2">
              > CCTV Surveillance Systems
            </li>
            <li className="border-b-2  border-slate-300 w-[260px] h-[58px] p-3 m-2">
              > Network Video Recorder
            </li>
            <li className="border-b-2  border-slate-300 w-[260px] h-[58px] p-3 m-2">
              > Safety Enclosure
            </li>
            <li className="border-b-2  border-slate-300 w-[260px] h-[58px] p-3 m-2">
              > FIRE ALARM SYSTEMS
            </li>
            <li className="border-b-2  border-slate-300 w-[260px] h-[58px] p-3 m-2">
              > FIRE ACCESSORIES
            </li>
            <li className="border-b-2  border-slate-300 w-[260px] h-[58px] p-3 m-2">
              > FIRE CONTROL PANELS
            </li>
            <li className="border-b-2  border-slate-300 w-[260px] h-[58px] p-3 m-2">
              > FIRE DETECTORS
            </li>
            <li className="border-b-2  border-slate-300 w-[260px] h-[58px] p-3 m-2">
              > REMOTE MONITORING APPLICATION
            </li>
            <li className="border-b-2  border-slate-300 w-[260px] h-[58px] p-3 m-2">
              > Routers
            </li>
            <li className="border-b-2  border-slate-300 w-[260px] h-[58px] p-3 m-2">
              > VIDEO DOOR PHONES
            </li>
            <li className="border-b-2  border-slate-300 w-[260px] h-[58px] p-3 m-2">
              > VDP ACCESSORIES
            </li>
            <li className="border-b-2  border-slate-300 w-[260px] h-[58px] p-3 m-2">
              > VDP CAMERAS
            </li>
            <li className="border-b-2  border-slate-300 w-[260px] h-[58px] p-3 m-2">
              > VDP KITS
            </li>
            <li className="border-b-2  border-slate-300 w-[260px] h-[58px] p-3 m-2">
              > VDP MONITORS
            </li>
            <li className="border-b-2  border-slate-300 w-[260px] h-[58px] p-3 m-2">
              > Wired Intrusion Alarm Systems
            </li>
            <li className="border-b-2  border-slate-300 w-[260px] h-[58px] p-3 m-2">
              > Keypads
            </li>
            <li className="border-b-2  border-slate-300 w-[260px] h-[58px] p-3 m-2">
              > Modules
            </li>
            <li className="border-b-2  border-slate-300 w-[260px] h-[58px] p-3 m-2">
              > Sounders & Flashers
            </li>
            <li className="border-b-2  border-slate-300 w-[260px] h-[58px] p-3 m-2">
              > Wired Accessories
            </li>
            <li className="border-b-2  border-slate-300 w-[260px] h-[58px] p-3 m-2">
              > Wired Alarm Panels
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IPBasedProduct;
