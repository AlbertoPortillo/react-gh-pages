import React from 'react'
//importacion de estilos especiales para esta pestaña 
import '../../styles/aboutme.css'
//importacion de componentes a usar en esta pagina 
import ItemCarrousel from './ItemCarrousel';
import ItemExperiencia from './ItemExperiencia';

export default function AboutMeInicio() {
  return (
    <div className='container-fluid mb-5 mt-5'>
    
        <div className="row">

            <div className="row text-center">
                <p className='text-bits aboutme-text-title '> Experiencia laboral </p>
            </div>

            <div className="row">
                <ItemExperiencia 
                    empresa={"DaCodes"} 
                    tiempo={"jul 2022 - Now"} 
                    foto={require("../../imgs/lenguajesProgra/dacodes.jpg")} 
                    description={[
                        '-Creacion de Servicios con NestJS',
                        '-Manejo de Base de Datos con Firebase',
                        '-Conexion a Servicios de terceros',
                    ]}  
                />
                <ItemExperiencia 
                    empresa={"Oomovil"} 
                    tiempo={"oct 2021 - jul 2022"} 
                    foto={require("../../imgs/lenguajesProgra/oomovil.jpg")} 
                    description={[
                        '-Creacion de Aplicaciones con React Native',
                        '-Manejo de Mapas con React Native',
                        '-Creacion Paginas Web con Codeigniter',
                        '-Manejo de Base de Datos con SQL',
                    ]}  
                />
                <ItemExperiencia 
                    empresa={"Dynamic Solutions"} 
                    tiempo={"sept 2019 - oct 2021"} 
                    foto={require("../../imgs/lenguajesProgra/dynamicSolutions.png")} 
                    description={[
                        '-Creacion de Aplicaciones Web con Laravel',
                        '-Creacion de Aplicaciones Web con ReactJs',
                        '-Creacion de Aplicaciones con React Native',
                        '-Creacion de APIS con ExpressJS',
                        '-Creacion de APIS con .NET',
                        '-Manejo de Mapas con React Native',
                        '-Manejo de Bases de Datos con Firebase',
                        '-Conexion a Servicios de terceros',
                    ]}  
                />
                
            </div>

        </div>
        <div className="row mt-5">

            <div className="row text-center">
                <p className='text-bits aboutme-text-title '> Lenguajes de programacion </p>
            </div>

            <div className="aboutme-carrousel-body">
                <ItemCarrousel nombre={'TypeScript'} nivel={'Avanzado'} img={require("../../imgs/lenguajesProgra/typescript.png")} />
                <ItemCarrousel nombre={'JavaScript'} nivel={'Avanzado'} img={require("../../imgs/lenguajesProgra/javascript.png")} />
                <ItemCarrousel nombre={'PHP'} nivel={'Avanzado'} img={require("../../imgs/lenguajesProgra/php.png")} />
                <ItemCarrousel nombre={'C#'} nivel={'Intermedio'} img={require("../../imgs/lenguajesProgra/csharp.png")} />
                <ItemCarrousel nombre={'Python'} nivel={'Intermedio'} img={require("../../imgs/lenguajesProgra/python.png")} />
                <ItemCarrousel nombre={'Java'} nivel={'Basico'} img={require("../../imgs/lenguajesProgra/java.png")} />
                <ItemCarrousel nombre={'Kotlin'} nivel={'Basico'} img={require("../../imgs/lenguajesProgra/kotlin2.png")} />
            </div>

            <div className="row text-center mt-5">
                <p className='text-bits aboutme-text-title '> Frameworks </p>
            </div>

            <div className="aboutme-carrousel-body">
                <ItemCarrousel nombre={'React JS'} nivel={'Avanzado'} img={require("../../imgs/lenguajesProgra/react.png")} />
                <ItemCarrousel nombre={'React Native'} nivel={'Avanzado'} img={require("../../imgs/lenguajesProgra/react.png")} />
                <ItemCarrousel nombre={'Express JS'} nivel={'Avanzado'} img={require("../../imgs/lenguajesProgra/express.png")} />
                <ItemCarrousel nombre={'Nest JS'} nivel={'Avanzado'} img={require("../../imgs/lenguajesProgra/nest.png")} />
                <ItemCarrousel nombre={'Node'} nivel={'Avanzado'} img={require("../../imgs/lenguajesProgra/node.png")} />
                <ItemCarrousel nombre={'Laravel'} nivel={'Avanzado'} img={require("../../imgs/lenguajesProgra/laravel.png")} />
                <ItemCarrousel nombre={'Codeigniter'} nivel={'Avanzado'} img={require("../../imgs/lenguajesProgra/codeigniter.png")} />
                <ItemCarrousel nombre={'Django'} nivel={'Intermedio'} img={require("../../imgs/lenguajesProgra/django.png")} />
                <ItemCarrousel nombre={'.Net'} nivel={'Intermedio'} img={require("../../imgs/lenguajesProgra/dotnet.png")} />
            </div>

            <div className="row text-center  mt-5">
                <p className='text-bits aboutme-text-title '> Bases de Datos </p>
            </div>

            <div className="aboutme-carrousel-body">
                <ItemCarrousel nombre={'SQL'} nivel={'Avanzado'} img={require("../../imgs/lenguajesProgra/sql.png")} />
                <ItemCarrousel nombre={'Firebase'} nivel={'Avanzado'} img={require("../../imgs/lenguajesProgra/firebase.png")} />
                
            </div>

            <div className="row text-center  mt-5">
                <p className='text-bits aboutme-text-title '> Herramientas Adicionales </p>
            </div>

            <div className="aboutme-carrousel-body">
                <ItemCarrousel nombre={'GIT'} nivel={' '} img={require("../../imgs/lenguajesProgra/git.png")} />
                <ItemCarrousel nombre={'Postman'} nivel={' '} img={require("../../imgs/lenguajesProgra/postman.png")} />
                <ItemCarrousel nombre={'Slack'} nivel={' '} img={require("../../imgs/lenguajesProgra/slack.png")} />
                
            </div>
        </div>

    </div>
  )
}
