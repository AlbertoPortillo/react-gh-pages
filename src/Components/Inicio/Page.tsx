import React from 'react';

import fotoProfile from '../../imgs/me-photo.jpg'

function Page(){
    return(
        <div className='container-fluid mb-5 mt-5'>
            <div className="row">
                <div className="col-4">
                    <img src={fotoProfile} className="page-foto-perfil"  alt="" />
                </div>
                <div className="col-8">
                    <p className='text-bits page-title' >
                        Hola bienvenido a mi website.
                    </p>
                    <p className='page-text-description mt-5' >
                        Esta es una web, donde yo busco dar a conocer un poco de mi, 
                        al mismo tiempo dar un par de pruebas de mis capacidades,
                        si bien no podran ser todas mis habilidades, seran las posibles a mostrar aqui.
                    </p>
                </div>
            </div>
            <div className="row border-top border-light mt-5 ">

            </div>
        </div>
    )
}

export default Page;