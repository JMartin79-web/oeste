import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
//import { getDatos, getCategoryDatos } from "../../services/firebase";

function Register() {
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
    
    </main>




</div>

)
}

export default Register