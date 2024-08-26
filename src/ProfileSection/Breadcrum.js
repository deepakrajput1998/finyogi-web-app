import React from 'react'
import './Breadcrum.css'

function Breadcrum({field1,field2}) {
  return (<>
            <div className='breadcrum--wrapper'>
                <div className='breadcrum'>
                    <ul>
                        <li>{field1}</li>
                        <li className='active'>{field2}</li>
                    </ul>
                </div>
            </div>
        </>
  )
}

export default Breadcrum