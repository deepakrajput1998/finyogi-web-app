import React from 'react';
import mobileBanner from '../assets/image/mobile-banner.svg';
import iconCloud from '../assets/image/cloud-icon.svg';
import iconPlaystore from '../assets/image/img-play-store.svg';
import iconAchievement from '../assets/image/achievement-img.svg';
import iconCustomer from '../assets/image/customer-icon.svg';
import iconmWebPlaystore from '../assets/image/play-store-mweb.svg';
import './BannerMobile.css'

function BannerMobile() {
  return (<>
            <div className='banner--card'>
                <div className='banner--card-row'>
                    <div className='banner--card-left'>
                        <div className='banner--content'>
                            <span className='banner--content-text'>
                                Get all insights of market you need to know
                            </span>
                            <span className='banner--content-sub-text'>
                                Shop for unlimited collections of toys for your kids and give them a joyful childhood. Surprize them with exciting fun loving toys for your kids.
                            </span>
                            <div className='banner--download-section'>
                                <button type='button' className='btn--download-app'>
                                    <img
                                        src={iconCloud}
                                        width={28}
                                        height={27}
                                        alt="colud icon"
                                    />
                                    Download app
                                </button>
                                <img
                                    src={iconPlaystore}
                                    width={357}
                                    height={48}
                                    alt="icon playStore"
                                    className='web-play'
                                />

                                <img
                                    src={iconmWebPlaystore}
                                    width={145}
                                    height={52}
                                    alt="icon playStore"
                                    className='mweb-play'
                                />
                            </div>
                            <div className='banner--custumer'>
                                <div className='cutumer--items'>
                                    <img
                                        src={iconAchievement}
                                        width={44}
                                        height={44}
                                        alt="icon Achievement"
                                    />
                                    <span>
                                        Years of experience
                                    </span>    
                                </div>
                                <div className='cutumer--items'>
                                    <img
                                        src={iconCustomer}
                                        width={44}
                                        height={44}
                                        alt="icon Achievement"
                                    />
                                    <span>
                                        Satisfied and happy customers
                                    </span>    
                                </div>
                            </div>
                        </div>    
                        
                    </div>
                    <div className='banner--card-right'>
                        <img
                            src={mobileBanner}
                            alt="mobile banner"
                            width={593}
                            height={598}
                        />
                    </div>
                </div>
            </div>
  </>
  )
}

export default BannerMobile