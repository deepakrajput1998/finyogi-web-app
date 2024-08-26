import React from 'react';
import DownloadApp from '../DownloadApp/DownloadApp';
import ProfileHeader from '../Header/ProfileHeader';
import PointerSection from '../PointerSection/PointerSection';
import ProfileFooter from '../ProfileSection/ProfileFooter';
import photo2 from '../assets/image/contactUs/photo-2.png'
import iconCall from '../assets/image/contactUs/call.svg'
import iconMsg from '../assets/image/contactUs/msg.svg'
import iconLocation from '../assets/image/contactUs/lctn.svg'
import './ContactUs.css'
import ContactUsInput from './ContactUsInput';
import TextArea from './TextArea/TextArea';

function ContactUs() {
  return (<>

            <div className='full--container'> 
                <div className='main--section'>
                    <div className='contact--top'>
                        <div className='contact--left'>
                            <div className='contact--left-inner'>   
                                <PointerSection
                                    title="Contact Us"
                                    colorText="text--white"
                                />
                                <span className='big--title'>Feel Free Reach Us</span>
                            </div>
                        </div>
                    </div>
                    <div className='w-1211'>
                        <div className='get--in-touch'>
                            <div className='get--in-image'>
                                <img
                                    src={photo2}
                                    width={615}
                                    height={477}
                                    alt="photo"
                                />
                            </div>
                            <div className='get--in-right'>
                                <PointerSection
                                    title="Let’s Talk"
                                    colorText="text--black"
                                />
                                <span className='get--tuch-title'>Get in touch with us</span>
                                <span className='get--tuch-info'>
                                    Completely synergize resource taxing relationships via premier niche ynamically innovate state of the art customer service.
                                </span>
                                <div className='get--in-details'>
                                    <div className='get--in-items'>
                                        <div className='get-in-icon'>
                                            <img
                                                src={iconCall}
                                                width={71}
                                                height={71}
                                                alt="call icon"
                                            />
                                        </div>
                                        <div className='get--items-info'>
                                            <span className='get--text'>Have any question?</span>
                                            <span className='get--sub-text'>Free +01 569  896 654</span>
                                        </div>
                                    </div>
                                    <div className='get--in-items'>
                                        <div className='get-in-icon'>
                                            <img
                                                src={iconMsg}
                                                width={71}
                                                height={71}
                                                alt="call message"
                                            />
                                        </div>
                                        <div className='get--items-info'>
                                            <span className='get--text'>Write email</span>
                                            <span className='get--sub-text'>Info@whitecollar.com</span>
                                        </div>
                                    </div>
                                    <div className='get--in-items'>
                                        <div className='get-in-icon'>
                                            <img
                                                src={iconLocation}
                                                width={71}
                                                height={71}
                                                alt="call location"
                                            />
                                        </div>
                                        <div className='get--items-info'>
                                            <span className='get--text'>Visit anytime</span>
                                            <span className='get--sub-text'>King Street, Prior Lake, New York</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-1211'>
                        <div className='contact--form-section'>
                            <div className='contact--form-header'>
                                <PointerSection
                                    title="Contact Us"
                                    colorText="text--black"
                                />
                                <span className='contact--header-title'>Request A Call Back !</span>
                            </div>
                            <div className='contact--form-body'>
                                <div className='col--2 sm--col-1'>
                                    <ContactUsInput
                                        typeInput="text"
                                        inputClass="input--contact"
                                        labelName="Your Name"
                                    
                                    />    
                                </div>
                                <div className='col--2 sm--col-1'>
                                    <ContactUsInput
                                        typeInput="email"
                                        inputClass="input--contact"
                                        labelName="Email Address"
                                    />     
                                </div>
                                <div className='col--2 sm--col-1'>
                                    <ContactUsInput
                                        typeInput="text"
                                        inputClass="input--contact"
                                        labelName="Phone Number"
                                    />         
                                </div>
                                <div className='col--2 sm--col-1'>
                                    <ContactUsInput
                                        typeInput="text"
                                        inputClass="input--contact"
                                        labelName="Subject"
                                    />     
                                </div>
                                <div className='col-1'>
                                    <TextArea
                                        inputClass="input--contact"
                                        labelName="Message..."
                                    /> 
                                </div>
                            </div>
                            <div className='contact--form-footer'>
                                <button type='button' className='btn--contact-submit'>Submit</button>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  </>
  )
}

export default ContactUs