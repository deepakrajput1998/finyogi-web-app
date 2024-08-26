import React from 'react';
import './CalculatorValue.css'

function CalculatorValue({title,value,valueCa,valueIa}) {
  return (<>
  
            <div className='card--calc-value'>
                <span className='calc-value-title'>{title}</span>
                <span className='calc-value-text'>{value}</span>
                <span className='calc-ca'>{valueCa}</span>
                <span className='calc-ia'>{valueIa}</span>
            </div>
        </>
  )
}

export default CalculatorValue