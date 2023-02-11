import React from 'react'

export default function ItemCarrousel({ nombre, nivel, img }: any) {
  return (
    <div className="about-carrousel-item">
        <img src={img} alt="" className="about-carrousel-img" />
        <p className="about-carrousel-text-nombre">{nombre}</p>
        <p className="about-carrousel-text-nivel">{nivel}</p>
    </div>
  )
}
