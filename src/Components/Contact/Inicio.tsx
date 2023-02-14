import React, { useState } from 'react'
import '../../styles/contactme.css'
export default function Inicio() {
    const [ formData, setFormData] = useState({
        email: "",
        asunto: "",
        description: "",
        date: ""
    })

    function handleChangeInput(event: any){
        let name = event.target.name;
        let value = event.target.value;
        // console.log(event.target.name, event.target.value)
        setFormData({...formData, [name]: value})
    }

    function handleSubmit(e: any){
        e.preventDefault();
        //pon aqui el codigo que quieras con la info de arriba
    }

    return (
        <div className='container-fluid mb-5 mt-5'>
            <div className="row">
                <p className='text-bits contactme-text-title'>
                ¿Quieres contactarme? 
                </p>
            </div>
            <div className="row">
                <p className='text-bits contactme-text-body'>
                    ¿Estas interesado en mi persona para trabajar contigo o para ti?, Bueno, a diferencia del feminismo de la chica que te gusta, esto tiene solucion, solo debes
                    llenar el formulario que encontraras aqui abajo y yo me pondre en contacto contigo, intenta explicar bien tus intenciones para poder contactarte, ya que si dejas un numero o correo 
                    real para una broma, te tengo noticias, alguien sera visitado por un agente de la DEA y nadie sabra el porque, si despues de esta larga explicacion sigues interesado, 
                    no creo que tu empresa tengan la moral que este mundo quiere, pero tienes justo la que yo necesito asi que mas que nadie porfavor llena este formulario
                </p>
            </div>
            <div className="row mt-5">
                <form action="" onSubmit={handleSubmit} >
                    <div className="row align-middle align-content-center text-center">
                        <div className="col-3  align-self-center">
                            <label htmlFor="" className='text-bits contactme-text-labels'>
                                Correo
                            </label>
                        </div>
                        <div className="col-9">
                            <input value={formData.email} type="text" name="email" onChange={handleChangeInput} />
                        </div>
                    </div>
                    <div className="row align-middle align-content-center text-center">
                        <div className="col-3  align-self-center" >
                            <label htmlFor="" className='text-bits contactme-text-labels'>
                                Asunto
                            </label>
                        </div>
                        <div className="col-9">
                            <input value={formData.asunto} type="text" name="asunto" onChange={handleChangeInput}/>
                        </div>
                    </div>
                    <div className="row align-middle align-content-center text-center">
                        <div className="col-3  align-self-center">
                            <label htmlFor="" className='text-bits contactme-text-labels'>
                                Descripción
                            </label>
                        </div>
                        <div className="col-9">
                            {/* <input type="text" name="description" onChange={handleChangeInput} multiple/> */}
                            <textarea value={formData.description} className='contact-text-description' onChange={handleChangeInput} name="description" rows={4} ></textarea>
                        </div>
                    </div>
                    <div className="row align-middle align-content-center text-center">
                        <div className="col-3  align-self-center" >
                            <label htmlFor="" className='text-bits contactme-text-labels'>
                                Fecha maxima de respuesta
                            </label>
                        </div>
                        <div className="col-9">
                            <input value={formData.date} type="date" name="date" onChange={handleChangeInput}/>
                        </div>
                    </div>
                    <div className="row align-middle align-content-center text-center mt-5">
                        <div className="col-12">
                            <button className=''>Enviar!</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
