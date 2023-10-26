import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { pushRegister } from '../../services/firebase'
import ButtonCreate from '../Button/ButtonCreate'
function Create() {
    // Array de microfonistas
    const microfonistasArray =  [
        "Augusto Villalon",
        "Alberto Robledo",
        "Alejandro Bosch",
        "Cristian Alasino",
        "Damian Veras",
        "Ezequiel Aguirre",
        "Ezequiel Luna",
        "Gustavo Pellegrini",
        "Horacio Gutierrez",
        "John Rodriguez",
        "Jorge Quinteros",
        "Jorge De Angelis",
        "Maximo Rodriguez",
        "Mario Rivas",
        "Marcelo Aguilera",
        "Martin Aguirre",
        "Martin Bosch",
        "Martin Villalon",
        "Nicolás Díaz",
        "Gabriel D Oliveira",
        "Pablo Curiale",
        "Raul Aguirre",
        "Ricardo Gimenez",
        "Rolando Rothfuss",
        "Sergio Varela"
    ]  

    // Date que se consigue sin form
    let today = new Date().toLocaleDateString().split("/")
    let todayDate = (today[0] + "-" + today[1] + "-" + today[2])
    const onHandleSubmit = (e) => {
        e.preventDefault()

        // Se consigue del form si se puso, o sino de la variable todayDate
        let targetDateValue = e.target.date.value.split("-")
        let targetDate = (targetDateValue[2] + "-" + targetDateValue[1] + "-" + targetDateValue[0])
        let dateTime = targetDate || todayDate

        // datos conseguidos
        let date = dateTime
        let sonido = e.target.sonido.value
        let video = e.target.video.value
        let plataforma = e.target.plataforma.value
        let aux = e.target.aux.value
        let mic3p1 = e.target.mic3p1.value
        let mic3p2 = e.target.mic3p2.value
        let mic4p1 = e.target.mic4p1.value
        let mic4p2 = e.target.mic4p2.value
    
        let values = {
            date : date,
            sonido: sonido,
            video: video,
            plataforma: plataforma,
            aux: aux,
            mic3p1: mic3p1,
            mic3p2: mic3p2,
            mic4p1: mic4p1,
            mic4p2: mic4p2
        }
        
        console.log("datos finales")
        console.log(values)
    
        pushRegister(values)
    }


  return (
<div className="create-container">
    {/* FLECHA VOLVER */}
    <div className="create-back-container">

            <Link to="../" className="create-back">
                <svg viewBox="0 -960 960 960">
                <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/>
                </svg>
                Volver
            </Link>
    </div>


    {/* CONTENIDO */} 
    <h1 className="create-h1">Crear registro</h1>
        
    <main className="create-form">
        <form onSubmit={onHandleSubmit} id="create-form">
                
            {/* SONIDO - VIDEO - PLATAFORMA */}
            <div className="form-section form-section-date">
                    <h3>Fecha</h3>
                    <input name="date" type="date" id="date" className="create-date" />
            </div>

            <div className="form-section form-section-aud">
                    <h3>Sonido</h3>
                    <input type="text" name="sonido" id="sonido" className="create-input" list="data-sonido" required />
                    <datalist name="sonido" id="data-sonido">
                        <option value="Martin Aguirre">Martin Aguirre</option>
                        <option value="Ezequiel Aguirre">Ezequiel Aguirre</option>
                        <option value="Ezequiel Luna">Ezequiel Luna</option>
                        <option value="Maximo Rodriguez">Maximo Rodriguez</option>
                        <option value="Gabriel D´ Oliveira">Gabriel D´ Oliveira</option>
                    </datalist>
            </div>

            <div className="form-section form-section-aud">
                    <h3>Video</h3>
                    <input type="text"  name="video" id="video" className="create-input" list="data-video" required />
                    <datalist name="video" id="data-video">
                        <option value="Martin Aguirre">Martin Aguirre</option>
                        <option value="Ezequiel Aguirre">Ezequiel Aguirre</option>
                        <option value="Ezequiel Luna">Ezequiel Luna</option>
                        <option value="Maximo Rodriguez">Maximo Rodriguez</option>
                        <option value="Gabriel D´ Oliveira">Gabriel D´ Oliveira</option>
                    </datalist>
            </div>

            <div className="form-section form-section-plat">
                    <h3>Plataforma</h3>
                    <input type="text"  name="plataforma" id="plataforma" className="create-input" list="data-plataforma" required />
                    <datalist name="plataforma" id="data-plataforma">
                        <option value="Martin Aguirre">Martin Aguirre</option>
                        <option value="Ezequiel Aguirre">Ezequiel Aguirre</option>
                        <option value="Ezequiel Luna">Ezequiel Luna</option>
                        <option value="Maximo Rodriguez">Maximo Rodriguez</option>
                        <option value="Gabriel D´ Oliveira">Gabriel D´ Oliveira</option>
                    </datalist>
            </div>       
                
            <div className="form-section form-section-plat">
                    <h3>Aux Plataforma</h3>
                    <input type="text"  name="aux" id="aux" className="create-input" list="data-aux" required />
                    <datalist name="aux" id="data-aux">
                        <option value="Martin Aguirre">Martin Aguirre</option>
                        <option value="Ezequiel Aguirre">Ezequiel Aguirre</option>
                        <option value="Ezequiel Luna">Ezequiel Luna</option>
                        <option value="Maximo Rodriguez">Maximo Rodriguez</option>
                        <option value="Gabriel D´ Oliveira">Gabriel D´ Oliveira</option>
                      </datalist>
            </div>

            {/* MICROFONOS */}
            <div className="form-section form-section-mic form-section-mic3">
                    <h3>Microfono 3</h3>

                    <div className="mics">
                        <div>
                            <h4>Parte 1</h4>
                            <input type="text"  name="mic3p1" id="mic3p1" className="create-input" list="datalist-mic3-p1" required />
                            <datalist name="mic3p1" id="datalist-mic3-p1">
                            { microfonistasArray.map( (microfonista)=> { return <option value={microfonista}> {microfonista} </option> }) }
                            </datalist>
                        </div>
                    </div>

                    <div className="mics">
                        <div>
                            <h4>Parte 2</h4>
                            <input type="text"  name="mic3p2" id="mic3p2" className="create-input" list="datalist-mic3-p2" required />
                            <datalist name="mic3p2" id="datalist-mic3-p2" >
                            { microfonistasArray.map( (microfonista)=> { return <option value={microfonista}> {microfonista} </option> }) }
                            </datalist>
                        </div>
                    </div>


            </div>

            <div className="form-section form-section-mic form-section-mic4">
                    <h3>Microfono 4</h3>

                    <div className="mics">
                        <div>
                            <h4>Parte 1</h4>
                            <input type="text"  name="mic4p1" id="mic4p1" className="create-input" list="datalist-mic4-p1" required />
                            <datalist name="mic4p1" id="datalist-mic4-p1">
                            { microfonistasArray.map( (microfonista)=> { return <option value={microfonista}> {microfonista} </option> }) }
                            </datalist>
                        </div>
                    </div>

                    <div className="mics">
                        <div>
                            <h4>Parte 2</h4>
                            <input type="text"  name="mic4p2" id="mic4p2" className="create-input" list="datalist-mic4-p2" required />
                            <datalist name="mic4p2" id="datalist-mic4-p2">
                            { microfonistasArray.map( (microfonista)=> { return <option value={microfonista}> {microfonista} </option> }) }
                            </datalist>
                        </div>
                    </div>


            </div>

            <ButtonCreate type="submit" txt="Crear"/>

        </form>

    </main>

</div>
  )
}

export default Create