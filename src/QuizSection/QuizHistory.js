import React from 'react';
import QuizHistoryCard from './QuizHistoryCard';
import didYouKnow from '../assets/image/didyouknow.svg';
import CustomeSelect from '../LearnPage/CustomeSelect/CustomeSelect';
import iconDashboard from '../assets/image/dashboard.svg';
import iconTopic from '../assets/image/topic-icon.svg';
import iconDifficulty from '../assets/image/difficulty-icon.svg';
import './QuizHistory.css';
import Feedback from '../ModalComponent/Feedback/Feedback';


const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

function QuizHistory() {
  return (<>
        {/* <Feedback /> */}
            <div className='full--container'>
                <div className='quick--top--section quiz--his-sm'>
                    <div className='w-1211'>
                        <div className='quiz--wrapper'>
                            <div className='quiz--top-left'>
                                <img
                                    src={didYouKnow}
                                    width={315}
                                    height={289}
                                    alt="did you know"
                                />
                                <span className='big--text'>Take A Quiz Now</span>
                                <span className='small--text'>Get to test your Knowledge about finance and other text anamalities. </span>
                            </div>
                            <div className='quiz--top-right'>
                                <div className='card--dropdown'>
                                    <div className='card--dropdown-items width-100'>
                                        <CustomeSelect
                                            optionsSelect={options}
                                            placeholder="Select Category"
                                            icon={iconDashboard}
                                        />
                                    </div>
                                    <div className='card--dropdown-items width-100'>
                                        <CustomeSelect
                                            optionsSelect={options}
                                            placeholder="Select Topic"
                                            icon={iconTopic}
                                        />
                                    </div>
                                    <div className='card--dropdown-items width-100'>
                                        <CustomeSelect
                                            optionsSelect={options}
                                            placeholder="Select Difficulty"
                                            icon={iconDifficulty}
                                        />
                                    </div>
                                    <button type='button' className='btn--startQuiz width-100'>Start Quiz</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='main--section'>
                    <div className='w-1211'>
                        <div className='quiz--header'>
                            <span className='quiz--header-text'>Quiz History</span>
                            <button type='button' className='btn--seeAll'>See all</button>
                        </div>
                        <div className='quiz--container row--container'>
                            <div className='col--2 sm--col-1'>
                                <QuizHistoryCard
                                    titleTopic="Quiz Topic"
                                    dateTime="DD/MM/YY"
                                    rankValue="Rank: 10123"
                                    pointValue="Points: 10123"
                                />
                            </div>
                            <div className='col--2 sm--col-1'>
                                <QuizHistoryCard
                                    titleTopic="Quiz Topic"
                                    dateTime="DD/MM/YY"
                                    rankValue="Rank: 10123"
                                    pointValue="Points: 10123"
                                />
                            </div>
                            <div className='col--2 sm--col-1'>
                                <QuizHistoryCard
                                    titleTopic="Quiz Topic"
                                    dateTime="DD/MM/YY"
                                    rankValue="Rank: 10123"
                                    pointValue="Points: 10123"
                                />
                            </div>
                            <div className='col--2 sm--col-1'>
                                <QuizHistoryCard
                                    titleTopic="Quiz Topic"
                                    dateTime="DD/MM/YY"
                                    rankValue="Rank: 10123"
                                    pointValue="Points: 10123"
                                />
                            </div>
                            <div className='col--2 sm--col-1'>
                                <QuizHistoryCard
                                    titleTopic="Quiz Topic"
                                    dateTime="DD/MM/YY"
                                    rankValue="Rank: 10123"
                                    pointValue="Points: 10123"
                                />
                            </div>
                            <div className='col--2 sm--col-1'>
                                <QuizHistoryCard
                                    titleTopic="Quiz Topic"
                                    dateTime="DD/MM/YY"
                                    rankValue="Rank: 10123"
                                    pointValue="Points: 10123"
                                />
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
  </>
  )
}

export default QuizHistory