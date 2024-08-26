import React from 'react'
import InputField from '../InputSection/InputField'
import './VerificationRequired.css'

function VerificationRequired() {
  return (<>
  
            <h1 className='form--title mb-20'>Verification Required</h1>
            <span className='form--subtitle mb-95'>
                To continue, complete this verification step. We've sent an OTP to the email. Please enter it below to complete verification.
            </span>
            <div className='verfiy--input mb-48'>
                <InputField
                    inputType="text"
                    maxLength="1"
                />
                    <InputField
                    inputType="text"
                    maxLength="1"
                />
                    <InputField
                    inputType="text"
                    maxLength="1"
                />
                    <InputField
                    inputType="text"
                    maxLength="1"
                />
            </div>

            <div className='count--section center-text mb-112'>
                <span>Click here to re-send OTP <time>00:56</time></span>    
            </div>
            <div className="form--submit flex--gap">
                <button type="button" className="btn--submit">Validate</button>
                <button type="button" className="btn--second">Cancel</button>
            </div>
  </>
  )
}

export default VerificationRequired