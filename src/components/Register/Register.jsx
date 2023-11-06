import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { getRegisters } from "../../services/firebase.js";
import CardRegister from "./CardRegister";

function Register() {

    const [datosList, setdatosList] = useState([])
    
    useEffect(()=>{
        getRegisters().then((respuesta) => {
            setdatosList(respuesta)
            console.log("datosList desde register: ", datosList)
        })
    },[])

return (

<div className="register-container">

    <div className="register-back-container">
        <Link to="../" className="register-back">
            <svg viewBox="0 -960 960 960">
            <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/>
            </svg>
            Volver
        </Link>
    </div>

    {/* CONTENIDO */} 
    <h1 className="register-h1">Ver registros</h1>

    <main className="register">

        <div className="register-filter">
            <h3>Filtrar</h3>
        </div>

        <div className="register-data-container">
            <CardRegister datos={datosList} />
        </div>

    </main>




</div>

)
}

export default Register