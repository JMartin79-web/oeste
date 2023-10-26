import React from 'react'

function EditButton() {
  return (
    <button className='edit-button'>
      <svg className='edit-icon' viewBox="0 -960 960 960">
        <path d="M120-120v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm584-528 56-56-56-56-56 56 56 56Z"/>
      </svg>
    </button>
  )
}

export default EditButton