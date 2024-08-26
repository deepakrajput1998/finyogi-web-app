import React from 'react';
import DownloadApp from '../DownloadApp/DownloadApp';
import ProfileHeader from '../Header/ProfileHeader';
import SliderInput from '../SliderInput/SliderInput';
import ProfileFooter from './ProfileFooter';
import SearchSection from './SearchSection';
import bannerImage from '../assets/image/ProfileImages/cagr-banner.svg'
import CalculatorValue from './CalculatorValue';
import './CagrcCalculator.css';

function CagrcCalculator() {
  return (<>
    <div className='sip--calculator-container'>
        <div className='main--section'>
            <div className='full-top-section'>
                <div className='calc--search'>
                    <SearchSection />
                </div>
            </div>
            <div className='banner--section bg--2 mb-37px card-height p-relative'>
                <div className='banner--inner sm-bg--2'>
                    <div className='banner--left cagr--left'>
                        <span className='banner--title'>CAGR Calculator</span>
                        <span className='banner--sub-title'>
                            Calculate the average rate of return of a fund or an investment.
                        </span>  
                    </div>
                    <div className='cagr--banner'>
                        <img
                            src={bannerImage}
                            alt="banner"
                            width={442}
                            height={493}
                        />
                    </div>
                </div>
            </div>
            <div className='w-1211'>
                <div className='card--s1'>
                    <div className='slider--field-section'>
                        <span className='slider--header'>CAGR Calculator</span>
                        <div className='slider--field'>
                            <SliderInput
                                question="Initial Investment"
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
                                question="Final Value Of Investment?"
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
                                question="Investment Period?"
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
                    </div>
                    <div className='card-width'>
                        <CalculatorValue
                            title="Expected Value"
                            value="₹ 68.08 Lac"
                            valueCa="Your investment will grow from ₹5.00K to ₹25.00K in 10 Years at a compound growth rate of 17.46%."
                        />  
                    </div>
                </div>
            </div>
        </div>
    </div>
  </>
  )
}

export default CagrcCalculator