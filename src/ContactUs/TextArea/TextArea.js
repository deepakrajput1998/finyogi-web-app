import React from 'react';
import './TextArea.css'

function TextArea({inputClass,labelName}) {
  return (<>
            <div className={`form--textarea ${inputClass}`}>
                <textarea placeholder={labelName}/>
                <label htmlFor={labelName}>{labelName}</label>
            </div>
        </>
  )
}

export default TextArea