import React from 'react'
import './InputFieldFloatingLabel.css'

function InputFieldFloatingLabel({labelId,label,inputType,placeholder}) {
  return (<>
            <div className='floating--label'>
                <label htmlFor={labelId}>{label}</label>
                <input
                    type={inputType}
                    id={labelId}
                    placeholder={placeholder}
                />
            </div>
  </>
  )
}

export default InputFieldFloatingLabel