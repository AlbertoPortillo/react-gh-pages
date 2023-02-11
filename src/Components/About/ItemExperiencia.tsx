import React from 'react'
let desc: Array<string>;

export default function ItemExperiencia({foto, empresa, tiempo, description}: {foto: any, empresa:string, tiempo:string, description: string[]}) {
    let mensaje:string = "hola pelotudo"
  return (
    <div className='card bg-dark bg-gradient text-light experiencia-item-body m-5'>
        <div className="row">
            <div className="col-md-4 experiencia-item-sidefoto my-3">
                    <img src={foto} alt="" className="experiencia-item-img" />
            </div>
            <div className="col-md-8 px-3 my-3">
                <div className="card-block px-6">
                    <p className="experiencia-item-nombre text-bits mb-0">{empresa}</p>
                    <p className="experiencia-item-tiempo mb-0">{tiempo}</p>
                    <div className='experiencia-item-description'>
                        {description.map((item:string)=> <p className="experiencia-item-description-list mb-0">{item}</p>)}
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
