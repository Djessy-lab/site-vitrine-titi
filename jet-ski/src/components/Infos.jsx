/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import Map from './Map';
import ButtonCall from './ButtonCall';


const Infos = () => {
  return (
    <div className='text-white text-center text-xl'>
      <p>
        Bienvenue chez <span className='font-bold underline text-xl'>Jet Set Location</span>, votre adresse incontournable pour une expérience de jetski exceptionnelle à Arcachon ! Vous nous trouverez idéalement situés au <span className=' text-blue-400'><a target='blank' href="https://www.google.fr/maps/place/1+Quai+Goslar,+33120+Arcachon/@44.6572564,-1.1463681,17z/data=!3m1!4b1!4m6!3m5!1s0xd549ed7e6bdfd67:0x50bb6ca3c6cf6ffc!8m2!3d44.6572564!4d-1.1437932!16s%2Fg%2F11h0s90v9s?entry=ttu">1 Quai Goslar 33120 Arcachon</a></span>,
          offrant un accès facile aux eaux scintillantes du bassin d'Arcachon.
      </p>
      <Map />
      <ButtonCall />
    </div>
  )
}

export default Infos
