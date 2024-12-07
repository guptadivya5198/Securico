import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation'; // Navigation styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Autoplay } from 'swiper/modules';

const Brands = () => {
  const logos = [
    'https://3.imimg.com/data3/OS/KN/MY-8349383/mankind-pharma.jpg',
    'https://img.etimg.com/thumb/width-1200,height-900,imgsize-35079,resizemode-75,msid-45329585/industry/cons-products/food/india-emerges-as-dominos-biggest-market-outside-us.jpg',
    'https://www.baghospital.com/images/NewClient/MaxBupa.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmHTTOhxSePYAlUkLqNJVR5lQs4ifNygBPkQ&s',
    'https://5.imimg.com/data5/SELLER/Default/2021/11/HH/SV/VP/51816409/msme-registration-services-500x500.jpeg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWv4ofa2cUEmYEPYCaRoW7zfP6PCk0dG39MQ&s',
    'https://upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png',
    'https://www.dess.digital/wp-content/uploads/2021/10/3-3.png',
    'https://1000logos.net/wp-content/uploads/2020/10/Rado-logo-1988.jpg',
    'https://i.pinimg.com/originals/2a/2c/1d/2a2c1d90075390b22e7e6060254dab0d.jpg',
    'https://gvkone.com/wp-content/uploads/2021/08/GVKWB_Shopper-Stop.png',
    'https://www.titancompany.in/sites/default/files/Titan-Logo-Black_0.png',
    'https://i0.wp.com/www.govtjobs.co.in/wp-content/uploads/2024/07/UCO_Bank_Logo.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTobNwF8tH1c7yUIIa1yiavlt0hr1ovIj5r5A&s',
    'https://c.ndtvimg.com/2024-06/mr51ho8o_zomato-logo-stock-image_625x300_03_June_24.jpg?im=FeatureCrop,algorithm=dnn,width=650,height=400',
    'https://thumbs.dreamstime.com/b/vodafone-logo-illustration-editorial-vodafone-logo-illustration-editorial-white-background-editorial-illustrative-illustration-168841213.jpg',
    'https://i.pinimg.com/736x/8f/8b/56/8f8b56b7e2646be4b2a1f885e8903746.jpg',
    'https://observenow.com/wp-content/uploads/2024/09/axis.png',
    'https://www.apollohospitals.com/kolkata/wp-content/themes/apollo/images/news-default-thumb.jpg',
    'https://i.pinimg.com/originals/64/e9/95/64e9955b86be940c0b91e929c21190a3.png',
    'https://selvamtech.edu.in/wp-content/uploads/2014/07/canara-bank-logo-400x300.jpg',
    'https://gwaliorplus.com/wp-content/uploads/2023/06/tata-croma-gwaliro-1.png',
    'https://iconape.com/wp-content/files/xr/203316/svg/203316.svg',
    'https://media.designrush.com/inspiration_images/291693/conversions/ford_logo_0_c4103a3013ad-mobile.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiN4oU2fZbtSrdOPlpPC8DBRclNNtMAhguCg&s',
    'https://pbs.twimg.com/profile_images/1524284777616277505/tVLDemZd_400x400.jpg',
    'https://logowik.com/content/uploads/images/idfc-first-bank8846.jpg',
    'https://media.assettype.com/bloombergquint%2F2023-01%2F0dbc6c44-3d43-4d2d-9c71-806aa0152474%2Ficici_bank_vector_logo.png?rect=0%2C0%2C889%2C500&w=1200',
    'https://content3.jdmagicbox.com/comp/bangalore/q5/080pxx80.xx80.190208153721.g6q5/catalogue/muthoot-finance-ltd-kammagondanahalli-bangalore-money-transfer-agencies-jsnGUqjzJr.jpg',
    'https://media.licdn.com/dms/image/v2/D4D0BAQHDI_WVzzTHTw/company-logo_200_200/company-logo_200_200/0/1688447745496/mercedes_benz_t__t_motors_ltd_logo?e=2147483647&v=beta&t=M22yT-C3wqak3RRyvE4TOKjSra4YBaOnVfd9FqMgWKw',
    'https://cdn.pixabay.com/photo/2017/08/22/11/56/linked-in-2668700_1280.png',
    'https://play-lh.googleusercontent.com/wpnNPYIrdHC3Q_bcFXGpwoMvFvvvQnZJHmFKzumq5ZTRZKIzfxURAUGOMqhPhVxnggY=w600-h300-pc0xffffff-pd',
  ];

  return (
    <div className="w-[1535px] h-[346px] bg-yellow-50">
      <h1 className="w-[80%] mx-auto h-[96px]  text-center text-4xl font-bold">
        Mega Brands <br /> Who Trusted Securico
      </h1>
      <div className="h-[150px] w-full mt-4 flex items-center justify-center">
        {/* Swiper Component */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={true}
          autoplay={{ delay: 3000 }}
          slidesPerView={5}
          spaceBetween={30}
          className="w-full h-full"
        >
          {logos.map((logo, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
            >
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="h-[120px] w-[150px] mt-4 mx-auto object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Brands;
