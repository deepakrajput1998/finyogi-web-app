import React from 'react';
import iconFacebook from '../assets/image/social-icon/facebook.svg';
import iconTwitter from '../assets/image/social-icon/twiter.svg';
import iconInstagram from '../assets/image/social-icon/instagram.svg'
import './CardImage.css'

function CardImage({image,alt,name,designation}) {
  return (<>
  
        <div className='section--card-1 p-relative'>
            <img
             src={image}
             alt={alt}
             className="card--image"
            />
            <div className='section--info'>
                <span className='card-1--name'>{name}</span>
                <span className='card-1--designation'>{designation}</span>
            </div>
            <div className='card-1-hover'>
                <div className='icon-socicl-box'>
                    <a href="#">
                        <img
                            src={iconFacebook}
                            alt="facebook"
                            width={50}
                            height={50}
                        />
                    </a>
                    <a href="#">
                        <img
                            src={iconTwitter}
                            alt="twitter"
                            width={50}
                            height={50}
                        />
                    </a>
                    <a href="#">
                        <img
                            src={iconInstagram}
                            alt="instagram"
                            width={50}
                            height={50}
                        />
                    </a>
                </div>
            </div>
        </div>
  </>
  )
}

export default CardImage