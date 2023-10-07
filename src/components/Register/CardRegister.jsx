import React from 'react'
import Card from './Card'
function CardRegister(props) {
    console.log(props)
  return (
    <div className="display-cards">
        {props.datos.map( (register) => {
            
            return(
                <Card
                date= {register.date}
                sonido= {register.sonido}
                video= {register.video}
                plataforma= {register.plataforma}
                aux= {register.aux}

                mic3p1= {register.mic3p1}
                mic3p2= {register.mic3p2}
                mic4p1= {register.mic4p1}
                mic4p2= {register.mic4p2}

                />
            )
        })}
    </div>
  )
}

export default CardRegister