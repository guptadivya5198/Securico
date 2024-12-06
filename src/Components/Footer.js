import React, { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { IoIosCall } from 'react-icons/io';
import { TiSocialFacebook } from 'react-icons/ti';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import axios from 'axios';

const Footer = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [city, setCity] = useState('');

  async function submitFunctions() {
    const reqBody = {
      name: name,
      contact: mobile,
      city: city,
    };

    await axios
      .post('http://192.168.166.232:9000/api/feedback', reqBody)
      .then((result) => {
        alert(result?.data?.msg);
        setCity('');
        setName('');
        setMobile('');
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div
      className="w-[1535px] h-[506px] flex flex-col sticky bg-cover bg-center text-white"
      style={{
        backgroundImage: `url('https://www.securicoelectronics.com/wp-content/uploads/2020/11/2.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      {/* Overlay effect */}
      <div className="absolute inset-0 bg-black opacity-85"></div>

      <div className="relative w-full h-[442px] flex justify-center gap-7">
        {/* 1 row */}
        <div className="w-[300px] h-[381] flex flex-col justify-center gap-5">
          <img
            src="https://www.securicoelectronics.com/wp-content/uploads/2019/10/iMONITOR-India-Logo-2-1-2048x667.png"
            alt="not found img"
            className="h-[59px] w-[181px]"
          />
          <p className="w-[270px] h-[135px]">
            iMONITOR India, brought to you by SECURICO, India’s favourite and
            largest alarm solutions manufacturer, serving the nation for almost
            4 decades!
          </p>
          <button className="w-[250px] h-[37px] bg-red-600 text-2xl border border-white font-lg hover:bg-black cursor-pointer">
            Know More
          </button>
        </div>

        {/* 2 row */}
        <div className="w-[295px] h-[381] flex flex-col gap-3 justify-center">
          <h1 className="w-[248px] h-[36px] font-bold text-2xl mb-2">
            Quick Links
          </h1>
          {[
            'Home',
            'About Us',
            'Industries We Serve',
            'Services We Offer',
            'Securico News',
            'Crime News',
          ].map((link) => (
            <p
              key={link}
              className="hover:text-red-600 hover:cursor-pointer font-semibold"
            >
              {link}
            </p>
          ))}
        </div>

        {/* 3 row */}
        <div className="w-[300px] h-[381] flex flex-col justify-center">
          <h2 className="w-[253px] h-[50px] -mt-12 font-bold text-2xl ">
            Contact Us
          </h2>
          <div className="flex gap-2">
            <LocationOnIcon color="brown" />
            <p className="w-[253px] h-[96px]">
              Securico Electronics India Limited, Securico House, Plot No.4,
              14/3, Delhi-Mathura Road, Faridabad, Haryana-121003, India
            </p>
          </div>
          <div className="flex items-center gap-4 mt-1 text-brown">
            <IoIosCall size={25} color="brown" />
            +91-129-4270000
          </div>
          <div className="w-[263px] h-[37px] text-2xl font-bold mt-3">
            Follow Us
            <div className="flex items-center gap-4 mt-8">
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
          </div>
        </div>

        {/* 4 row */}
        <div className="w-[300px] h-[381px] flex justify-center mt-2 gap-3 flex-col">
          <h1 className="w-[241px] h-[34px] text-2xl font-bold">
            Request a Call Back
          </h1>
          <div className="mt-3">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder={'Your Name'}
              className="px-1 text-black w-[249px] h-[41px] rounded-[3px] mt-2"
            />
            <input
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              type="text"
              placeholder={'Your Mobile'}
              className="px-1 text-black w-[249px] h-[41px] rounded-[3px] mt-2"
            />
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              type="text"
              placeholder="Your City"
              className="px-1 w-[249px] text-black h-[41px] rounded-[3px] mt-2"
            />
            <button
              onClick={submitFunctions}
              className="bg-red-600 border border-white font-bold w-[249px] h-[41px] mt-2"
            >
              Send
            </button>
          </div>
        </div>
      </div>

      {/* bottom part */}
      <div className="relative w-full h-[64px]  border-white border-t-2 text-center">
        <p className="mt-5">2024 © All rights reserved by Securico</p>
      </div>
    </div>
  );
};

export default Footer;
