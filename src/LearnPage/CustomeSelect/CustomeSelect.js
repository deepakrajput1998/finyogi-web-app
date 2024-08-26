import React from 'react';
import Select from 'react-select';
import './CustomeSelect.css';

function CustomeSelect({optionsSelect,placeholder,icon}) {
  return (<>
            <div className='rc--select'>
                <Select
                    option={optionsSelect}
                    placeholder={placeholder}
                />
                <img
                    src={icon}
                    width={23}
                    height={27}
                    className="rc-select-icon"
                />
            </div>
        </>
  )
}

export default CustomeSelect