/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';


const Tarifs = () => {
  return (
    <div className='section-tarifs'>
      <h1 className='text-3xl'>Nos tarifs : </h1>
      <br />
      <p className='italic' >Essence comprise dans le tarif jusqu'a 2H de location</p>
      <br />
      <p><span className='font-bold'>Forfait Aventure d'une heure : </span> 300 GTX : 200€ / 230 WAKE PRO : 180€ / 170 GTI : 160€ / SPARK TRIXX : 120€</p>
      <p><span className='font-bold'>Découverte de deux heures : </span> 300 GTX : 320€ / 230 WAKE PRO : 290€ / 170 GTI : 260€ / SPARK TRIXX : 200€</p>
      <p><span className='font-bold'>Expérience complète (4 heures) : </span> 300 GTX : 400€ / 230 WAKE PRO : 360€ / 170 GTI : 320€ / SPARK TRIXX : 250€</p>
      <br />
      <p>Pour chaque location, nous exigeons une caution de 2500€ en empreinte bancaire ou en espèces, sauf pour le Spark Trixx pour lequel la caution est de 1500€.</p>
    </div>
  )
}

export default Tarifs
