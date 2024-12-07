import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar';
import MySwiper from './Components/MySwiper';
import About from './Components/About';
import Choose from './Components/Choose';
import InfraStru from './Components/InfraStru';
import Brands from './Components/Brands';
import Bussinesspage from './Components/Bussinesspage';
import Footer from './Components/Footer';
import AboutSecurico from './Components/Inside components/AboutSecurico'; // Import the AboutSecurico component
import Solution from './Components/Solution';
import CentralMonitoring from './Components/Inside components/CentralMonitoring';
import ContactUs from './Components/ContactUs';
import IPBasedProduct from './Components/Inside components/IPBasedProduct';
import Neuron from './Components/Inside components/Neuron';

const slides = [
  {
    image:
      'https://www.securicoelectronics.com/wp-content/uploads/2020/12/Home-Page-Banner_4-700x300.jpg',
  },
  {
    image:
      'https://assets.indiaonline.in/businessimg/gallery/650/3136334_afffe.jpg',
  },
  {
    image:
      'https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2022-04/future-artificial-intelligence-robot-cyborg_0.jpg',
  },
  {
    image:
      'https://media.licdn.com/dms/image/v2/C4D22AQHBg-NxfakwmA/feedshare-shrink_800/feedshare-shrink_800/0/1674193082574?e=2147483647&v=beta&t=HNt6u0_uwTY3ftdThUepRemP6feZbsSxO1fb9KVZMmA',
  },
];

function App() {
  return (
    <div className="overflow-x-hidden">
      <NavigationBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MySwiper slides={slides} />
              <About />
              <Choose />
              <InfraStru />
              <Brands />
              <Bussinesspage />
              <Footer />
            </>
          }
        />
        <Route path="/" element={<MySwiper />} />
        <Route path="/aboutsecurico" element={<AboutSecurico />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/centralmonitoring" element={<CentralMonitoring />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/ipbasedproduct" element={<IPBasedProduct />} />
        <Route path="/neuron" element={<Neuron />} />
      </Routes>
    </div>
  );
}

export default App;
