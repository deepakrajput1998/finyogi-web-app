import React from 'react';
import DownloadApp from '../DownloadApp/DownloadApp';
import ProfileHeader from '../Header/ProfileHeader';
import SliderInput from '../SliderInput/SliderInput';
import ProfileFooter from './ProfileFooter';
import SearchSection from './SearchSection';
import bannerImage from '../assets/image/ProfileImages/present-value-calculator.svg'
import CalculatorValue from './CalculatorValue';
import './PresentValueCalculator.css'

function PresentValueCalculator() {
  return (<>
      <div className='sip--calculator-container'>
        <div className='main--section'>
            <div className='full-top-section'>
                <div className='calc--search'>
                    <SearchSection />
                </div>
            </div>
            <div className='banner--section bg--3 mb-37px card-height p-relative'>
                <div className='banner--inner sm-bg--3'>
                    <div className='banner--left pr-valu-left'>
                        <span className='banner--title'>Present Value Calculator</span>
                        <span className='banner--sub-title'>
                            Find out the current value of an asset or an investment for a given period.
                        </span>  
                    </div>
                    <div className='present-value-banner'>
                        <img
                            src={bannerImage}
                            alt="banner"
                            width={421}
                            height={482}
                        />
                    </div>
                </div>
            </div>
            <div className='w-1211'>
                <div className='card--s1'>
                    <div className='slider--field-section'>
                        <span className='slider--header'>Present Value Calculator</span>
                        <div className='slider--field'>
                            <SliderInput
                                question="Future value of investment?"
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
                                question="Excepted annual inflation rate?"
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
                            title="Present Value Amount"
                            value="₹ 68.08 Lac"
                            valueCa="₹5.00 Lac is worth ₹91.35K today after accounting for 12.0% inflation rate for 15 years."
                        />  
                    </div>
                </div>
            </div>
        </div>
    </div>
  </>
  )
}

export default PresentValueCalculator