import React from 'react';
import searchIcon from '../assets/image/ProfileImages/search-icon.svg'
import './SearchSection.css'

function SearchSection() {
  return (<>
            <div className='search--seaction'>
                <input type={'text'} placeholder="search" />
                <button type='button' className='btn--search-close'>
                    <div />
                </button>
                <button type='button' className='btn--search'>
                    <img
                        src={searchIcon}
                        alt="search icon"
                        width={24}
                        height={24}
                    />    
                </button>
                <div className='search--dropdown'>
                    <span className='search--result'>3 search result (s)</span>
                    <div className='search--result-section'>
                        <div className='search--result-items'>
                            <div className='item--number'>
                                1    
                            </div>
                            <div className='search--content'>
                                <div className='search--content-top'>
                                    <span className='text--finance'>Finance</span>
                                    <sapn className='text--book'>Books</sapn>
                                </div>
                                <div className='search--content-info'>
                                Semper consequat pharetra vitae nisl eget lectus. Convallis in turpis quam sed in. Semper consequat pharetra vitae nisl eget lectus. Convallis in turpis quam sed in.      
                                </div>
                            </div>
                        </div>
                        <div className='search--result-items active'>
                            <div className='item--number'>
                                2    
                            </div>
                            <div className='search--content'>
                                <div className='search--content-top'>
                                    <span className='text--finance'>Finance</span>
                                    <sapn className='text--book'>Books</sapn>
                                </div>
                                <div className='search--content-info'>
                                Semper consequat pharetra vitae nisl eget lectus. Convallis in turpis quam sed in. Semper consequat pharetra vitae nisl eget lectus. Convallis in turpis quam sed in.      
                                </div>
                            </div>
                        </div>
                        <div className='search--result-items active'>
                            <div className='item--number'>
                                3    
                            </div>
                            <div className='search--content'>
                                <div className='search--content-top'>
                                    <span className='text--finance'>Finance</span>
                                    <sapn className='text--book'>Books</sapn>
                                </div>
                                <div className='search--content-info'>
                                Semper consequat pharetra vitae nisl eget lectus. Convallis in turpis quam sed in. Semper consequat pharetra vitae nisl eget lectus. Convallis in turpis quam sed in.      
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  </>
  )
}

export default SearchSection