import React from 'react';

import fotoProfile from '../../imgs/me-photo.jpg'

function Page(){
    return(
        <div className='container-fluid mb-4 mt-5 border-bottom boder-light'>
            <div className="row">
                <div className="row">

                    <div className="col-4">
                        <img src={fotoProfile} className="page-foto-perfil"  alt="" />
                    </div>
                    <div className="col-8">
                        <p className='text-bits page-title' >
                            Hola bienvenido a mi pequeña website.
                        </p>
                        <p className='page-text-description mt-5' >
                            Esta es una pequeña web, donde yo busco dar a conocer un poco de mi, 
                            al mismo tiempo dar un par de pruebas de mis capacidades,
                            si bien no podran ser todas mis habilidades, seran las posibles a mostrar aqui.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Page;