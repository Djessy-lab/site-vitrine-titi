/* eslint-disable no-unused-vars */
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const baseSrc = '/src/assets/slider'
const datas = [
  {
    id: 1,
    image: `${baseSrc}1.JPG`,
    title: '300 GTX',
    description: '1H - 200€ / 2H - 320€ / 4H - 400€'
  },
  {
    id: 2,
    image: `${baseSrc}2.JPG`,
    title: '230 WAKE PRO',
    description: '1H - 180€ / 2H - 290€ / 4H - 360€'
  },
  {
    id: 3,
    image: `${baseSrc}3.JPG`,
    title: '170 GTI',
    description: '1H - 160€ / 2H - 260€ / 4H - 320€'
  },
  {
    id: 4,
    image: `${baseSrc}4.JPG`,
    title: 'SPARK TRIXX',
    description: '1H - 120€ / 2H - 200€ / 4H - 250€'
  },
]


const Slider = () => {
  return (
    <div className='contain'>
      <Carousel
        autoPlay
        interval={6000}
        infiniteLoop
        showStatus={false}
      >
        {datas.map((slide) => (
          <div key={slide.id}>
            <img className='imageCarousel' src={slide.image} alt={slide.title} />
            <div className="overlay">
              <h2 className='overlay_title text-3xl text-emerald-100 italic'>{slide.title}</h2>
              <p className='overlay_description'>{slide.description}</p>
            </div>
          </div>
        )

        )}
      </Carousel>
    </div>
  )
}

export default Slider
