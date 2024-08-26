import React from 'react'
import './SliderInput.css'

function SliderInput({typeInput,placeholder,question,classLabel,typeRange,rangeMin,rangeMax,rangeValue,rangeField}) {
  return (<>

            <div className='question--text'>{question}</div>
            <input
                type={typeInput}
                placeholder={placeholder}
                className={classLabel}
            />
            <input
                type={typeRange}
                min={rangeMin}
                max={rangeMax}
                value={rangeValue}
                className={rangeField}
            />
        </>
  )
}

export default SliderInput