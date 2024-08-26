import React from 'react';
import Breadcrum from '../ProfileSection/Breadcrum';
import SimpleBanner from '../SimpleBanner/SimpleBanner';
import bannerSingle from '../assets/image/image-banner-quiz.png'
import iconQuize from '../assets/image/icon-quiz.svg'
import iconQuizeTime from '../assets/image/icon-quiz-time.svg'
import iconQuizeStar from '../assets/image/icon-quiz-star.svg'
import iconYellowStar from '../assets/image/yellow-star.svg'
import './QuizTopic.css'

function QuizTopic() {
  return (<>
            <Breadcrum
                field1="Quiz"
                field2="Take Quiz" 
            />
            <SimpleBanner
                bannerImage={bannerSingle}
            />
            <div className='w-1211'>
                <div className='quiz-topic-header'>
                    <div className='quiz--topic-left'>
                        <div className='quiz--topic-title'>Quiz Topic</div>
                        <div className='quiz--topic-sub-title'>Level Hard</div>
                    </div>
                    <div className='quiz--rating'>
                        <img 
                            src={iconYellowStar} 
                            alt="icon star"
                            width={32}
                            height={32}
                        />
                        <div className='star--value'>4.8</div>
                    </div>
                </div>
            </div>
            <div className='w-1211'>
                <div className='quize--partern'>
                    <div className='quize--partern-items'>
                        <div className='icon--q-box'>
                            <img
                                src={iconQuize}
                            />
                        </div>
                        <div className='quiz--info'>
                            <span className='qz-title'>10 Question</span>
                            <span className='qz-sub-title'>10 point for a correct answer</span>
                        </div>
                    </div>
                    <div className='quize--partern-items'>
                        <div className='icon--q-box'>
                            <img
                                src={iconQuizeTime}
                            />
                        </div>
                        <div className='quiz--info'>
                            <span className='qz-title'>1 hour 15 min</span>
                            <span className='qz-sub-title'>Total duration of the quiz</span>
                        </div>
                    </div>
                    <div className='quize--partern-items'>
                        <div className='icon--q-box'>
                            <img
                                src={iconQuizeStar}
                            />
                        </div>
                        <div className='quiz--info'>
                            <span className='qz-title'>Win 10 star</span>
                            <span className='qz-sub-title'>Answer all questions correctly</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-1211'>
                <div className='quiz--Brief'>
                    <span className='qb-title'>Brief explanation about this quiz</span>
                    <span className='qb-sub-title'>
                        Please read the text below carefully so you can understand it
                    </span>
                    <ul className='quiz--Brief-ul'>
                        <li>10 point awarded for a correct answer and no marks for a incorrect answer</li>
                        <li>Tap on options to select the correct answer</li>
                        <li>Tap on the bookmark icon to save interesting questions</li>
                        <li>Click submit if you are sure you want to complete all the quizzes</li>
                    </ul>
                    <div className='quiz--Brief-button'>
                        <button type='button' className='btn--quiz-cancel'>Cancel Quiz</button>
                        <button type='button' className='btn--quiz-start'>Start Quiz</button>
                    </div>
                </div>
            </div>
  </>
  )
}

export default QuizTopic