import React from 'react'
import SearchSection from '../ProfileSection/SearchSection'
import homeImage from '../assets/image/gp-1.svg'
import investmentIcon from '../assets/image/investment-icon.svg'
import trendIcon from '../assets/image/trend-icon.svg'
import chartIcon from '../assets/image/pie-chart-icon.svg'
import increaseIcon from '../assets/image/increase-icon.svg'
import trIamge from '../assets/image/tr-image.svg'
import './HomePage2.css'
import CustomeSelect from '../LearnPage/CustomeSelect/CustomeSelect'
import didYouKnow from '../assets/image/didyouknow.svg';
import iconDashboard from '../assets/image/dashboard.svg';
import iconTopic from '../assets/image/topic-icon.svg';
import iconDifficulty from '../assets/image/difficulty-icon.svg';
import BannerArtical from '../SliderInput/ArticalSection/BannerArtical'
import ArticalCard from '../SliderInput/ArticalSection/ArticalCard'
import imageBanner from '../assets/image/trand-ar-image.svg'
import bookSample from '../assets/image/book-sample.png';
import bookSample1 from '../assets/image/book-img-1.svg';
import bookSample2 from '../assets/image/book-img-2.svg';
import bookSample3 from '../assets/image/book-img-3.svg';
import PointerSection from '../PointerSection/PointerSection'
import vistorIcon from '../assets/image/icon-vector.svg'
import photoImg from '../assets/image/photo-img.svg'
import awardsWinner from '../assets/image/awards-winner.svg';
import experienceIcon from '../assets/image/experience-Icon.svg';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

