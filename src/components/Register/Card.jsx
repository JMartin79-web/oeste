import React from 'react'
import { useState } from 'react'


function Card(props) {
    const [click, setClick] = useState(false)
    function onHandleArrowClick(){ setClick(!click) }

  return (
<>

    <div className='card'>
       
        <div className='card-sec-date'>

            <div className='card-sec-date-date'>
                <p className='card-title'>Fecha</p>
                <p className='card-data'> {props.date} </p>
            </div>

            <div className='card-sec-date-icon' onClick={onHandleArrowClick} >
                <svg className={click ? "arrow-clicked" :'arrow'} data-name="arrow">
                    <path className='arrow-path' d="M8,13,.41,5.42a1.43,1.43,0,0,1,0-2h0a1.43,1.43,0,0,1,2,0L8,9l5.58-5.58a1.43,1.43,0,0,1,2,0h0a1.43,1.43,0,0,1,0,2Z"/>
                </svg>
            </div>

        </div>

        <div className={click ? 'card-sec-info-show' : 'card-sec-info-hidden'}>

            <div className='card-sec-data'>

                <div className='card-sec card-sec-sonido'>
                    <p className='card-title'>Sonido</p>
                    <p className='card-data'> {props.sonido} </p>
                </div>

                <div className='card-sec card-sec-sonido'>
                    <p className='card-title'>Video</p>
                    <p className='card-data'> {props.video} </p>
                </div>

                <div className='card-sec card-sec-plataforma'>
                    <p className='card-title'>Plataforma</p>
                    <p className='card-data'> {props.plataforma} </p>
                </div>

                <div className='card-sec card-sec-plataforma'>
                    <p className='card-title'>Auxiliar</p>
                    <p className='card-data'> {props.aux} </p>
                </div>

                <div className='card-sec card-sec-mic-3'>
                    <p className='card-title'>Microfono 3</p>
                    <p className='card-subtitle'>Parte 1</p>
                    <p className='card-data'> {props.mic3p1} </p>

                    <p className='card-subtitle'>Parte 2</p>
                    <p className='card-data'> {props.mic3p2} </p>
                </div>

                <div className='card-sec card-sec-mic-4'>
                    <p className='card-title'>Microfono 4</p>
                    <p className='card-subtitle'>Parte 1</p>
                    <p className='card-data'> {props.mic4p1} </p>

                    <p className='card-subtitle'>Parte 2</p>
                    <p className='card-data'> {props.mic4p2} </p>
                </div>
            </div>

            <div className='card-actions'>
                <div className='card-action card-action-delete'> Borrar </div>
                <div className='card-action card-action-edit'> Editar </div>
            </div>

        </div>

    </div>
</>
  )
}

export default Card