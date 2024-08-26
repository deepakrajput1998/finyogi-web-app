import React from 'react';
import Breadcrum from '../ProfileSection/Breadcrum';
import QuizIndicator from '../QuizNavSection/QuizIndicator';
import QuizNavSection from '../QuizNavSection/QuizNavSection';
import iconCheck from '../assets/image/check-icon.svg'
import iconClose from '../assets/image/icon-close-fill.svg'
import iconSkiped from '../assets/image/icon-skiped.svg'
import iconCheckWhite from '../assets/image/check-icon-white.svg'
import iconSkipWhite from '../assets/image/skip-icon-white.svg'
import iconcloseWhite from '../assets/image/icon-close-white.svg'
import iconWarning from '../assets/image/icon-warning.svg'
import './RetakeQuiz.css'
import BadgeIndicator from './BadgeIndicator';
import StartQuiz from '../StartQuiz/StartQuiz';

function RetakeQuiz() {
  return (<>
<div className='sm-none'>
    
    <Breadcrum
            field1="Quiz"
            field2="Answers"
    />
</div>
    <div className='w-1211'>
        <QuizNavSection
            title="Quiz Topic"
            option2="Retake Quiz"
            buttonClass="bg--btn btn--size"
        />
    </div>

    <div className='w-1211'>
        <QuizIndicator />
    </div>
<div className='rq-p'>
    <StartQuiz />
    <div className='card--s2'>
        <div className='badgeindicator--c1'>
            <BadgeIndicator
                img={iconCheck}
                title="Correct"
                activeClass="success-badge"
            />
            {/* <BadgeIndicator
                img={iconClose}
                title="Wrong"
                activeClass="wrong-badge"
            />
            <BadgeIndicator
                img={iconSkiped}
                title="Wrong"
                activeClass="skiped-badge"
            /> */}
        </div>
        <div className='card--s2-body'>
            <span className='card--s2-question'>Question 10 of 10</span>
            <div className='card--s2-left'>
                <span className='question--title'>Here is the section you got to put your questions</span>

                <div className='question--field'>
                    <label className='question--field-wrapper' htmlFor='option--fl-1'>
                        <input type='radio' id='option--fl-1' name="quiz--name" />
                        <div className='opt--wrapper'>
                            <div className='opt--left'>
                                <div className='opt--check' />
                                <span>Option 1</span>  
                            </div>
                            <div className='opt--right'>
                                
                            </div>
                        </div>
                    </label>
                    <label className='question--field-wrapper' htmlFor='option--fl-2'>
                        <input type='radio' id='option--fl-2' name="quiz--name" />
                        <div className='opt--wrapper'>
                            <div className='opt--left'>
                                <div className='opt--check' />
                                <span>Option 2</span>  
                            </div>
                            <div className='opt--right'>
                                
                            </div>
                        </div>
                    </label>
                    <label className='question--field-wrapper' htmlFor='option--fl-3'>
                        <input type='radio' id='option--fl-3' name="quiz--name" className='wrong' />
                        <div className='opt--wrapper'>
                            <div className='opt--left'>
                                <div className='opt--check' />
                                <span>Option 3</span>  
                            </div>
                            <BadgeIndicator
                                img={iconCheck}
                                title="Correct"
                                activeClass="success-badge"
                            />
                        </div>
                    </label>
                    <label className='question--field-wrapper answer--fail' htmlFor='option--fl-4'>
                        <input type='radio' id='option--fl-4' name="quiz--name" />
                        <div className='opt--wrapper'>
                            <div className='opt--left'>
                                <div className='opt--check' />
                                <span>Option 4</span>  
                            </div>
                        </div>
                    </label>
                </div>
            </div>
            <div className='card--s2-right'>
                <span className='description--title'>Description</span>
                <div className='description--card'>
                    <span className='description--text'>Title of the description such as Verse</span>
                    <span className='description--info'>
                        Closer mint anomalies cloud pain. Money feed / dear search got race. To must all die move. Calculator functional initiative hands adoption ourselves power launch proceduralize. Those teeth boil items q1 overflow chime key.
                    </span>
                </div>
            </div>
        </div>

    </div>

    <div className='nav--section'>
        <button type='button' disabled>
            <div className='previous--arrow' />
        </button>
        <button type='button'>
            <div className='next--arrow' />
        </button>  
    </div>
    <div className='re--section-mw'>
        <button type='button' className='btn--rq-bg'>Retake Quiz</button>  
    </div>
</div>

    <template>

        <dialog className='center--modal'>
                <div className='close--dialog' />
                <div className='question--list-body'>
                    <div className='md--title'>Questions List</div>
                    <div className='rq-p'>
                        
                        <div className='md-number'>
                            <div className='md-number-items'>
                                1
                                <div className='box--size right-box'>
                                    <img
                                        src={iconCheckWhite}
                                        width={14}
                                        height={14}
                                    />
                                </div>
                            </div>
                            <div className='md-number-items'>
                                2 
                                <div className='box--size right-box'>
                                    <img
                                        src={iconCheckWhite}
                                        width={14}
                                        height={14}
                                    />
                                </div>   
                            </div>
                            <div className='md-number-items'>
                                3    
                                <div className='box--size right-box'>
                                    <img
                                        src={iconCheckWhite}
                                        width={14}
                                        height={14}
                                    />
                                </div>
                            </div>
                            <div className='md-number-items'>
                                4  
                                <div className='box--size right-box'>
                                    <img
                                        src={iconCheckWhite}
                                        width={14}
                                        height={14}
                                    />
                                </div>  
                            </div>
                            <div className='md-number-items'>
                                5
                                <div className='box--size wd-ch'>
                                    <img
                                        src={iconSkipWhite}
                                        width={22}
                                        height={22}
                                    />
                                </div>  
                            </div>
                            <div className='md-number-items active'>
                                6    
                                <div className='box--size right-box'>
                                    <img
                                        src={iconCheckWhite}
                                        width={14}
                                        height={14}
                                    />
                                </div>  
                            </div>
                            <div className='md-number-items'>
                                7    
                                <div className='box--size right-box'>
                                    <img
                                        src={iconCheckWhite}
                                        width={14}
                                        height={14}
                                    />
                                </div>  
                            </div>
                            <div className='md-number-items'>
                                8    
                                <div className='box--size wd-ch'>
                                    <img
                                        src={iconcloseWhite}
                                        width={22}
                                        height={22}
                                    />
                                </div> 
                            </div>
                            <div className='md-number-items'>
                                9   
                                <div className='box--size right-box'>
                                    <img
                                        src={iconCheckWhite}
                                        width={14}
                                        height={14}
                                    />
                                </div> 
                            </div>
                            <div className='md-number-items'>
                                10   
                                <div className='box--size right-box'>
                                    <img
                                        src={iconCheckWhite}
                                        width={14}
                                        height={14}
                                    />
                                </div>  
                            </div>
                            <div className='md-number-items'>
                                11  
                                <div className='box--size right-box'>
                                    <img
                                        src={iconCheckWhite}
                                        width={14}
                                        height={14}
                                    />
                                </div>   
                            </div>
                            <div className='md-number-items'>
                                12  
                                <div className='box--size right-box'>
                                    <img
                                        src={iconCheckWhite}
                                        width={14}
                                        height={14}
                                    />
                                </div>   
                            </div>
                            <div className='md-number-items'>
                                13  
                                <div className='box--size right-box'>
                                    <img
                                        src={iconCheckWhite}
                                        width={14}
                                        height={14}
                                    />
                                </div>   
                            </div>
                            <div className='md-number-items'>
                                14   
                                <div className='box--size wd-ch'>
                                    <img
                                        src={iconcloseWhite}
                                        width={22}
                                        height={22}
                                    />
                                </div>  
                            </div>
                            <div className='md-number-items'>
                                15  
                                <div className='box--size wd-ch'>
                                    <img
                                        src={iconcloseWhite}
                                        width={22}
                                        height={22}
                                    />
                                </div>   
                            </div>
                            <div className='md-number-items'>
                                16  
                                <div className='box--size wd-ch'>
                                    <img
                                        src={iconcloseWhite}
                                        width={22}
                                        height={22}
                                    />
                                </div>   
                            </div>
                            <div className='md-number-items'>
                                17 
                                <div className='box--size wd-ch'>
                                    <img
                                        src={iconcloseWhite}
                                        width={22}
                                        height={22}
                                    />
                                </div>    
                            </div>
                            <div className='md-number-items'>
                                18 
                                <div className='box--size wd-ch'>
                                    <img
                                        src={iconcloseWhite}
                                        width={22}
                                        height={22}
                                    />
                                </div>    
                            </div>
                            <div className='md-number-items'>
                                19 
                                <div className='box--size wd-ch'>
                                    <img
                                        src={iconcloseWhite}
                                        width={22}
                                        height={22}
                                    />
                                </div>  
                            </div>

                        </div>
                    </div>
                    <div className='md--footer'>
                        <button type='button'>Close</button>    
                    </div>
                </div>
        </dialog>
    </template>
    <template>

        <dialog className='center--modal'>
            <div className='close--dialog' />
            <div className='message--dialog-body'>
                <img
                    src={iconWarning}
                    width={61}
                    height={61}
                    className="warning-img"
                />
                <div className='warning--text'>
                Are You sure! You want to quit the quiz. All your progress will be terminated after closing the quiz    
                </div>
                <div className='warning--footer'>
                    <button type='button' className='btn--quit'>Quit</button>   
                    <button type='button' className='btn--grn'>Continue with quiz</button>  
                </div>
            </div>
        </dialog>
    </template>
  </>
  )
}

export default RetakeQuiz