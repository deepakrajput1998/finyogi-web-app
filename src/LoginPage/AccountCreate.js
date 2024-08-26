import React from 'react'
import './AccountCreate.css'
import InputFieldFloatingLabel from '../InputSection/InputFieldFloatingLabel'
import { useNavigate } from 'react-router-dom'
function AccountCreate() {
 const navigate= useNavigate()

    const gotoLoginPageHandler= ()=>{
        navigate('/login',{state:{
          type: 'login'
        }})
      }
  return (<>
  
            <h1 className='form--title mb-70'>Create an account</h1>
            <div className='form--wrapper'>
                <InputFieldFloatingLabel
                    labelId={'user-name'}
                    label={'Enter Your Username'}
                    inputType={'text'}
                    placeholder={'Enter Your Username'}
                />

                <InputFieldFloatingLabel
                    labelId={'user-email'}
                    label={'Enter Your Email'}
                    inputType={'email'}
                    placeholder={'Enter Your Email'}
                />

                <InputFieldFloatingLabel
                    labelId={'phone-number'}
                    label={'Enter Your Phone Number'}
                    inputType={'number'}
                    placeholder={'Enter Your Phone Number'}
                />

                <InputFieldFloatingLabel
                    labelId={'enter-password'}
                    label={'Enter Your Password'}
                    inputType={'password'}
                    placeholder={'Enter Your Password'}
                />
            </div>

            <div className='form--submit'>
                <button type='button' className='btn--submit'>Sign Up</button>
                <div className='sign-up-block'>
                    <span className='signup--text'>Already have an account?</span>
                    <button onClick={()=>{
                        gotoLoginPageHandler()
                    }}type='button' className='btn--sign-up text--underline'>Login</button>
                </div>  
            </div>
        </>
  )
}

export default AccountCreate