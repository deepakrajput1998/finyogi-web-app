import React from 'react';
import Breadcrum from '../ProfileSection/Breadcrum';
import bannerImage from '../assets/image/artical-banner.png';
import iconPlay from '../assets/image/icon-play-2.svg';
import bookSample from '../assets/image/book-sample.png';
import bookSample1 from '../assets/image/book-img-1.svg';
import bookSample2 from '../assets/image/book-img-2.svg';
import bookSample3 from '../assets/image/book-img-3.svg';
import amazone from '../assets/image/amazone.svg';
import flipkart from '../assets/image/flipkart.svg';
import myntra from '../assets/image/myntra.svg';
import './ArticalBooks.css'

function ArticalBooks() {
  return (<>
        <Breadcrum
            field1="Article"
            field2="Books"
        />
        <div className='artical--banner'>
            <img
                src={bannerImage}
                width={100}
                height={100}
            />  
        </div>
        <div className='w-1211'>
            <div className='artical--book-section'>
                    <div className='book--image'>
                        <img
                            src={bookSample}
                            width={129}
                            height={196}
                        />
                    </div>
                    <div className='book--right'>
                        <span className='book--title'>The Finance Book</span>
                        <span className='book--author'>Lydia Jaeger</span>
                        <button type='button' className='btn--play-book'>
                            <div className='play--sec'>
                                <img
                                    src={iconPlay}
                                    width={20}
                                    height={20}
                                />
                            </div>
                            <span>Listen</span>
                        </button>
                        <div className='book--summery-wrapper'>
                            <div className='book--summery-inner'>  
                                <div className='book--summery-heading'>Book Summery</div> 
                                <p className='book--summery-info'>
                                    Lorem ipsum dolor sit amet consectetur. Condimentum tellus massa faucibus tellus elementum amet sed justo sed. Lacus diam sem justo aliquet ultrices pharetra quis. Sem in fermentum tellus tellus dictum eu ut maecenas blandit. Ipsum nunc auctor nibh porta ornare nullam sed nullam. Vehicula in aliquam sagittis in. Elit vestibulum sit adipiscing erat. Non sed porttitor phasellus vel adipiscing posuere. Tortor nunc quis neque venenatis.
                                    Id dui amet sollicitudin a. Dui gravida netus pharetra id. Id massa eget accumsan risus volutpat suspendisse. Vulputate ut nisl urna felis. Tellus scelerisque amet pretium quis. Amet dolor dui adipiscing laoreet. Suspendisse lorem dui diam at. Dui pellentesque dignissim quis orci dignissim. Felis lacus leo rhoncus adipiscing sapien hendrerit. Tellus egestas at laoreet pulvinar euismod netus at. Eros sollicitudin egestas in gravida duis id ut neque sit. Eu sed nibh et amet neque sagittis nisl volutpat tortor. Tortor nulla posuere nec euismod sed nunc ornare.
                                    Aliquet ut metus eleifend scelerisque sit morbi. Mauris proin purus facilisis ultrices arcu. Congue ut semper donec sed. Purus feugiat blandit pulvinar eget aliquam dignissim ultrices cursus. Ut mattis netus gravida in accumsan mi. Morbi vel mauris imperdiet consequat in sed.
                                    Facilisi pulvinar sollicitudin viverra amet. Aliquam morbi massa facilisis elit ipsum erat eleifend. Ut convallis tristique at facilisi lectus. Porttitor sed ut fermentum egestas. Feugiat pellentesque ut ut mattis ut neque eu nisi bibendum. Quis fermentum quam ante pellentesque. Diam duis habitant purus tincidunt a. Senectus iaculis volutpat risus tempor quis venenatis urna aliquet quam. Aliquet quam lectus vel commodo a.

                                </p>
                            </div>
                            <div className='book--summery-inner'>  
                                <div className='book--summery-heading'>Key Learning</div> 
                                <p className='book--summery-info'>
                                    Lorem ipsum dolor sit amet consectetur. Condimentum tellus massa faucibus tellus elementum amet sed justo sed. Lacus diam sem justo aliquet ultrices pharetra quis. Sem in fermentum tellus tellus dictum eu ut maecenas blandit. Ipsum nunc auctor nibh porta ornare nullam sed nullam. Vehicula in aliquam sagittis in. Elit vestibulum sit adipiscing erat. Non sed porttitor phasellus vel adipiscing posuere. Tortor nunc quis neque venenatis.
                                    Id dui amet sollicitudin a. Dui gravida netus pharetra id. Id massa eget accumsan risus volutpat suspendisse. Vulputate ut nisl urna felis. Tellus scelerisque amet pretium quis. Amet dolor dui adipiscing laoreet. Suspendisse lorem dui diam at. Dui pellentesque dignissim quis orci dignissim. Felis lacus leo rhoncus adipiscing sapien hendrerit. Tellus egestas at laoreet pulvinar euismod netus at. Eros sollicitudin egestas in gravida duis id ut neque sit. Eu sed nibh et amet neque sagittis nisl volutpat tortor. Tortor nulla posuere nec euismod sed nunc.
                                </p>
                            </div>
                            <div className='hider' />

                            <button type='button' className='btn--read-more'>Read More</button>
                        </div>
                    </div>
            </div>
        </div>

        <div className='w-1211'>
            <div className='online--text'>Buying online</div>
            <div className='online--section'>
                <img
                    src={amazone}
                    width={201}
                    height={67}
                />
                <img
                    src={flipkart}
                    width={201}
                    height={67}
                />
                <img
                    src={myntra}
                    width={201}
                    height={67}
                />
            </div>
        </div>

        <div className='section--trending'>
            <div className='trending--books'>
                <div className='trending--header'>
                    <span>Trending Books</span>
                    <button type='button' className='btn--see-all'>See all</button>
                </div>
                <div className='book--section-slide'>
                    <div className='slide--book'>
                        <div className='book--items'>
                            <div className='book--img'>
                                <img
                                    src={bookSample1}
                                    width={292}
                                    height={445}
                                    alt="book tranding"
                                />
                            </div>
                            <span className='book--name'>Think & Grow Rich</span>
                            <span className='book-author'>Napoleon Hill</span>
                        </div>
                        <div className='book--items'>
                            <div className='book--img'>
                                <img
                                    src={bookSample2}
                                    width={292}
                                    height={445}
                                    alt="book tranding"
                                />
                            </div>
                            <span className='book--name'>Deep Finance</span>
                            <span className='book-author'>Glen Hopper</span>
                        </div>
                        <div className='book--items'>
                            <div className='book--img'>
                                <img
                                    src={bookSample3}
                                    width={292}
                                    height={445}
                                    alt="book tranding"
                                />
                            </div>
                            <span className='book--name'>I Will Teach You......</span>
                            <span className='book-author'>Ramit Sethi</span>
                        </div>
                        <div className='book--items'>
                            <div className='book--img'>
                                <img
                                    src={bookSample2}
                                    width={292}
                                    height={445}
                                    alt="book tranding"
                                />
                            </div>
                            <span className='book--name'>Deep Finance</span>
                            <span className='book-author'>Glen Hopper</span>
                        </div>
                        <div className='book--items'>
                            <div className='book--img'>
                                <img
                                    src={bookSample3}
                                    width={292}
                                    height={445}
                                    alt="book tranding"
                                />
                            </div>
                            <span className='book--name'>I Will Teach You......</span>
                            <span className='book-author'>Ramit Sethi</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </>
  )
}

export default ArticalBooks