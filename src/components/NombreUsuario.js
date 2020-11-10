import React from 'react';


function NombreUsuario(props){
    return(
        <h4>Hola, {props.nombre} {props.apellido}</h4>
    )
}

export default NombreUsuario;