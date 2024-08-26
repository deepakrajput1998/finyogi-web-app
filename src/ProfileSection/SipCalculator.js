import React from 'react'
import DownloadApp from '../DownloadApp/DownloadApp';
import ProfileHeader from '../Header/ProfileHeader';
import SliderInput from '../SliderInput/SliderInput';
import CalculatorValue from './CalculatorValue';
import ProfileFooter from './ProfileFooter';
import SearchSection from './SearchSection';
import bannerImage from '../assets/image/ProfileImages/banner-1.png';
import './SipCalculator.css';

function SipCalculator() {
  return (<>
  
            <div className='sip--calculator-container'>
                <div className='main--section'>
                    <div className='full-top-section'>
                        <div className='calc--search'>
                            <SearchSection />
                        </div>
                    </div>
                    <div className='banner--section bg--1 mb-37px card-height p-relative'>
                        <div className='banner--inner sm-bg--1'>
                            <div className='banner--left'>
                                <span className='banner--title'>SIP Calculator</span>
                                <span className='banner--sub-title'>
                                    Explore the future value of your Systematic Investment Plan(SIP)
                                </span>  
                            </div>
                            <div className='banner--image'>
                                <img
                                    src={bannerImage}
                                    alt="banner"
                                    width={654}
                                    height={524}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='w-1211'>
                        <div className='card--s1'>
                            <div className='slider--field-section'>
                                <span className='slider--header'>SIP Calculator</span>
                                <div className='slider--field'>
                                    <SliderInput
                                        question="How much would you like to invest every  month ?"
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
                                        question="Number of years for which you want to invest?"
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
                                    title="Expected Value"
                                    value="₹ 68.08 Lac"
                                    valueCa="Capital Appreciation: ₹ 28.08 Lac"
                                    valueIa="Investment Amount: ₹ 30.08 Lac"
                                />  
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
  </>
  )
}

export default SipCalculator;