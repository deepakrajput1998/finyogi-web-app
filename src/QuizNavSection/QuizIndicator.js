import React from 'react';
import iconCheckList from '../assets/image/checklist-icon.svg'
import './QuizIndicator.css'

function QuizIndicator() {
  return (<>
        <div className='quiz--indi-section'>
            <div className='checklist--left'>
                <div className='checklist--value'>
                    <div className='checklist-number color--yellow'>
                        5
                    </div>
                    <div className='checklist-number color--green'>
                        6
                    </div>
                    <div className='checklist-number color--green'>
                        7
                    </div>
                    <div className='checklist-number color--green'>
                        8
                    </div>
                    <div className='checklist-number color--pink'>
                        9
                    </div>
                    <div className='checklist-number color--pink'>
                        10
                    </div>
                    <div className='checklist-number color--pink'>
                        11
                    </div>
                    <div className='checklist-number color--yellow'>
                        12
                    </div>
                    <div className='checklist-number color--yellow'>
                        13
                    </div>
                    <div className='checklist-number color--green'>
                        14
                    </div>
                    <div className='checklist-number color--green'>
                        16
                    </div>
                    <div className='checklist-number color--green'>
                        17
                    </div>
                    <div className='checklist-number color--green'>
                        18
                    </div>
                    <div className='checklist-number color--green'>
                        19
                    </div>
                    <div className='checklist-number color--green'>
                        20
                    </div>
                    <div className='checklist-number color--green'>
                        21
                    </div>
                    <div className='checklist-number color--green'>
                        22
                    </div>
                    <div className='checklist-number color--green'>
                        23
                    </div>
                    <div className='checklist-number color--green'>
                        24
                    </div>
                    <div className='checklist-number color--green'>
                        26
                    </div>
                </div>
            </div>
            <div className='checklist--section'>
                <img
                    src={iconCheckList}
                />
            </div>
        </div>
  </>
  )
}

export default QuizIndicator