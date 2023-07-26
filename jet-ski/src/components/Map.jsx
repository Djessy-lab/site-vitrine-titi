/* eslint-disable no-unused-vars */
import React from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';

const Map = () => {
  return (
    <div className='containMap mt-4'>
      {/* <img className='imgMap rounded-full' src="/src/assets/MAP.png" alt="" /> */}
      <InnerImageZoom className='imgMap rounded-full' src="/src/assets/MAP.png" zoomSrc='/src/assets/MAP.png'/>
    </div>
  )
}

export default Map
