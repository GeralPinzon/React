import React from 'react';
const HolaMundo = () =>{
    const Hola ='Hola Mundo!';
    const varBandera = false;
    return(
        <div className="HolaMundo">
            <h1>{Hola}</h1>
            <h2>Mi primer componente en React</h2>
            <img src ="https://arepa.s3.amazonaws.com/react.png" alt="React"/>
            {varBandera ? <h4>Bandera va en verdader</h4>:<h5>Bandera va en falso</h5>}
            {varBandera && <h4>bandera unicamente en verdadero</h4>}

        
        </div>
    );
};
export default HolaMundo;