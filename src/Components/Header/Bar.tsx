import React from "react";
//importar imagenes
import linkedinLogo from '../../imgs/linkedin-logo.png'

function Bar(){
    return(
        <div className="row m-1 bar-root align-items-center border-top-0  border-light border">
            <div className="col-6">
                <p className="mb-0 text-bits"> Bienvenido!!</p>
            </div>
            <div className="col-2 align-items-center">
                <p className="mb-0 text-bits" >About ME!</p>
            </div>
            <div className="col-2 align-items-center text-center ">
                <p className="mb-0 text-bits" >Contact ME!</p>
            </div>
            <div className="col-2 text-center ">
                <img src={linkedinLogo} className="bar-img" alt="" />
            </div>
        </div>
    )
}

export default Bar;