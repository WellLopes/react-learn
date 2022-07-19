import { getElementError } from '@testing-library/react';
import React from 'react';
import { useState, useEffect } from 'react';
import '../Ifoodcounter/Ifoodcounter.css';

function IfoodCounter() {

  const [value, setValue] = useState(1)
  const [buttonStyle, setButtonStyle] = useState('counter-button-minus-active')

  useEffect(() => {
    console.log(`o estilo do botão atual é ${buttonStyle}`)
  },[buttonStyle])

  function down() {

    if (value <= 1) {
      setButtonStyle('counter-button-minus-desactive')
    }

    if (value > 0) {
      setValue(value - 1)
    }
  }

  function up () {
    setValue(value + 1)
    setButtonStyle('counter-button-minus-active')
  }

  return (
    <div className='countex-wrapper'>
      <button 
        className={buttonStyle}
        onClick={down}
      >
        -
      </button>
      <p>{value}</p>
      <button 
        onClick={up}
        className='counter-button-plus-active'
      >
        +
      </button>
      
      <button id='moeda'>
        12,00
      </button>



    </div>
  )
}

export default IfoodCounter