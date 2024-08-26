import React from 'react';
import './PointerSection.css'

function PointerSection({title,colorText}) {
  return (<>
            <div className={`badge--tile ${colorText}`}>
                {title}
            </div>
  </>
  )
}

export default PointerSection