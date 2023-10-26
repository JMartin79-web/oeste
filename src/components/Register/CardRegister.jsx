import React from 'react'
import Card from './Card'
function CardRegister(props) {
    console.log(props)

    function getMonth(month){
      let mes = parseInt(month)
      if(mes == 1){return(" de enero del ")}
      if(mes == 2){ return(" de febrero del ") }
      if(mes == 3){ return(" de marzo del ") }
      if(mes == 4){ return(" de abril del ") }
      if(mes == 5){ return(" de Mayo del ") }
      if(mes == 6){ return(" de junio del ") }
      if(mes == 7){ return(" de julio del ") }
      if(mes == 8){ return(" de agosto del ") }
      if(mes == 9){ return(" de septiembre del ") }
      if(mes == 10){ return(" de octubre del ") }
      if(mes == 11){ return(" de noviembre del ") }
      if(mes == 12){ return(" de diciembre del ") }
    }

    
    return (
      <div className="display-cards">
        {props.datos.map( (register) => {
          
          let day = register.date.split("-")
          let month = day[1]
          let textMonth = getMonth(month)
          let finalDate = day[0]+ textMonth + day[2]
            return(
                <Card
                id= {register.id}
                date= {finalDate}
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