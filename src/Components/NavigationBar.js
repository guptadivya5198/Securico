import { TiSocialFacebook } from 'react-icons/ti';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import { IoIosCall } from 'react-icons/io';
// import { IoIosArrowForward } from 'react-icons/io';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {
  const navigate = useNavigate();
  const [dropdowns, setDropdowns] = useState({
    aboutUs: false,
    products: false,
    monitoring: false,
    productSubMenu: false,
    partnerWithUs: false,
    resources: false,
  });

  const toggleDropdown = (key) => {
    setDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="w-[1535px] bg-white border mx-auto sticky top-0 flex flex-col z-50">
      {/* Top Bar */}
      <div className="h-[46px] w-full px-[150px] flex justify-between items-center">
        <div className="flex items-center ">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/securicoelectronics"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 transition-all scroll-smooth cursor-pointer hover:-translate-y-1"
          >
            <TiSocialFacebook size={25} className="hover:text-red-600" />
          </a>
          {/* Twitter */}
          <a
            href="https://x.com/i/flow/login?redirect_after_login=%2FIndiaSecurico"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 transition-all scroll-smooth cursor-pointer hover:-translate-y-1"
          >
            <FaTwitter size={15} className="hover:text-red-600" />
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/securico-electronics/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 transition-all scroll-smooth cursor-pointer hover:-translate-y-1"
          >
            <FaLinkedinIn size={15} className="hover:text-red-600" />
          </a>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/securico_electronics/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 transition-all scroll-smooth cursor-pointer hover:-translate-y-1"
          >
            <FaInstagram size={15} className="hover:text-red-600" />
          </a>
        </div>
        <div className="flex items-center gap-2 text-brown">
          <IoIosCall size={25} color="brown" />
          +91-129-4270000
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="w-full h-[100px] flex justify-between items-center px-[150px]">
        {/* Left Section */}
        <div className="flex items-center gap-6">
          {/* About Us Dropdown */}
          <div
            className="relative inline-block"
            onMouseEnter={() => toggleDropdown('aboutUs')}
            onMouseLeave={() => toggleDropdown('aboutUs')}
          >
            <p className="hover:border-b-4 hover:border-b-red-700 font-bold p-1 hover:cursor-pointer overflow-y-auto max-h-64">
              About Us+
            </p>

            {dropdowns.aboutUs && (
              <div className="absolute left-0 w-64 bg-white rounded-md shadow-lg overflow-y-auto max-h-64 z-10">
                <div className="pt-10">
                  <ul>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <span
                        onClick={() => {
                          navigate('/aboutsecurico');
                        }}
                        className="cursor-pointer"
                      >
                        About Securico
                      </span>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <span>Why Securico</span>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <a href="/about-team">Chairman’s Message</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <a href="/our-clients">Our Management Team</a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Products Dropdown */}
          <div className="relative inline-block">
            {/* Main Dropdown Trigger */}
            <div
              onMouseEnter={() => toggleDropdown('products')}
              onMouseLeave={() => toggleDropdown('products')}
            >
              <p className="hover:border-b-4 hover:border-b-red-700 font-bold p-1 hover:cursor-pointer">
                Products+
              </p>

              {dropdowns.products && (
                <div className="absolute left-0 w-64 bg-white rounded-md shadow-lg overflow-y-auto max-h-64 z-10">
                  <div className="pt-10">
                    <ul className="bg-white rounded-md z-10 overflow-y-auto max-h-64 ">
                      <li
                        className="relative px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onMouseEnter={() => toggleDropdown('controlPanel')}
                        onMouseLeave={() => toggleDropdown('controlPanel')}
                      >
                        Control Panels
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Wired Intruder Alarms
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Wireless Intruder Alarms
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Auto Dialers
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Automation Systems
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
            {/* one more column send your requirements , bg-yellow or text black  control panel -ip based wala description poora */}
            {/* Separate Dropdown for Control Panels */}
            {/* {dropdowns.controlPanel && (
              <div
                className="absolute  top-5 w-64 bg-white rounded-md z-10 max-h-64 overflow-y-auto scroll-smooth"
                onMouseEnter={() => toggleDropdown('controlPanel')}
                onMouseLeave={() => toggleDropdown('controlPanel')}
              >
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Keypads
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Sensors
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Other Accessories
                  </li>
                </ul>
              </div>
            )} */}
          </div>
          <p className="hover:border-b-4 hover:border-b-red-700 font-bold p-1 hover:cursor-pointer">
            <span
              onClick={() => {
                navigate('/solution');
              }}
              className="cursor-pointer border-b-red-700"
            >
              Solutions
            </span>
          </p>

          {/* 24x7 Monitoring Dropdown */}
          <div
            className="relative inline-block"
            onMouseEnter={() => toggleDropdown('monitoring')}
            onMouseLeave={() => toggleDropdown('monitoring')}
          >
            <p className="hover:border-b-4 hover:border-b-red-700 font-bold p-1 hover:cursor-pointer">
              24X7 Monitoring+
            </p>

            {dropdowns.monitoring && (
              <div className="absolute left-0 w-64 bg-white rounded-md shadow-lg z-10">
                <div className="pt-10">
                  <ul>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <span
                        onClick={() => {
                          navigate('/centralmonitoring');
                        }}
                        className="cursor-pointer"
                      >
                        Central Monitoring
                      </span>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Monitoring Services
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          <div className="border border-l-0 border-b-0 border-red-900 h-[100px]"></div>
        </div>
        {/* Logo */}
        <div>
          <img
            src="https://www.securicoelectronics.com/wp-content/uploads/2020/12/440-140-securico-logo.png"
            alt="Logo"
            className="h-[85px] w-[250px]"
          />
        </div>

        {/* Right Section */}
        {/* Partner With Us*/}
        <div
          className="relative inline-block"
          onMouseEnter={() => toggleDropdown('partnerWithUs')}
          onMouseLeave={() => toggleDropdown('partnerWithUs')}
        >
          <p className="hover:border-b-4 hover:border-b-red-700 p-1 font-bold hover:cursor-pointer overflow-y-auto max-h-64">
            Partner With Us+
          </p>

          {dropdowns.partnerWithUs && (
            <div className="absolute left-0 w-64 bg-white rounded-md shadow-lg z-10 overflow-y-auto max-h-64">
              <div className="pt-10">
                {' '}
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <a>Join Our Team</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <a>Become Our Channel Partner</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <a>Become A Dealer</a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
        {/* Resources*/}
        <div
          className="relative inline-block"
          onMouseEnter={() => toggleDropdown('resources')}
          onMouseLeave={() => toggleDropdown('resources')}
        >
          <p className="hover:border-b-4 hover:border-b-red-700 p-1 font-bold hover:cursor-pointer overflow-y-auto max-h-64">
            Resources+
          </p>

          {dropdowns.resources && (
            <div className="absolute left-0 w-64 bg-white rounded-md shadow-lg z-10 max-h-64">
              <div className="p-10">
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <a>Blogs</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <a>FAQ</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <a>White Papers</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <a>Videos</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <a>Crime News</a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
        <p className="hover:border-b-4 hover:border-b-red-700 p-1 font-bold hover:cursor-pointer">
          News
        </p>
        <p className="hover:border-b-4 hover:border-b-red-700 p-1 font-bold hover:cursor-pointer">
          <span
            onClick={() => {
              navigate('/contactus');
            }}
            className="cursor-pointer border-b-red-700"
          >
            Contact Us
          </span>
        </p>
      </div>
    </div>
  );
};

export default NavigationBar;
