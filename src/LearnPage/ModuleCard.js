import React from 'react'
import './ModuleCard.css'

function ModuleCard({image,alt,title}) {
  return (<>
            <div className='module--image'>
                <img
                    src={image}
                    alt={alt}
                    width={100}
                    height={100}
                />
            </div>
            <div className='module--text'>{title}</div>
        </>
  )
}

export default ModuleCard