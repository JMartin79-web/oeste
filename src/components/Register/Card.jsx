import React from 'react'

function Card(props) {
  return (
<>

    <div className='card'>
        <div className='card-actions'>
            <div className='card-action card-action-delete'> Borrar </div>
            <div className='card-action card-action-edit'> Editar </div>
        </div>

        <div className='card-sec-data'>
            <div className='card-sec card-sec-date'>
                <p className='card-title'>Fecha</p>
                <p className='card-data'> {props.date} </p>
            </div>

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
    </div>
</>
  )
}

export default Card