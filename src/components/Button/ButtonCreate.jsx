import React from 'react'
import { useState } from 'react'
function ButtonCreate(props) {
  
    const [click, setClick] = useState(false)
    function onHandleClick(){ setClick(!click) }  
return (
    <button
        className={"button-create"}
        type={props.type}
        onClick={onHandleClick}>
            {props.txt}
    </button>
  )
}

export default ButtonCreate