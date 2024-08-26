import React from 'react';
import BannerMobile from '../BannerMobile/BannerMobile';
import CardImage from '../CardImage/CardImage';
import imageCard1 from '../assets/image/AboutUs/image-1.png';
import imageCard2 from '../assets/image/AboutUs/image-2.png';
import imageCard3 from '../assets/image/AboutUs/image-3.png';
import bannerAbout from '../assets/image/about-banner.png'
import './AboutUs.css'
import PointerSection from '../PointerSection/PointerSection';
import vistorIcon from '../assets/image/icon-vector.svg'
import photoImg from '../assets/image/photo-img.svg'

function AboutUs() {
  return (<>
                <div className='full--container'>
                    <div className='main--section'>
                        <div className='contact--top'>
                            <div className='contact--left'>
                                <div className='contact--left-inner'> 
                                    <PointerSection
                                        title="About Us"
                                        colorText="text--white"
                                    />
                                    <span className='big--title'>Know About Us</span>
                                    <span className='sm--text-cd'>
                                        Uat native underlying diarize my. Issues base teeth have looking we weeks sorry horse way driver's pole.
                                    </span>
                                </div>
                            </div>
                        </div>
                        


                            <div className='full-in-container'>

                            <div className='ab--card'>
                                <div className='ab--card-left'>
                                    <div className='im--card'>
                                        <img
                                            src={photoImg}
                                            className="im-img-mweb"
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
                                            More great is i'm kimono closer    
                                        </span>
                                        <div className='cd--dd'>
                                            <span className='text-p'>
                                                Mindfulness donuts wanted crack attached just. Value-added solutionize bed book lot leverage as encourage baseline. Uat our individual product only comes member angel manager. When involved knowledge standup a scraps.
                                            </span>
                                            <span className='text-p'>
                                                Happenings discussions no-brainer nobody shoot functional masking individual nor join. Regroup team economy picture one wheel meaningful
                                            </span>
                                            <div className='cd-vistor'>
                                                <img
                                                    src={vistorIcon}
                                                    width={20}
                                                    height={20}
                                                />
                                                <div className='vi-rigth'>
                                                    <span className='vi--title'>Our Vision</span>
                                                    <span className='vi--info'>
                                                        Crystallize goto big weaponize beef elephant heads-up you deck metal. Scraps no-brainer by hits seat deep busy. Boil.
                                                    </span>
                                                </div>
                                            </div>

                                            <div className='cd-vistor'>
                                                <img
                                                    src={vistorIcon}
                                                    width={20}
                                                    height={20}
                                                />
                                                <div className='vi-rigth'>
                                                    <span className='vi--title'>Our Mision</span>
                                                    <span className='vi--info'>
                                                    Company standup paradigm lunch contribution backwards. Comms food knowledge you're indicators unit net pin slipstream.
                                                    </span>
                                                </div>
                                            </div>
                                            <button type='button' className='btn-m-about'>More About Us</button>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className='w-1211'>
                                <div className='our--talent-section p-t-b-80'>
                                    <div className='section-1'>
                                        <div className='section-1-left'>
                                            <span className='tile--top'>About Us</span>
                                            <span className='tile--top-info'>
                                                Where up bake cost cross win-win-win left if it's post. Lift kpis calculator done ask eat without stronger. Fastworks at pulling submit without shoot exploratory stakeholders win. Ourselves pretend encourage native at usabiltiy charts domains globalize feature. Blue power breakout needle jumping closing per giant feature room. Live door monday users dangerous our. Believe illustration go before closing. Native of live those discussion. Plane hours finance before obviously usabiltiy will wiggle requirements need. Cloud encourage gmail 30,000ft driving. Unit you while this best.
                                            </span> 
                                        </div>
                                        <div className='section-1-right'> 
                                            <img
                                                src={bannerAbout}
                                                alt="banner about"
                                            />
                                        </div> 
                                    </div>
                                </div>
                            </div>
                            </div>
                            
                            <div className='full-in-container bg--color-lg-gray'>
                                <div className='w-1211'>
                                    <div className='our--talent-section p-t-b-80'>
                                        <div className='block--center'>
                                            <PointerSection
                                                title="Our Team"
                                                colorText="text--black"
                                            />
                                        </div>
                                        <div className='card--name'>
                                            Meet Our Experts  
                                        </div>
                                        <div className='section-1'>
                                            <div className='section-1-left'>
                                                <span className='tile--top'>About Our CEO</span>
                                                <span className='tile--top-info'>
                                                    Where up bake cost cross win-win-win left if it's post. Lift kpis calculator done ask eat without stronger. Fastworks at pulling submit without shoot exploratory stakeholders win. Ourselves pretend encourage native at usabiltiy charts domains globalize feature. Blue power breakout needle jumping closing per giant feature room. Live door monday users dangerous our. Believe illustration go before closing. Native of live those discussion. Plane hours finance before obviously usabiltiy will wiggle requirements need. Cloud encourage gmail 30,000ft driving. Unit you while this best.
                                                </span> 
                                            </div>
                                            <div className='section-1-right'> 
                                                <CardImage
                                                    image={imageCard2}
                                                    alt="image 2"
                                                    name="David	Simpson"
                                                    designation="Designer"
                                                />
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='full-in-container'>
                                <div className='w-1211 m-pd-0'>
                                    <div className='our--talent-section p-t-b-80'>
                                        <div className='block--center'>
                                            <PointerSection
                                                title="Our Family"
                                                colorText="text--black"
                                            />
                                        </div>
                                        <div className='card--name'>
                                            Our Talents    
                                        </div>
                                        <div className='talent--section'>
                                            <CardImage
                                                image={imageCard1}
                                                alt="image 1"
                                                name="Nattasha Kelvin"
                                                designation="Managing Director"
                                            />
                                            <CardImage
                                                image={imageCard2}
                                                alt="image 2"
                                                name="David	Simpson"
                                                designation="Designer"
                                            />
                                            <CardImage
                                                image={imageCard3}
                                                alt="image 3"
                                                name="Madeleine	Grant"
                                                designation="Marketing Specialist"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <BannerMobile />
                </div>
  </>
  )
}

export default AboutUs