import React from 'react'
import InputField from '../InputSection/InputField'

function ForgetPage() {
  return (<>
            <h1 className='form--title mb-20'>Forgot Password</h1>
            <span className='form--subtitle mb-95'>Enter your login email details below</span>
            <div className='mb-120'>
                <InputField
                    label="Email"
                    inputType="email"
                    placeholder="Enter your Email"
                />
            </div>
            <div className="form--submit flex--gap">
                <button type="button" className="btn--submit">Submit</button>
                <button type="button" className="btn--second">Cancel</button>
            </div>
  </>
  )
}

export default ForgetPage