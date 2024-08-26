import React from 'react'
import './BadgeIndicator.css'

function BadgeIndicator({img,title,activeClass}) {
  return (<>
          <div className={`badge--indicator ${activeClass}`}>
            <div className='icon--circle'>
                <img
                    src={img}
                    width={8}
                    height={6}
                />
            </div>
            <span>{title}</span>
        </div>
  </>
  )
}

export default BadgeIndicator;