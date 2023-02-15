import React from "react";
//importar diccionario
import diccionario from "../../diccionario/switch";
import linkedinLogo from '../../imgs/linkedin-logo.png'

function Bar({ onClickButtom, onClickLogo }: any){
    return(
        <div className="row mx-1 mt-2 mb-5 bar-root align-items-center border-light border-bottom">
            <div className="col-6">
                <p className="mb-0 text-bits click" onClick={() => onClickButtom(0)}>{diccionario.menu.bienvenida}</p>
            </div>
            <div className="col-2 align-items-center">
                <p className="mb-0 text-bits click" onClick={() => onClickButtom(1)}>{diccionario.menu.about}</p>
            </div>
            <div className="col-2 align-items-center text-center">
                <p className="mb-0 text-bits click" onClick={() => onClickButtom(2)}>{diccionario.menu.contact}</p>
            </div>
            <div className="col-2 text-center " >
                <img onClick={onClickLogo} src={linkedinLogo} className="bar-img click" alt="" />
            </div>
        </div>
    )
}

export default Bar;