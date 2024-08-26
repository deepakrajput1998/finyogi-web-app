import React from 'react';
import giftIcon from '../assets/image/gift-icon.svg'
import './QuizHistoryCard.css'

function QuizHistoryCard({titleTopic,dateTime,rankValue,pointValue}) {
  return (<>
            <div className='quiz--card'>
                <div className='quiz--card-header'>
                    <div className='quiz--card-left'>
                        <span className='quiz--title'>{titleTopic}</span>
                        <span className='quiz--date-time'>Date of Attempt: {dateTime}</span>
                    </div>
                    <div className='quiz--icon'>
                        <img
                            src={giftIcon}
                            alt="gift icon"
                            width={47}
                            height={43}
                        />    
                    </div>
                </div>
                <ul className='quiz--point'>
                    <li><span className='rank--point'>Rank: {rankValue}</span></li>
                    <li><span className='rank--point'>Points: {pointValue}</span></li>
                </ul>
                <div className='quiz--btn'>
                    <button type='button' className='btn--colorText'>View Answers</button>
                    <button type='button' className='btn--bgColor'>Retake Quiz</button>   
                </div>
            </div>
        </>
  )
}

export default QuizHistoryCard