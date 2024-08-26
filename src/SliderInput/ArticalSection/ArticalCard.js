import React from 'react';
import './ArticalCard.css'

function ArticalCard({image,cardTitle,writerName,bottomSection,timeSection,videoSection}) {
  return (<>
            <div className='card--banner'>
                <img src={image} className="cd--bnnr-img" />
                {videoSection && 
                    <button type='button' className='btn--video'>
                        <img
                            src={videoSection}
                            alt="polygon-icon"
                            width={64}
                            height={64}
                            className="innr--arr"
                        /> 
                    </button>
                }
            </div>
            <div className='card--sm-vr'>
                <div className='card--title'>
                    <span>{cardTitle}</span>
                </div>
                <div className='card--writer-name'>
                    <span>{writerName}</span>    
                </div>
                <div className='card--time-section'>
                    <span>{bottomSection}</span>
                    <time>{timeSection}</time>
                </div>
            </div>
  
        </>
  )
}

export default ArticalCard