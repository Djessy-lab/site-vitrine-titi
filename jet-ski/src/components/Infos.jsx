/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import Map from './Map';
import ButtonCall from './ButtonCall';


const Infos = () => {
  return (
    <div className='text-white text-center'>
      <p>
        Bienvenue chez <span className='font-bold underline text-xl'>Jet Set Location</span>, votre adresse incontournable pour une expérience de jetski exceptionnelle à Arcachon ! Vous nous trouverez idéalement situés au <span className='font-bold underline text-xl'>1 Quai Goslar 33120 Arcachon</span>,
          offrant un accès facile aux eaux scintillantes du bassin d'Arcachon.
      </p>
      <Map />
      <ButtonCall />
    </div>
  )
}

export default Infos
