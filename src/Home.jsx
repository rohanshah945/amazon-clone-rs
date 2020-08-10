import React from 'react';
import Product from './Product';
import './Home.css';

function Home() {
  return (
    <div className='home'>
      <img
        className='home__image'
        src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
        alt=''
      />

      <div className='home__row'>
        <Product
          id={123451}
          title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses'
          price={615}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/81jgCiNJPUL.jpg'
        />
        <Product
          id={123452}
          title='Kenwood KMX750RD/ KMix Stand Mixer 1000W (Red)'
          price={43257}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/81J8k1depdL._SL1500_.jpg'
        />
      </div>

      <div className='home__row'>
        <Product
          id={123453}
          title='Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens, 16GB Card and Carry Case'
          price={26999}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/914hFeTU2-L._SL1500_.jpg'
        />
        <Product
          id={123454}
          title='Amazon Echo (3rd Gen) – Improved sound, powered by Dolby (Black)'
          price={8249}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/7128HRanJgL._SL1100_.jpg'
        />
        <Product
          id={123455}
          title='Apple iPhone 11 Pro Max (64GB) - Midnight Green'
          price={115100}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/61ers6OzvUL._SL1024_.jpg'
        />
      </div>

      <div className='home__row'>
        <Product
          id={123456}
          title='Samsung 208 cm (82 inches) 8K Ultra HD Smart QLED TV QA82Q900RBKXXL (Black) (2019 Model)'
          price={1199900}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/91HZi3t-TWL._SL1500_.jpg'
        />
      </div>
    </div>
  );
}

export default Home;
