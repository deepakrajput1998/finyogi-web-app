import React from 'react'
import './ContactUsInput.css'

function ContactUsInput({typeInput,inputClass,labelName}) {
  return (<>

        <div className={`form--input-cus ${inputClass}`}>
            <input
                type={typeInput}
                placeholder={labelName}
                id={labelName}
            />
            <label htmlFor={labelName}>{labelName}</label>
        </div>
  </>
  )
}

export default ContactUsInput