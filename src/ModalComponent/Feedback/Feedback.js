import React from 'react';
import profilePicture from '../../assets/image/pofile-picture.png'
import './Feedback.css'

function Feedback() {
  return (<>
            <dialog className='dialog--center'>
                <div className='dialog--outer' />
                <div className='dialog--body'>
                    <div className='dialog--header'>
                        Feedback    
                    </div>
                    <div className='dialog--profile'>
                        <div className='dialog--left'>
                            <div className='dialog--profile-logo'>
                                <img
                                    src={profilePicture}
                                    width={60}
                                    height={60}
                                    alt="profile file"
                                />
                            </div>
                            <div className='dialog--progile-name'>
                                <span className='name-profiler'>Andrew B</span> 
                                <span className='profiler--discripution'>Lorem Ipsum</span>   
                            </div>
                        </div>
                        <button type='button' className='dialog--close'>
                            <div />    
                        </button>
                    </div>
                    <div className='write--section'>
                        <textarea placeholder='Write your feedback or suggestion' className='feedback--area' />
                        <button type='button'>Submit</button>
                    </div>
                </div>
            </dialog>
  </>
  )
}

export default Feedback