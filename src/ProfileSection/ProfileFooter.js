import React from 'react'
import logoFooter from '../assets/image/ProfileImages/logo-footer.svg';
import facebookIcon from '../assets/image/ProfileImages/facebook-icon.svg';
import linkedInIcon from '../assets/image/ProfileImages/linkedIn-icon.svg';
import youTubeIcon from '../assets/image/ProfileImages/youtube-icon.svg';
import './ProfileFooter.css'

function ProfileFooter() {
  return (<>
            <footer className='footer--profile'>
                <div className='footer--center'>
                    <img
                        src={logoFooter}
                        width={195}
                        height={55}
                        alt="logo Footer"
                        className='logo--footer'
                    />
                    <div className='privancy-terms'>
                        <button type='button'>Privancy Statement</button>
                        <button type='button'>Terms of Service</button>  
                    </div>
                    <text className='web-com'>Wesite@gmail.com</text>
                    <div className='social-section'>
                        <ul>
                            <li>
                                <div className='social--icon'>
                                    <img
                                        src={facebookIcon}
                                        alt='facebook icon'
                                        width={24}
                                        height={24}
                                    />
                                   <text>Facebook</text> 
                                </div>
                            </li>
                            <li>
                                <div className='social--icon'>
                                    <img
                                        src={linkedInIcon}
                                        alt='linkedIn Icon'
                                        width={24}
                                        height={24}
                                    />
                                    <text>LinkedIn</text>
                                </div>
                            </li>
                            <li>
                                <div className='social--icon'>
                                    <img
                                        src={youTubeIcon}
                                        alt='youTube icon'
                                        width={24}
                                        height={24}
                                    />
                                    <text>YouTube</text>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='footer--copyright'>
                    <text>Copyright &copy; <span className='text--color-1'>FinYog.com</span> | Designed &amp; Developed  by <span className='text--color-2'>FinYogi</span>
                    </text>    
                </div>
            </footer>
  </>
  )
}

export default ProfileFooter