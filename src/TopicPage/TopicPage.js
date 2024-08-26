import React from 'react'
import SearchSection from '../ProfileSection/SearchSection';
import topicBanner from '../assets/image/topic-banner.svg'
import iconShare from '../assets/image/share-icon.svg';
import iconYoutube from '../assets/image/youtube-icon.svg';
import iconDownload from '../assets/image/download-icon.svg';
import StImage from '../assets/image/st-image.svg'
import './TopicPage.css'

function TopicPage() {
  return (<>
  
            <div className='full-top-section'>
                <div className='calc--search'>
                    <SearchSection/>
                </div>
            </div>
            <section className='topic--full-banner'>
                <img
                    src={topicBanner}
                />
            </section>
            <section className='topic--search'>
                <div className='w-1211'>  
                    <div className='topic--flex'>
                        <span className='topic--title'>Search Topic name Here</span>
                        <div className='topic--oprions'>
                            <button type='button'>
                                <img
                                    src={iconShare}
                                />  
                            </button>
                            <button type='button'>
                                <img
                                    src={iconYoutube}
                                /> 
                            </button>
                            <button type='button'>
                                <img
                                src={iconDownload}
                                /> 
                            </button>
                        </div>
                    </div>
                    <div className='table--content'>
                        <span className='tb--content-heading'>Table of content</span>
                        <ul className='tb--content-ul'>
                            <li>Corporate Level Strategy</li>
                            <li>Growth Strategy</li>
                            <li>Stability Strategy</li>
                            <li>Retrenchment Strategy</li>
                            <li>Diversification Strategy</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className='corporate-strategy'>
                <div className='w-1211'>
                    <div className='cs--block'>
                        <span className='cs--heading'>Corporate Level Strategy</span>
                        <span className='cs--info'>
                            We can simply say that corporate level strategies are concerned with questions on what business to compete in. Corporate level strategies affect the whole organization and are considered delicate in the strategic planning process
                        </span>
                    </div>
                    <div className='st--banner'>
                        <img
                            src={StImage}
                        />    
                    </div>
                    <div className='cs--block'>
                        <span className='cs--heading'>Growth Strategy</span>
                        <span className='cs--info'>
                        A growth strategy could be implemented by expanding operations both globally and locally; a corporation can also grow externally through mergers, acquisitions and strategic alliances.
                        <span className='block--cs'>
                            Example : ITC Ltd is classic example of diversification strategy it's provide ample of product under 1 brand name few are 
                        </span>
                        </span>
                    </div>
                    <div className='cs--block'>
                        <span className='cs--heading'>Diversification Strategy </span>
                        <span className='cs--info'>
                        A corporation is diversified when it's in two or more lines of business operating in distinct and diverse market environments.
                        <span className='block--cs'>
                            Example : ITC Ltd is classic example of diversification strategy it's provide ample of product under 1 brand name few are 
                        </span>
                        <ul className='cs--info-pointer'>
                            <li>
                                Processed Foods - Kitchens of India, Aashirvaad, Sunfeast, Mint - O, Candyman, and Bingo
                            </li>
                            <li>
                                Lifestyle Retailing - Wills Lifestyle, John Players, and Miss Players
                            </li>
                            <li>
                                Personal Care - Essenza Di Wills, Fiama Di Wills, Vivel Di Wills, Vivel, and Superia
                            </li>
                        </ul>
                        </span>
                    </div>
                </div>
            </section>
            <section className='co--badge-container'>
                <div className='co--badge'>
                    <div className='co--bage-item'>Corporation</div>
                    <div className='co--bage-item'>Corporation</div>
                    <div className='co--bage-item'>Corporation</div>
                    <div className='co--bage-item'>Corporation</div>
                    <div className='co--bage-item'>Corporation</div>
                    <div className='co--bage-item'>Corporation</div>
                    <div className='co--bage-item'>Corporation</div>
                    <div className='co--bage-item'>Corporation</div>
                    <div className='co--bage-item'>Corporation</div>
                    <div className='co-badge-full'>
                        Location:<span>DELHI, INDIA</span>
                    </div>
                </div>
            </section>
  </>
  )
}

export default TopicPage