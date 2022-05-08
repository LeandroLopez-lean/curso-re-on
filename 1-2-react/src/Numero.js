import React from "react";


const Numero =() => {
    const miNumero = Math.floor(Math.random() * 10);

    const saludo = <h2>soy leandro</h2>

    return(
        <div>
            Mi Numero aleatorio es: {miNumero}
            {saludo}
            {new Date().toLocaleDateString()}
            {miNumero >= 5 ? <h1>Bien</h1> : <h1>Mal</h1>}
        </div>

    )
}

export default Numero;