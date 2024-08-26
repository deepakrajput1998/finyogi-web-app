import React from 'react'
import InputField from '../InputSection/InputField'
import './CreatePassword.css'

function CreatePassword() {
  return (<>
            <h1 className='form--title mb-20'>Create Password</h1>
            <span className='form--subtitle mb-57'>We’ll ask this password whenever you sign in.</span>
            <div className='form--wrapper'>
                <InputField
                    label={"Password"}
                    inputType={'Password'}
                    placeholder={'New password'}
                />
                <InputField
                    label={"Confirm password"}
                    inputType={'Password'}
                    placeholder={'Confirm password'}
                />
            </div>
            <div className='form--submit flex--gap'>
                <button type='button' className='btn--submit'>Update</button>
                <button type='button' className='btn--second'>Cancel</button>
            </div>
  </>
  )
}

export default CreatePassword