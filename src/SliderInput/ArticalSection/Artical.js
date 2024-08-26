import React from 'react';
import SearchSection from '../../ProfileSection/SearchSection';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import imageBanner from '../../assets/image/ArticalSection/book-image.svg'
import imageBanner2 from '../../assets/image/ArticalSection/book-image-2.svg'
import imageVideo from '../../assets/image/ArticalSection/video-image.svg'
import videoIcon from '../../assets/image/ArticalSection/polygon-icon.svg'
import './Artical.css'
import ArticalCard from './ArticalCard';
import BannerArtical from './BannerArtical';

function Artical() {
  return (<>
            <div className='artical--container'>
                <div className='main--section'>
                    <div className='full-top-section'>
                        <div className='calc--search'>
                            <SearchSection />
                        </div>
                    </div>
                    <div className='tab--container'>
                    <Tabs>
                        <TabList>
                            <Tab>All</Tab>
                            <Tab>Videos</Tab>
                            <Tab>Books</Tab>
                        </TabList>

                        <TabPanel>
                            <div className='tab--panel'>
                                <div className='tab--panel-items'>
                                    <ArticalCard
                                        image={imageBanner}
                                        cardTitle="The Horrifying Star Wars Holidays Special Has Been Given An Unofficial 4K Upgrade"
                                        writerName="By Jane Smith"
                                        bottomSection="Entertainment"
                                        timeSection="5m ago"
                                    />
                                </div>
                                <div className='tab--panel-items'>
                                    <ArticalCard
                                        image={imageVideo}
                                        cardTitle="The Horrifying Star Wars Holidays Special Has Been Given An Unofficial 4K Upgrade"
                                        writerName="By Jane Smith"
                                        bottomSection="Entertainment"
                                        timeSection="5m ago"
                                        videoSection={videoIcon}
                                    />
                                </div>
                                <div className='tab--panel-items'>
                                    <ArticalCard
                                        image={imageBanner2}
                                        cardTitle="The Horrifying Star Wars Holidays Special Has Been Given An Unofficial 4K Upgrade"
                                        writerName="By Jane Smith"
                                        bottomSection="Entertainment"
                                        timeSection="5m ago"
                                    />
                                </div>
                                <div className='tab--panel-items'>
                                    <ArticalCard
                                        image={imageVideo}
                                        cardTitle="The Horrifying Star Wars Holidays Special Has Been Given An Unofficial 4K Upgrade"
                                        writerName="By Jane Smith"
                                        bottomSection="Entertainment"
                                        timeSection="5m ago"
                                        videoSection={videoIcon}
                                    />
                                </div>
                                <div className='full-tab-pannel'>
                                    <BannerArtical />    
                                </div>
                                <div className='tab--panel-items'>
                                    <ArticalCard
                                        image={imageBanner}
                                        cardTitle="The Horrifying Star Wars Holidays Special Has Been Given An Unofficial 4K Upgrade"
                                        writerName="By Jane Smith"
                                        bottomSection="Entertainment"
                                        timeSection="5m ago"
                                    />
                                </div>
                                <div className='tab--panel-items'>
                                    <ArticalCard
                                        image={imageVideo}
                                        cardTitle="The Horrifying Star Wars Holidays Special Has Been Given An Unofficial 4K Upgrade"
                                        writerName="By Jane Smith"
                                        bottomSection="Entertainment"
                                        timeSection="5m ago"
                                        videoSection={videoIcon}
                                    />
                                </div>
                                <div className='tab--panel-items'>
                                    <ArticalCard
                                        image={imageBanner2}
                                        cardTitle="The Horrifying Star Wars Holidays Special Has Been Given An Unofficial 4K Upgrade"
                                        writerName="By Jane Smith"
                                        bottomSection="Entertainment"
                                        timeSection="5m ago"
                                    />
                                </div>
                                <div className='tab--panel-items'>
                                    <ArticalCard
                                        image={imageVideo}
                                        cardTitle="The Horrifying Star Wars Holidays Special Has Been Given An Unofficial 4K Upgrade"
                                        writerName="By Jane Smith"
                                        bottomSection="Entertainment"
                                        timeSection="5m ago"
                                        videoSection={videoIcon}
                                    />
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='tab--panel'>
                                <div className='tab--panel-items'>
                                    <ArticalCard
                                        image={imageVideo}
                                        cardTitle="The Horrifying Star Wars Holidays Special Has Been Given An Unofficial 4K Upgrade"
                                        writerName="By Jane Smith"
                                        bottomSection="Entertainment"
                                        timeSection="5m ago"
                                        videoSection={videoIcon}
                                    />
                                </div>
                                <div className='tab--panel-items'>
                                    <ArticalCard
                                        image={imageVideo}
                                        cardTitle="The Horrifying Star Wars Holidays Special Has Been Given An Unofficial 4K Upgrade"
                                        writerName="By Jane Smith"
                                        bottomSection="Entertainment"
                                        timeSection="5m ago"
                                        videoSection={videoIcon}
                                    />
                                </div>
                                <div className='tab--panel-items'>
                                    <ArticalCard
                                        image={imageVideo}
                                        cardTitle="The Horrifying Star Wars Holidays Special Has Been Given An Unofficial 4K Upgrade"
                                        writerName="By Jane Smith"
                                        bottomSection="Entertainment"
                                        timeSection="5m ago"
                                        videoSection={videoIcon}
                                    />
                                </div>
                                <div className='tab--panel-items'>
                                    <ArticalCard
                                        image={imageVideo}
                                        cardTitle="The Horrifying Star Wars Holidays Special Has Been Given An Unofficial 4K Upgrade"
                                        writerName="By Jane Smith"
                                        bottomSection="Entertainment"
                                        timeSection="5m ago"
                                        videoSection={videoIcon}
                                    />
                                </div>
                                <div className='tab--panel-items'>
                                    <ArticalCard
                                        image={imageVideo}
                                        cardTitle="The Horrifying Star Wars Holidays Special Has Been Given An Unofficial 4K Upgrade"
                                        writerName="By Jane Smith"
                                        bottomSection="Entertainment"
                                        timeSection="5m ago"
                                        videoSection={videoIcon}
                                    />
                                </div>
                                <div className='tab--panel-items'>
                                    <ArticalCard
                                        image={imageVideo}
                                        cardTitle="The Horrifying Star Wars Holidays Special Has Been Given An Unofficial 4K Upgrade"
                                        writerName="By Jane Smith"
                                        bottomSection="Entertainment"
                                        timeSection="5m ago"
                                        videoSection={videoIcon}
                                    />
                                </div>
                                <div className='tab--panel-items'>
                                    <ArticalCard
                                        image={imageVideo}
                                        cardTitle="The Horrifying Star Wars Holidays Special Has Been Given An Unofficial 4K Upgrade"
                                        writerName="By Jane Smith"
                                        bottomSection="Entertainment"
                                        timeSection="5m ago"
                                        videoSection={videoIcon}
                                    />
                                </div>
                                <div className='tab--panel-items'>
                                    <ArticalCard
                                        image={imageVideo}
                                        cardTitle="The Horrifying Star Wars Holidays Special Has Been Given An Unofficial 4K Upgrade"
                                        writerName="By Jane Smith"
                                        bottomSection="Entertainment"
                                        timeSection="5m ago"
                                        videoSection={videoIcon}
                                    />
                                </div>
                                <div className='full-tab-pannel'>
                                    <BannerArtical />    
                                </div>
                                <div className='tab--panel-items'>
                                    <ArticalCard
                                        image={imageVideo}
                                        cardTitle="The Horrifying Star Wars Holidays Special Has Been Given An Unofficial 4K Upgrade"
                                        writerName="By Jane Smith"
                                        bottomSection="Entertainment"
                                        timeSection="5m ago"
                                        videoSection={videoIcon}
                                    />
                                </div>
                                <div className='tab--panel-items'>
                                    <ArticalCard
                                        image={imageVideo}
                                        cardTitle="The Horrifying Star Wars Holidays Special Has Been Given An Unofficial 4K Upgrade"
                                        writerName="By Jane Smith"
                                        bottomSection="Entertainment"
                                        timeSection="5m ago"
                                        videoSection={videoIcon}
                                    />
                                </div>
                                <div className='tab--panel-items'>
                                    <ArticalCard
                                        image={imageVideo}
                                        cardTitle="The Horrifying Star Wars Holidays Special Has Been Given An Unofficial 4K Upgrade"
                                        writerName="By Jane Smith"
                                        bottomSection="Entertainment"
                                        timeSection="5m ago"
                                        videoSection={videoIcon}
                                    />
                                </div>
                                <div className='tab--panel-items'>
                                    <ArticalCard
                                        image={imageVideo}
                                        cardTitle="The Horrifying Star Wars Holidays Special Has Been Given An Unofficial 4K Upgrade"
                                        writerName="By Jane Smith"
                                        bottomSection="Entertainment"
                                        timeSection="5m ago"
                                        videoSection={videoIcon}
                                    />
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='tab--panel'>
                                <div className='tab--panel-items'>
                                    <ArticalCard
                                        image={imageBanner}
                                        cardTitle="The Horrifying Star Wars Holidays Special Has Been Given An Unofficial 4K Upgrade"
                                        writerName="By Jane Smith"
                                        bottomSection="Entertainment"
                                        timeSection="5m ago"
                                    />
                                </div>
                                <div className='tab--panel-items'>
                                    <ArticalCard
                                        image={imageBanner2}
                                        cardTitle="The Horrifying Star Wars Holidays Special Has Been Given An Unofficial 4K Upgrade"
                                        writerName="By Jane Smith"
                                        bottomSection="Entertainment"
                                        timeSection="5m ago"
                                    />
                                </div>
                                <div className='tab--panel-items'>
                                    <ArticalCard
                                        image={imageBanner}
                                        cardTitle="The Horrifying Star Wars Holidays Special Has Been Given An Unofficial 4K Upgrade"
                                        writerName="By Jane Smith"
                                        bottomSection="Entertainment"
                                        timeSection="5m ago"
                                    />
                                </div>
                                <div className='tab--panel-items'>
                                    <ArticalCard
                                        image={imageBanner2}
                                        cardTitle="The Horrifying Star Wars Holidays Special Has Been Given An Unofficial 4K Upgrade"
                                        writerName="By Jane Smith"
                                        bottomSection="Entertainment"
                                        timeSection="5m ago"
                                    />
                                </div>
                                <div className='tab--panel-items'>
                                    <ArticalCard
                                        image={imageBanner}
                                        cardTitle="The Horrifying Star Wars Holidays Special Has Been Given An Unofficial 4K Upgrade"
                                        writerName="By Jane Smith"
                                        bottomSection="Entertainment"
                                        timeSection="5m ago"
                                    />
                                </div>
                                <div className='tab--panel-items'>
                                    <ArticalCard
                                        image={imageBanner2}
                                        cardTitle="The Horrifying Star Wars Holidays Special Has Been Given An Unofficial 4K Upgrade"
                                        writerName="By Jane Smith"
                                        bottomSection="Entertainment"
                                        timeSection="5m ago"
                                    />
                                </div>
                                <div className='tab--panel-items'>
                                    <ArticalCard
                                        image={imageBanner}
                                        cardTitle="The Horrifying Star Wars Holidays Special Has Been Given An Unofficial 4K Upgrade"
                                        writerName="By Jane Smith"
                                        bottomSection="Entertainment"
                                        timeSection="5m ago"
                                    />
                                </div>
                                <div className='tab--panel-items'>
                                    <ArticalCard
                                        image={imageBanner2}
                                        cardTitle="The Horrifying Star Wars Holidays Special Has Been Given An Unofficial 4K Upgrade"
                                        writerName="By Jane Smith"
                                        bottomSection="Entertainment"
                                        timeSection="5m ago"
                                    />
                                </div>
                                <div className='full-tab-pannel'>
                                    <BannerArtical />    
                                </div>
                                <div className='tab--panel-items'>
                                    <ArticalCard
                                        image={imageBanner}
                                        cardTitle="The Horrifying Star Wars Holidays Special Has Been Given An Unofficial 4K Upgrade"
                                        writerName="By Jane Smith"
                                        bottomSection="Entertainment"
                                        timeSection="5m ago"
                                    />
                                </div>
                                <div className='tab--panel-items'>
                                    <ArticalCard
                                        image={imageBanner2}
                                        cardTitle="The Horrifying Star Wars Holidays Special Has Been Given An Unofficial 4K Upgrade"
                                        writerName="By Jane Smith"
                                        bottomSection="Entertainment"
                                        timeSection="5m ago"
                                    />
                                </div>
                                <div className='tab--panel-items'>
                                    <ArticalCard
                                        image={imageBanner}
                                        cardTitle="The Horrifying Star Wars Holidays Special Has Been Given An Unofficial 4K Upgrade"
                                        writerName="By Jane Smith"
                                        bottomSection="Entertainment"
                                        timeSection="5m ago"
                                    />
                                </div>
                                <div className='tab--panel-items'>
                                    <ArticalCard
                                        image={imageBanner2}
                                        cardTitle="The Horrifying Star Wars Holidays Special Has Been Given An Unofficial 4K Upgrade"
                                        writerName="By Jane Smith"
                                        bottomSection="Entertainment"
                                        timeSection="5m ago"
                                    />
                                </div>
                            </div>
                        </TabPanel>
                    </Tabs>
                    </div>
                </div>
            </div>
  </>
  )
}

export default Artical