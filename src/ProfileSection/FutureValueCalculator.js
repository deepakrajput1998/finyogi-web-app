import React from 'react';
import DownloadApp from '../DownloadApp/DownloadApp';
import ProfileHeader from '../Header/ProfileHeader';
import SliderInput from '../SliderInput/SliderInput';
import ProfileFooter from './ProfileFooter';
import SearchSection from './SearchSection';
import bannerImage from '../assets/image/ProfileImages/future-value-calculator.svg'
import CalculatorValue from './CalculatorValue';
import './FutureValueCalculator.css'

function FutureValueCalculator() {
  return (<>
        <div className='sip--calculator-container'>
            <div className='header--section'>
                <ProfileHeader />
            </div>
            <div className='main--section'>
                <div className='full-top-section'>
                    <div className='calc--search'>
                        <SearchSection />
                    </div>
                </div>
                <div className='banner--section bg--4 mb-37px card-height p-relative'>
                    <div className='banner--inner sm-bg--4'>
                        <div className='banner--left fv-calc'>
                            <span className='banner--title'>Future Value Calculator</span>
                            <span className='banner--sub-title'>
                                Predict the future value of an investment for a given period.
                            </span>  
                        </div>
                        <div className='banner--image-3'>
                            <img
                                src={bannerImage}
                                alt="banner"
                                width={316}
                                height={498}
                            />
                        </div>
                    </div>
                </div>
                <div className='w-1211'>
                    <div className='card--s1'>
                        <div className='slider--field-section'>
                            <span className='slider--header'>Future Value Calculator</span>
                            <div className='slider--field'>
                                <SliderInput
                                    question="Present value of investment?"
                                    typeInput="text"
                                    placeholder="Enter Amount In ₹"
                                    classLabel="form--con"
                                    rangeField="range--input"
                                    typeRange="range"
                                    rangeMin="1"
                                    rangeMax="100"
                                    rangeValue="50"
                                />
                            </div>
                            <div className='slider--field'>
                                <SliderInput
                                    question="Number of years?"
                                    typeInput="text"
                                    placeholder="Enter Years"
                                    classLabel="form--con"
                                    rangeField="range--input"
                                    typeRange="range"
                                    rangeMin="1"
                                    rangeMax="100"
                                    rangeValue="50"
                                />
                            </div>
                            <div className='slider--field'>
                                <SliderInput
                                    question="Excepted annual rate of return?"
                                    typeInput="text"
                                    placeholder="Enter In %"
                                    classLabel="form--con"
                                    rangeField="range--input"
                                    typeRange="range"
                                    rangeMin="1"
                                    rangeMax="100"
                                    rangeValue="50"
                                />
                            </div>
                        </div>
                        <div className='card-width'>
                            <CalculatorValue
                                title="Future Value Amount"
                                value="₹ 68.08 Lac"
                                valueCa="₹5.00 Lac invested today at 10% would become ₹20.89 Lac after 15 years."
                            />  
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-1211'>
                <DownloadApp />
            </div>
            <div className='footer--section'>
                <ProfileFooter />
            </div>
        </div>
  </>
  )
}

export default FutureValueCalculator