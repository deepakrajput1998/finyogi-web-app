import React from 'react'
import Breadcrum from './Breadcrum';
import iconProfile from '../assets/image/ProfileImages/rectangle.png';
import iconBtn from '../assets/image/ProfileImages/ic_round-photo.svg';
import './MyProfile.css';
import InputField from '../InputSection/InputField';

function MyProfile() {
  return (<>
           <div className='profile--container'>
                <div className='main--section'>
                    <div className='myProfile--sec'>
                        <Breadcrum />
                    </div>
                    <div className='edit--section'>
                        <div className='edit--main'>
                            <div className='edit--container'>
                                <div className='edit--image'>
                                    <img
                                        src={iconProfile}
                                        alt="rectangle"
                                        width={148}
                                        height={148}
                                    />
                                    <button type='button'>
                                        <img
                                            src={iconBtn}
                                            alt="ic_round-photo"
                                            width={35}
                                            height={35}
                                        />
                                        <input
                                            type={'file'}

                                        />
                                    </button>
                                </div>
                                <div className='edit--image-text'>
                                    <span className='edit--title'>Welcome,</span>
                                    <span className='edit--subtitle'>Rahul Kumar Gupta</span>
                                </div>
                                <div className='logout--section'>
                                        <button type='button' className='btn--prime'>logout</button>
                                    </div>
                            </div>   
                        </div>
                    </div>
                    <div className='form--container'>
                        <div className='profile--form'>
                            <InputField
                                label={"Email ID"}
                                inputType={'email'}
                                placeholder={'rahul@gmail.com'}
                            />
                        </div>
                        <div className='profile--form'>
                            <InputField
                                label={"Date of Birth"}
                                inputType={'date'}
                                placeholder={'10-March-1995'}
                            />
                        </div>
                        <div className='profile--form'>
                            <InputField
                                label={"Phone Number"}
                                inputType={'number'}
                                placeholder={'9140697986'}
                            />
                        </div>
                    </div>
                    <div className='w-1211'>
                        <div className='faq--section'>
                            <div className='faq--items'>
                                <div className='faq--items-header'>
                                    <span className='faq--title'>FAQ</span>
                                    <button type='button' className='faq--btn' />
                                </div>
                            </div>
                            <div className='faq--items'>
                                <div className='faq--items-header'>
                                    <span className='faq--title'>Change Password</span>
                                    <button type='button' className='faq--btn' />
                                </div>
                            </div>
                            <div className='faq--items'>
                                <div className='faq--items-header'>
                                    <span className='faq--title'>Feedback &amp; Suggestions</span>
                                    <button type='button' className='faq--btn' />
                                </div>
                            </div>
                            <div className='faq--items'>
                                <div className='faq--items-header'>
                                <span className='faq--title'>Terms &amp; Conditions</span>
                                    <button type='button' className='faq--btn' />
                                </div>
                            </div>
                            <div className='faq--items'>
                                <div className='faq--items-header'>
                                    <span className='faq--title'>Contact US</span>
                                    <button type='button' className='faq--btn' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  
        </>
  )
}

export default MyProfile