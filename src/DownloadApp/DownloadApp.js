import React from 'react'
import googlePlay from '../assets/image/ProfileImages/google-play.png'
import sharingCuate from '../assets/image/ProfileImages/sharing-cuate.svg'
import './DownloadApp.css'
function DownloadApp() {
  return (<>
  
        <div className='download--app-banner'>
            <div className='dp-app-left'>
                <span className='title-app'>Download Our App</span>
                <span className='title-sub-app'>
                    Help your friends fall in love with learning through FinYogi
                </span>
                <img
                    src={googlePlay}
                    width={108}
                    height={34}
                    alt="google play"
                    className='google--play'
                />
            </div>
            <div className='download--app-img'>
                <img
                    src={sharingCuate}
                    alt='sharing cuate'
                    width={378}
                    height={216}
                />
            </div>  
        </div>
  </>
  )
}

export default DownloadApp