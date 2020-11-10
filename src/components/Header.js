import React from 'react';
import NombreUsuario from './NombreUsuario';
import Avatar from './imagen';

const Header = () => {
    const user = {
        nombre:"Daniel",
        apellido:"Cisneros"
    }

    return(<header>
        <h1>ComIT</h1>
        <div id="components">
            <NombreUsuario nombre={user.nombre} apellido={user.apellido}/>
            <Avatar />
        </div>
        </header>
            
    )
}


export default Header;