import React from 'react';
import Breadcrum from '../../ProfileSection/Breadcrum';
import SimpleBanner from '../../SimpleBanner/SimpleBanner';
import bannerSingle from '../../assets/image/single-banner.png'
import timeIcon from '../../assets/image/time-frame.svg';
import documentIcon from '../../assets/image/document-icon.svg'
import VideoCard from '../VideoCard/VideoCard';
import videoImage from '../../assets/image/video-banner.svg'
import './LearnModules.css'

function LearnModules() {
  return (<>
            <Breadcrum
                field1="Learn"
                field2="Chapters"
            />
            <SimpleBanner
                bannerImage={bannerSingle}
            />
            <div className='learn--intro'>
                <div className='w-1211'>
                    <span className='learn--intro-title'>An Introduction to Physical </span>
                    <span className='learn--intro-sub'>Physical & Chemical Changes</span>
                    <div className='time-s1'>
                        <div className='time-s1-items'>
                            <img
                                src={timeIcon}
                                width={40}
                                height={40}
                                alt="icon time"
                            />
                            <span>3h 30mins</span>    
                        </div>
                        <div className='time-s1-items'>
                            <img
                                src={documentIcon}
                                width={40}
                                height={40}
                                alt="icon document"
                            />
                            <span>10 Chapters</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className='w-1211'>
                    <span className='chapters--text'>Chapters</span>
                </div>
                <div className='w-1211'>
                    <div className='video--list'>
                        <VideoCard
                            videoIamge={videoImage}
                            videoTitle="An Introduction to Physical"
                        />
                        <VideoCard
                            videoIamge={videoImage}
                            videoTitle="An Introduction to Physical"
                            activeVideo="active"
                        />
                        <VideoCard
                            videoIamge={videoImage}
                            videoTitle="An Introduction to Physical"
                        />
                        <VideoCard
                            videoIamge={videoImage}
                            videoTitle="An Introduction to Physical"
                        />
                        <VideoCard
                            videoIamge={videoImage}
                            videoTitle="An Introduction to Physical"
                        />
                    </div>
                </div>
            </div>
  </>
  )
}

export default LearnModules