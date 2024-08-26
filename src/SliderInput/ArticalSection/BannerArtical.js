import React from 'react';
import banner from '../../assets/image/ArticalSection/banner.png'
import './BannerArtical.css'

function BannerArtical() {
  return (<>
            <div className='card--banner-artical'> 
                <div className='card--banner-section'>
                    <img
                        src={banner}
                        alt="banner"
                        width={100}
                    />
                </div>
                <div className='card--banner-footer'>
                    <div className='card--banner-left'>
                        <span className='title--text-banner'>Fire in Noida Sector 62</span>
                        <span className='subtitle--text-banner'>Wrestlers will not be allowed to protest at India Gate, National monument ......</span>
                    </div>
                    <button type='button' className='btn--learn-more'>Learn More</button>
                </div>
            </div>
  </>
  )
}

export default BannerArtical