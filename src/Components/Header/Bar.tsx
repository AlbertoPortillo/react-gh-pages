import React from "react";
//importar imagenes
import linkedinLogo from '../../imgs/linkedin-logo.png'

function Bar({ onClickButtom, onClickLogo }: any){
    return(
        <div className="row m-1 bar-root align-items-center border-light border-bottom">
            <div className="col-6">
                <p className="mb-0 text-bits click" onClick={() => onClickButtom(0)}> Bienvenido!!</p>
            </div>
            <div className="col-2 align-items-center">
                <p className="mb-0 text-bits click" onClick={() => onClickButtom(1)}>About ME!</p>
            </div>
            <div className="col-2 align-items-center text-center">
                <p className="mb-0 text-bits click" onClick={() => onClickButtom(2)}>Contact ME!</p>
            </div>
            <div className="col-2 text-center " >
                <img onClick={onClickLogo} src={linkedinLogo} className="bar-img" alt="" />
            </div>
        </div>
    )
}

export default Bar;