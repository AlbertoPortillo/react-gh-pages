//import librerias
import React, {useState} from 'react';
//importar estilos
import '../styles/home.css'
//importar componentes para Home
import Bar from '../Components/Header/Bar'
import HomePage from '../Components/Inicio/Page';

function Home(){
    const [page, setPage] = useState(0)

    async function click() {
        window.confirm('Really you thing that?') ?window.location.replace('https://www.linkedin.com/in/israel-ledezma/') :alert('Maybe you are David!!!')
    }

    async function onLinkedinLogo(){
        window.open("https://www.linkedin.com/in/alberto-antonio-portillo-martinez-590776128/", "_blank")
    }

    async function changePage(newPage:number){
        setPage(newPage)
    }

    return (
    <div className="bg-dark bg-gradient text-light d-flex">
        <div className="container-fluid">
            <Bar onClickButtom={changePage} onClickLogo={onLinkedinLogo} />
            {page === 0 && <HomePage /> }
            {page === 1 && <p>Pagina2</p> }
            {page === 2 && <p>PAgina3</p> }
            
        </div>
    </div>
    );
    
}

export default Home;