function HomePage2() {
  return (
            <>
                <div className='full-top-section'>
                    <div className='calc--search'>
                        <SearchSection/>
                    </div>
                </div>
                <section className='sec--1'>
                    <div className='sec--1-wrapper'>  
                        <div className='sec--1-left'>
                            <span className='sec-bg-title'>Think Business Today</span>
                            <span className='sec-sm-title'>
                                Explain about the various details of business today tomorrow and so on....
                            </span>
                            <button type='button' className='btn-ty-more'>Learn More</button>
                        </div>
                        <div className='sec--1-right'>
                            <img
                                src={homeImage}
                            />
                        </div>
                    </div>
                </section>
                <div className='calculator--box'>
                        <span className='text--cal'>Calculator</span>
                        <div className='cal--wrapper'>
                            <div className='cal--items active--item'>
                                <div className='cal--icon'>
                                    <img
                                        src={investmentIcon}
                                    />
                                </div>
                                <span className='cal--title'>SIP</span>
                            </div>
                            <div className='cal--items'>
                                <div className='cal--icon'>
                                    <img
                                        src={trendIcon}
                                    />
                                </div>
                                <span className='cal--title'>Future Value</span>
                            </div>
                            <div className='cal--items'>
                                <div className='cal--icon'>
                                    <img
                                        src={chartIcon}
                                    />
                                </div>
                                <span className='cal--title'>Present Value</span>
                            </div>
                            <div className='cal--items'>
                                <div className='cal--icon'>
                                    <img
                                        src={increaseIcon}
                                    />
                                </div>
                                <span className='cal--title'>Cagr</span>
                            </div>
                        </div>
                        
                </div>

                <div className='ab--card'>
                            <div className='ab--card-left'>
                                <div className='im--card'>
                                    <img
                                        src={photoImg}
                                    />

                                    <span className='im--card-title'>
                                        We’re Ready To Grow Your Business With Us
                                    </span>
                                    <span className='im--card-sub'>
                                    Leverage agile frameworks to provide a robust synopsis for high level overviews. thinking to further the overall value proposition. 
                                    </span>

                                    <span className='line--text-title'>
                                        Get in Touch
                                    </span>
                                    
                                </div>
                                
                            </div>
                            <div className='ab--card-right'>
                                <div className=''>
                                    <PointerSection
                                        title="Welcome Whitecollar"
                                        colorText="text--black"
                                    />
                                    <span className='tile--top title-top-w mt-15'>
                                        We Care About Your Business Plan.   
                                    </span>
                                    <div className='cd--dd'>
                                        <span className='text-p'>
                                            Leverage agile frameworks to provide a robust synopsis for high level overviews.Iterative approaches to corporate strategy foster collaborative thinking to further the overal.
                                        </span>
                                        <span className='text-p'>
                                            Leverage agile frameworks to provide a robust synopsis for high level overviews.Iterative approaches to corporate strategy 
                                        </span>
                                        <div className='cd-vistor br-0'>
                                            <img
                                                src={vistorIcon}
                                                width={20}
                                                height={20}
                                            />
                                            <div className='vi-rigth'>
                                                <span className='vi--title'>
                                                    Components of a Business Strategy
                                                </span>
                                            </div>
                                        </div>

                                        <div className='cd-vistor br-0'>
                                            <img
                                                src={vistorIcon}
                                                width={20}
                                                height={20}
                                            />
                                            <div className='vi-rigth'>
                                                <span className='vi--title'>Business Consulting</span>
                                            </div>
                                        </div>

                                        <div className='ex--cd'>
                                            <div className='ex--cd-item'>
                                                <img
                                                    src={experienceIcon}
                                                    width={29}
                                                    height={29}
                                                />
                                                <div className='ex--cd-right'>
                                                    <span className='ex--cd-title'>Experience</span>
                                                    <span className='ex--cd-sub'>
                                                        Leverage frameworks toprovidee werment.
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='ex--cd-item'>
                                                <img
                                                    src={awardsWinner}
                                                    width={29}
                                                    height={29}
                                                />
                                                <div className='ex--cd-right'>
                                                    <span className='ex--cd-title'>Experience</span>
                                                    <span className='ex--cd-sub'>
                                                        Leverage frameworks toprovidee werment.
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <button type='button' className='btn-m-about'>More About Us</button>
                                    </div>
                                </div>
                                
                            </div>
                        </div>




                <section className='tranding--sec'>
                    <div className='tranding--sec-top'>
                        <span className='text--search'>Trending Search</span>
                        <button type='button' className='btn--tr-all'>See all</button>
                    </div>
                    <div className='tranding--sec-wrapper'>
                        <div className='trand-vr-item'>
                            <div className='trand-vr-inn'>
                                <div className='trand-vr-img'>
                                    <img
                                        src={trIamge}
                                    />
                                </div>
                                <div className='trand-vr-content'>
                                    <span className='tr--info'>
                                        The Horrifying Star Wars Holidays Special Has Been Given An Unofficial 4K Upgrade
                                    </span>
                                    <span className='tr--name'>By Jane Smith</span>
                                    <div className='tr--flex'>
                                        <span className='tr--title'>Entertainment</span>
                                        <span className='tr--time'>5m ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='trand-vr-item'>
                            <div className='trand-vr-inn'>
                                <div className='trand-vr-img'>
                                    <img
                                        src={trIamge}
                                    />
                                </div>
                                <div className='trand-vr-content'>
                                    <span className='tr--info'>
                                        The Horrifying Star Wars Holidays Special Has Been Given An Unofficial 4K Upgrade
                                    </span>
                                    <span className='tr--name'>By Jane Smith</span>
                                    <div className='tr--flex'>
                                        <span className='tr--title'>Entertainment</span>
                                        <span className='tr--time'>5m ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='trand-vr-item'>
                            <div className='trand-vr-inn'>
                                <div className='trand-vr-img'>
                                    <img
                                        src={trIamge}
                                    />
                                </div>
                                <div className='trand-vr-content'>
                                    <span className='tr--info'>
                                        The Horrifying Star Wars Holidays Special Has Been Given An Unofficial 4K Upgrade
                                    </span>
                                    <span className='tr--name'>By Jane Smith</span>
                                    <div className='tr--flex'>
                                        <span className='tr--title'>Entertainment</span>
                                        <span className='tr--time'>5m ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='trand-vr-item'>
                            <div className='trand-vr-inn'>
                                <div className='trand-vr-img'>
                                    <img
                                        src={trIamge}
                                    />
                                </div>
                                <div className='trand-vr-content'>
                                    <span className='tr--info'>
                                        The Horrifying Star Wars Holidays Special Has Been Given An Unofficial 4K Upgrade
                                    </span>
                                    <span className='tr--name'>By Jane Smith</span>
                                    <div className='tr--flex'>
                                        <span className='tr--title'>Entertainment</span>
                                        <span className='tr--time'>5m ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className='quick--top--section'>
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

                <section className='tranding--sec'>
                    <div className='tranding--sec-top'>
                        <span className='text--search'>Trending Article</span>
                        <button type='button' className='btn--tr-all'>See all</button>
                    </div>
                    <div className='tranding--sec-wrapper'>
                    <div className='trand--artical-item'>
                            <ArticalCard
                                image={imageBanner}
                                cardTitle="The Horrifying Star Wars Holidays Special Has Been Given An Unofficial 4K Upgrade"
                                writerName="By Jane Smith"
                                bottomSection="Entertainment"
                                timeSection="5m ago"
                            />
                        </div>
                        <div className='trand--artical-item'>
                            <ArticalCard
                                image={imageBanner}
                                cardTitle="The Horrifying Star Wars Holidays Special Has Been Given An Unofficial 4K Upgrade"
                                writerName="By Jane Smith"
                                bottomSection="Entertainment"
                                timeSection="5m ago"
                            />
                        </div>
                        <div className='trand--artical-item'>
                            <ArticalCard
                                image={imageBanner}
                                cardTitle="The Horrifying Star Wars Holidays Special Has Been Given An Unofficial 4K Upgrade"
                                writerName="By Jane Smith"
                                bottomSection="Entertainment"
                                timeSection="5m ago"
                            />
                        </div>
                        <div className='trand--artical-item'>
                            <ArticalCard
                                image={imageBanner}
                                cardTitle="The Horrifying Star Wars Holidays Special Has Been Given An Unofficial 4K Upgrade"
                                writerName="By Jane Smith"
                                bottomSection="Entertainment"
                                timeSection="5m ago"
                            />
                        </div>
                    </div>
                </section>

                <div className='w-1211'>
                    <div className='banner--bottom'>
                        <BannerArtical/>
                    </div>
                </div>

                <div className='section--trending bg--color-1'>
                    <div className='trending--books'>
                        <div className='trending--header'>
                            <span>Trending Books</span>
                            <button type='button' className='btn--see-all'>See all</button>
                        </div>
                        <div className='book--section-slide'>
                            <div className='slide--book'>
                                <div className='book--items'>
                                    <div className='book--img'>
                                        <img
                                            src={bookSample1}
                                            width={292}
                                            height={445}
                                            alt="book tranding"
                                        />
                                    </div>
                                    <span className='book--name'>Think & Grow Rich</span>
                                    <span className='book-author'>Napoleon Hill</span>
                                </div>
                                <div className='book--items'>
                                    <div className='book--img'>
                                        <img
                                            src={bookSample2}
                                            width={292}
                                            height={445}
                                            alt="book tranding"
                                        />
                                    </div>
                                    <span className='book--name'>Deep Finance</span>
                                    <span className='book-author'>Glen Hopper</span>
                                </div>
                                <div className='book--items'>
                                    <div className='book--img'>
                                        <img
                                            src={bookSample3}
                                            width={292}
                                            height={445}
                                            alt="book tranding"
                                        />
                                    </div>
                                    <span className='book--name'>I Will Teach You......</span>
                                    <span className='book-author'>Ramit Sethi</span>
                                </div>
                                <div className='book--items'>
                                    <div className='book--img'>
                                        <img
                                            src={bookSample2}
                                            width={292}
                                            height={445}
                                            alt="book tranding"
                                        />
                                    </div>
                                    <span className='book--name'>Deep Finance</span>
                                    <span className='book-author'>Glen Hopper</span>
                                </div>
                                <div className='book--items'>
                                    <div className='book--img'>
                                        <img
                                            src={bookSample3}
                                            width={292}
                                            height={445}
                                            alt="book tranding"
                                        />
                                    </div>
                                    <span className='book--name'>I Will Teach You......</span>
                                    <span className='book-author'>Ramit Sethi</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
  )
}

export default HomePage2