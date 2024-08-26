import React from 'react';
import iconClock from '../assets/image/icon-clock.svg'
import './QuizNavSection.css'

function QuizNavSection({title,option1,option2,option3,time,progressSection,buttonClass}) {
  return (<>
            <div className='quiz--c1'>
                <div className='quiz--c1-title'>
                    {title}
                </div>
                    {time && 
                        <time className='clock--badge'>
                            <img
                                src={iconClock}
                                width={28}
                                height={28}
                            />
                            <text>{time}</text>
                        </time>
                    }

                    <div className='group--option'>
                        {option1 &&
                            <button type='button' className={`btn--option ${buttonClass}`}>
                                {option1}
                            </button>
                        }
                        {option2 &&
                            <button type='button' className={`btn--option ${buttonClass}`}>
                                {option2}
                            </button>
                        }
                        {option3 &&
                            <button type='button' className={`btn--option text-red ${buttonClass}`}>
                                {option3}
                            </button>
                        }
                    </div>
            </div>
            {
                progressSection &&
                <progress className="progress--bar" value="32" max="100" />
            }
  </>
  )
}

export default QuizNavSection