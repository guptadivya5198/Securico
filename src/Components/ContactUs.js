import React, { useState } from 'react';
import Footer from './Footer';
import axios from 'axios';

const ContactUs = () => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastEmail] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setcontact] = useState('');
  const [orgzname, setOrgzName] = useState('');
  const [message, setMessage] = useState('');

  async function submitFunction() {
    const reqBody = {
      firstname: firstname,
      lasttname: lastname,
      email: email,
      contact: contact,
      orgzname: orgzname,
      message: message,
    };

    await axios
      .post('http://192.168.166.232:9000/api/contactus', reqBody)
      .then((result) => {
        alert(result?.data?.msg);
        setFirstName('');
        setLastEmail('');
        setEmail('');
        setcontact('');
        setOrgzName('');
        setMessage('');
      })
      .catch((e) => {
        console.log(e);
      });
  }
  return (
    <div className="w-[1535px] h-[1058px] text-white flex flex-col items-center justify-center ">
      <div className="w-full h-[550px] grid grid-cols-2  bg-gray-700 shadow-lg p-20">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Get in touch for any kind of help and information
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold flex items-center">
                <span className="mr-3 text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 12m4.243 4.243A9 9 0 1117.657 2.343a9 9 0 010 12.728z"
                    />
                  </svg>
                </span>
                Our head office address
              </h3>
              <p className="text-gray-300">
                Securico Electronics India Limited, Securico House, Plot No.4,
                14/3, Delhi-Mathura Road, Faridabad, Haryana-121003, India
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold flex items-center">
                <span className="mr-3 text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 10h11M9 21v-8.586l-3.293 3.293m0-6.586L9 8.414M21 21l-9-9"
                    />
                  </svg>
                </span>
                Call for help
              </h3>
              <p className="text-gray-300">+91-129-4270000</p>
              <p className="text-gray-300">(91) 99100-55100</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold flex items-center">
                <span className="mr-3 text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 12H8m8 0a8 8 0 11-16 0 8 8 0 0116 0z"
                    />
                  </svg>
                </span>
                Mail us for information
              </h3>
              <p className="text-gray-300">info@www.securicoelectronics.com</p>
              <p className="text-gray-300">sales@www.securicoelectronics.com</p>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name*"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring focus:ring-red-500"
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring focus:ring-red-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Your Email*"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring focus:ring-red-500"
              />
              <input
                type="text"
                placeholder="Phone Number*"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring focus:ring-red-500"
              />
            </div>
            <input
              type="text"
              placeholder="Name of your organization*"
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring focus:ring-red-500"
            />
            <textarea
              placeholder="Message..."
              rows="4"
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring focus:ring-red-500"
            ></textarea>
            <button
              onClick={submitFunction}
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition"
            >
              Send Now
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
