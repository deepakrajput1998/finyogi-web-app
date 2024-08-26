import React from 'react';
import './SimpleBanner.css'

function SimpleBanner({bannerImage}) {
  return (<>
            <div className='single--banner'>
                <img
                    src={bannerImage}
                />    
            </div>
        </>
  )
}

export default SimpleBanner