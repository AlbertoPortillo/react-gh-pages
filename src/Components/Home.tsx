//import librerias
import React, {useState} from 'react';
//importar imagenes
import poster from '../imgs/poster2.png';
//importar estilos
import '../styles/home.css'
//importar componentes para Home
import Bar from '../Components/Header/Bar'
import HomePage from '../Components/Inicio/Page';
import AboutMeInicio from './About/AboutMeInicio';

function Home(){
    const [page, setPage] = useState(0)

    async function click() {
        window.confirm('Really you thing that?') ?window.location.replace('https://www.linkedin.com/in/israel-ledezma/') :alert('Maybe you are David!!!')
    }

    async function onLinkedinLogo(){
        window.open("https://www.linkedin.com/in/alberto-antonio-portillo-martinez-590776128/", "_blank")
    }

    async function onFrederickPoster(){
        window.open("https://www.youtube.com/watch?v=USKD3vPD6ZA&ab_channel=MichaelReeves", "_blank")
    }

    async function changePage(newPage:number){
        setPage(newPage)
    }

    return (
    <div className="container-fluid bg-dark bg-gradient text-light overflow-auto">
        <div className="row mx-5">
            <Bar onClickButtom={changePage} onClickLogo={onLinkedinLogo} />
        </div>
        <div className="row mx-5">
            {page === 0 && <HomePage /> }
            {page === 1 && <AboutMeInicio/> }
            {page === 2 && <p>Pagina3</p> }
        </div>


        {
            page === 0 && <div className="row mb-5"> 
                <div className="col-3"></div>
                <div className="col-6">
                    <img src={poster} alt="frederick poster" className='home-posterImg click' onClick={onFrederickPoster} />
                </div>
            </div>
        }
    </div>
    );
    
}

export default Home;
