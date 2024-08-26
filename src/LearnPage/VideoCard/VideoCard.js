import React from 'react';
import iconDocument from '../../assets/image/document-icon.svg'
import pauseIcon from '../../assets/image/pause-icon.svg'
import iconCheck from '../../assets/image/icon-check.svg'
import iconPlay from '../../assets/image/icon-play.svg'
import './VideoCard.css';

function VideoCard({videoIamge,videoTitle,activeVideo}) {
  return (<>
            <div className={`video--body ${activeVideo}`}>
                <div className='video--image'>
                    <img
                        src={videoIamge}
                    />
                </div>
                <div className='video--section'>
                    <div className='video--left'>
                        <span className='video--title'>{videoTitle}</span>
                        <span className='paper--count'>
                            <img
                                src={iconDocument}
                                width={14}
                                height={14}
                                alt="page document"
                            />
                            <span>09 Papers</span>
                        </span>
                    </div>
                    <div className='video-right'>
                        <button type='button' className='btn--check'>
                            <img
                                src={iconCheck}
                                alt="icon check"
                            />
                        </button>
                        <button type='button' className='btn--play'>
                            <img
                                src={pauseIcon}
                            />
                        </button>
                        <button type='button' disabled className='btn-play-disabled'>
                            <img 
                                src={iconPlay}
                            />
                        </button>
                    </div>
                </div>
            </div>
  </>
  )
}

export default VideoCard