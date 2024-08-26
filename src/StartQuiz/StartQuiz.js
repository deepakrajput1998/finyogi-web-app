import React from 'react'
import './StartQuiz.css'
import arIcon from '../assets/image/mweb-arrow.svg';
import arIconDot from '../assets/image/dots-vertical.svg'

function StartQuiz() {
  return (<>
  
  <div className='qzr-pos'>
        <button type='button' className='btn--pre-qr'>
            <img
                src={arIcon}
            />
        </button>
        <span className='sq--text'>Start Quiz</span>
        <div className='sq--mnw'>
            <button type='button' className='btn-mn-dot'>
                <img src={arIconDot} />
            </button>
            <div className='sq--mnw-container'>
                <div className='sq--mnw-item'> List Of Quiz</div>
                <div className='sq--mnw-item it--active'>Retake Quiz</div>
                <div className='sq--mnw-item it--end'>End Quiz</div>
            </div>
        </div>
    </div>
  </>
  )
}

export default StartQuiz