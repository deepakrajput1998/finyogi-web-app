import React from 'react';
import DownloadApp from '../DownloadApp/DownloadApp';
import ProfileHeader from '../Header/ProfileHeader';
import ProfileFooter from '../ProfileSection/ProfileFooter';
import SearchSection from '../ProfileSection/SearchSection';
import ModuleCard from './ModuleCard';
import stockMarket from '../assets/image/LearnModule/banner.svg'
import technicalAnalysis from '../assets/image/LearnModule/banner-2.svg'
import futureTrading from "../assets/image/LearnModule/banner-3.svg"
import './LearnPage.css'

function LearnPage() {
  return (<>
              <div className='full--container'>
                  <div className='main--section'>
                    <div className='full-top-section'>
                        <div className='calc--search'>
                            <SearchSection />
                        </div>
                    </div>
                    <div className='inner--container'>
                      <div className='w-1211'>
                        <div className='card--col-5'>
                          <span className='module--title'>Modules</span>
                          <div className='card--module mb-88px'>
                              <div className='card--module-items'>
                                <ModuleCard
                                  image={stockMarket}
                                  alt="banner"
                                  title="Stock Market Basics"
                                />
                              </div>
                              <div className='card--module-items'>
                                <ModuleCard
                                  image={technicalAnalysis}
                                  alt="banner"
                                  title="Technical Analysis"
                                />
                              </div>
                              <div className='card--module-items'>
                                <ModuleCard
                                  image={futureTrading}
                                  alt="banner"
                                  title="Future Trading"
                                />
                              </div>
                              <div className='card--module-items'>
                                <ModuleCard
                                  image={stockMarket}
                                  alt="banner"
                                  title="Stock Market Basics"
                                />
                              </div>
                              <div className='card--module-items'>
                                <ModuleCard
                                  image={technicalAnalysis}
                                  alt="banner"
                                  title="Technical Analysis"
                                />
                              </div>
                              <div className='card--module-items'>
                                <ModuleCard
                                  image={futureTrading}
                                  alt="banner"
                                  title="Future Trading"
                                />
                              </div>
                              <div className='card--module-items'>
                                <ModuleCard
                                  image={technicalAnalysis}
                                  alt="banner"
                                  title="Technical Analysis"
                                />
                              </div>
                              <div className='card--module-items'>
                                <ModuleCard
                                  image={stockMarket}
                                  alt="banner"
                                  title="Stock Market Basics"
                                />
                              </div>
                              <div className='card--module-items'>
                                <ModuleCard
                                  image={stockMarket}
                                  alt="banner"
                                  title="Stock Market Basics"
                                />
                              </div>
                              <div className='card--module-items'>
                                <ModuleCard
                                  image={technicalAnalysis}
                                  alt="banner"
                                  title="Technical Analysis"
                                />
                              </div>
                              <div className='card--module-items'>
                                <ModuleCard
                                  image={futureTrading}
                                  alt="banner"
                                  title="Future Trading"
                                />
                              </div>
                              <div className='card--module-items'>
                                <ModuleCard
                                  image={stockMarket}
                                  alt="banner"
                                  title="Stock Market Basics"
                                />
                              </div>
                              <div className='card--module-items'>
                                <ModuleCard
                                  image={technicalAnalysis}
                                  alt="banner"
                                  title="Technical Analysis"
                                />
                              </div>
                              <div className='card--module-items'>
                                <ModuleCard
                                  image={futureTrading}
                                  alt="banner"
                                  title="Future Trading"
                                />
                              </div>
                              <div className='card--module-items'>
                                <ModuleCard
                                  image={technicalAnalysis}
                                  alt="banner"
                                  title="Technical Analysis"
                                />
                              </div>
                              <div className='card--module-items'>
                                <ModuleCard
                                  image={stockMarket}
                                  alt="banner"
                                  title="Stock Market Basics"
                                />
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
        </>
  )
}

export default LearnPage