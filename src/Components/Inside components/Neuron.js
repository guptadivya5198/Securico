import React, { useState } from 'react';
import Footer from '../Footer';
import SearchIcon from '@mui/icons-material/Search';

const Neuron = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const [activeTab, setActiveTab] = useState('Resources'); // Active tab
  const [content, setContent] = useState(''); // Content to display

  // Generic handler for tab switching
  const handleTabClick = (tab, tabContent = '') => {
    setActiveTab(tab);
    setContent(tabContent);
  };
  return (
    <div className="w-[1535px] h-[1750px] flex flex-col">
      <div className="flex justify-center mt-[80px]">
        {/*1st summary div */}
        <div className="w-[760px] h-[930px] flex flex-col">
          <div className=" border-dotted border-b-2 border-black w-[660px] h-[20px]"></div>
          {/* heading */}
          <div className="w-[660px] h-[30px] p-5">
            <p className="flex gap-2 ">
              <p className="text-red-900 font-bold text-lg">NAME: </p>{' '}
              <p className="text-lg">NEURON</p>
            </p>
          </div>
          {/* description */}
          <div className="w-full h-[120px] p-5">
            <p className="flex gap-2 ">
              <p className="text-red-900 font-bold text-lg">DESCRIPTION: </p>{' '}
              <p className="text-base">
                {' '}
                Neuron is an integrated hub with intrusion, panic, fire, gas
                leak alarm and home/small business automation system. It has
                programmable outputs for automation of electrical & electronic
                devices and also has mobile app for operating devices and
                receiving alerts.
              </p>
            </p>
          </div>
          {/* 2 heading */}
          <div className="w-full h-[30px] p-5">
            <h1 className="text-red-900 font-bold text-lg">FEATURES:</h1>
            <p className="flex gap-2 mt-3 ">
              <p className=" font-bold text-base">NAME: </p>{' '}
              <p className="text-base font-bold">NEURON</p>
            </p>
            <ul className="ml-[20px] text-lg list-disc mt-3">
              <li>
                Integrated hub with Intrusion, Panic, Fire, Gas Leak Alarm and
                Home Automation System.
              </li>
              <li>
                Programmable outputs for automation of electrical & electronic
                devices
              </li>
              <li>Can be integrated with Jio App.</li>
              <li>
                Cloud based software for system configuration, receiving alerts
                & operating devices.
              </li>
              <li>Remotely operatable from NOC (Network Operation Center).</li>
              <li>
                Integrated hub with Intrusion, Panic, Fire, Gas Leak Alarm and
                Home Automation System.
              </li>
              <li>
                Expandable i.e. multiple repeaters units can be configured.
              </li>
              <li>Compact size and aesthetic design.</li>
            </ul>
            {/* 2 para */}
            <p className="flex gap-2 mt-3 ">
              <p className=" font-bold text-base">Neuron: </p>{' '}
              <p className="text-base font-bold">Small Business Solutions</p>
            </p>
            <ul className="ml-[20px] text-lg list-disc mt-3">
              <li>
                Integrated hub with Intrusion, Panic, Fire and Office automation
                system.
              </li>
              <li>
                Programmable outputs for automation of electrical & electronic
                devices.
              </li>
              <li>Mobile App for operating devices and receiving alerts.</li>
              <li>Can be integrated with Jio App.</li>
              <li>
                Cloud based software for system configuration, receiving alerts
                & operating devices.
              </li>
              <li>
                SMS based command for configuration and alerts on text message.
              </li>
              <li>Remotely operatable from NOC.</li>
              <li>Can be integrated with existing CCTV & Fire alarm system.</li>
            </ul>
            <div className="flex gap-2">
              <h1 className="text-red-900 font-bold mt-2 text-lg">
                APPLICATIONS:{' '}
              </h1>
              <p className="flex mt-2 ">
                <p className="text-lg">Homes | Small Businesses </p>{' '}
              </p>
            </div>
            <div className="border-dotted border-b-2 border-black w-[660px] h-[20px]"></div>
            <p className="p-1">Category: IP Series</p>
          </div>
        </div>

        {/*2nd image div*/}
        <div className="w-[510px] p-3 mt-0 h-[930px] items-center justify-center flex">
          {/* 2nd image */}
          <div>
            {/* Image with hover effect */}
            <div>
              {/* Image */}
              <img
                src="https://www.securicoelectronics.com/wp-content/uploads/2022/11/Neuron-scaled.jpg"
                alt="Thumbnail"
                className="object-cover rounded-xl bg-white shadow-2xl relative w-full h-full"
              />

              {/* Hover Overlay */}
              <div
                className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                onClick={openModal}
              >
                {/* Search Icon */}
                <SearchIcon size={30} />
              </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
              <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                <div className="relative">
                  {/* Large Image */}
                  <img
                    src="https://www.securicoelectronics.com/wp-content/uploads/2022/11/Neuron-scaled.jpg"
                    alt="Large View"
                    className="w-[90vw] max-w-[600px]  rounded"
                  />
                  {/* Close Button */}
                  <button
                    className="absolute top-2 right-2 text-2xl font-bold"
                    onClick={closeModal}
                  >
                    &times;
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* 3 bottom button */}
      <div className="w-[1170px] h-[70px] m-[60px] mx-auto flex items-center justify-between relative">
        {/* Horizontal line */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-300 transform -translate-y-1/2"></div>

        {/* Buttons */}
        <button
          onClick={() =>
            handleTabClick(
              'Description',
              'Neuron is an integrated hub with intrusion, panic, fire, gas leak alarm and home/small business automation system. It has programmable outputs for automation of electrical & electronic devices and also has a mobile app for operating devices and receiving alerts.'
            )
          }
          className={`relative flex items-center justify-center w-[150px] h-[50px] rounded-full font-medium text-sm transition-all duration-300 z-10 ${
            activeTab === 'Description'
              ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
              : 'bg-white text-gray-800 border border-gray-300'
          }`}
        >
          Description
        </button>

        <button
          onClick={() => handleTabClick('Specification')}
          className={`relative flex items-center justify-center w-[150px] h-[50px] rounded-full font-medium text-sm transition-all duration-300 z-10 ${
            activeTab === 'Specification'
              ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
              : 'bg-white text-gray-800 border border-gray-300'
          }`}
        >
          Specification
        </button>

        <button
          onClick={() => handleTabClick('Gallery')}
          className={`relative flex items-center justify-center w-[150px] h-[50px] rounded-full font-medium text-sm transition-all duration-300 z-10 ${
            activeTab === 'Gallery'
              ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
              : 'bg-white text-gray-800 border border-gray-300'
          }`}
        >
          Gallery
        </button>

        <button
          onClick={() => handleTabClick('Resources')}
          className={`relative flex items-center justify-center w-[150px] h-[50px] rounded-full font-medium text-sm transition-all duration-300 z-10 ${
            activeTab === 'Resources'
              ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
              : 'bg-white text-gray-800 border border-gray-300'
          }`}
        >
          Resources
        </button>
      </div>

      {/* Content Display Section */}
      <div className="m-7 text-center text-gray-700 text-lg">
        {content && <p>{content}</p>}
      </div>
      <Footer />
    </div>
  );
};

export default Neuron;
