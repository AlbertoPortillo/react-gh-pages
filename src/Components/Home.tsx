//import librerias
import React from 'react';
//importar estilos
import '../styles/home.css'
//importar componentes para Home
import Bar from '../Components/Header/Bar'

function Home(){

    async function click() {
        window.confirm('Really you thing that?') ?window.location.replace('https://www.linkedin.com/in/israel-ledezma/') :alert('Maybe you are David!!!')
    }

    return (
    <div className="bg-dark bg-gradient text-light d-flex">
        <div className="container-fluid ">
            <Bar />

            <p>Cuerpecito</p>
        </div>
    </div>
    );
    
}

export default Home;
