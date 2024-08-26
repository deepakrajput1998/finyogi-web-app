import React from 'react';
import Breadcrum from '../ProfileSection/Breadcrum';
import QuizNavSection from '../QuizNavSection/QuizNavSection';
import BannerArtical from '../SliderInput/ArticalSection/BannerArtical';
import './QuestionCard.css'
import QuestionFields from './QuestionFields';

function QuestionCard() {
    return (<>
    <Breadcrum
        field1="Quiz"
        field2="Take Quiz"
    />

    <div className='w-1211'>
        <QuizNavSection
            title="Quiz Topic"
            option1="View Questions"
            option2="Retake Quiz"
            option3="End Quiz"
            time="16:35"
            progressSection
        />
    </div>


    <div className='p--t-b-space'>
        <div className='w-1211'>
            <div className='card-s1'>
                <div className='card-s1-title'>Question 2 of 10</div>
                <div className='card-s1-question'>
                    Here is the section you got to put your questions
                </div>
                <ul className='radio--section-ul'>
                    <li>
                        <QuestionFields
                            Question="Option 1"
                            fieldQuestion="f1"
                            checkInput="true"
                        />
                    </li>
                    <li>
                        <QuestionFields
                            Question="Option 2"
                            fieldQuestion="f2"
                        />
                    </li>
                    <li>
                        <QuestionFields
                            Question="Option 3"
                            fieldQuestion="f3"
                        />
                    </li>
                    <li>
                        <QuestionFields
                            Question="Option 4"
                            fieldQuestion="f4"
                        />
                    </li>
                </ul>
            </div>
            <div className='nav--section'>
                <button type='button' disabled>
                    <div className='previous--arrow' />
                </button>
                <button type='button'>
                    <div className='next--arrow' />
                </button>  
            </div>
            <button type='button' className='btn--continue'>Continue</button>
        </div>
    </div>
    <div className='mb-133px'>
        <div className='w-1211'>
            <BannerArtical />
        </div>
    </div>
    </>
  )
}

export default QuestionCard