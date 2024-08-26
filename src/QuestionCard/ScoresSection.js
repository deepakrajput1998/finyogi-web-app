import React from 'react';
import Breadcrum from '../ProfileSection/Breadcrum';
import QuizNavSection from '../QuizNavSection/QuizNavSection';
import BannerArtical from '../SliderInput/ArticalSection/BannerArtical';
import ChartSection from './ChartSection';
import './ScoresSection.css'

function ScoresSection() {
  return (<>
    <Breadcrum
        field1="Quiz"
        field2="Take Quiz"
    />
    <div className='w-1211'>
        <div className='sc--cdr'>
            <QuizNavSection
                title="Scores"
                option1="Retake Quiz"
                option2="Show Answers"
                borderColor="blue-border"
                buttonBg="blue-bg"
            />    
        </div>
    </div>

    <div className='w-1211'>
        <div className='score--card'>
            <div className='score--items'>
                <span className='score--title'>Score Card</span>
                <span className='score--topic'>Topic Of Test</span>
                <span className='score--value'>Score:10/50</span>
                <div className='chart--main'>
                    <ChartSection />    
                </div>
                {/* <div className='chart--indicator'>
                    <div className='indicator--items color-green'>
                        <div />  
                        <span>Correct</span>  
                    </div>
                    <div className='indicator--items color--red'>
                        <div />  
                        <span>Wrong</span>  
                    </div>
                    <div className='indicator--items color--yellow-2'>
                        <div />  
                        <span>Skipped</span>  
                    </div>
                </div> */}
            </div>
        </div>
        <div className='re--section-mw'>
            <button type='button' className='btn--rq-bg'>Retake Quiz</button>  
            <button type='button' className='btn--rq-border'>View Answers</button>  
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

export default ScoresSection