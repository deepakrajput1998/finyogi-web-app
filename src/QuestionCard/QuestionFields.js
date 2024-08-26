import React from 'react';
import './QuestionFields.css'

function QuestionFields({Question,fieldQuestion,checkInput}) {
  return (<>
            <label className='radio--fields' htmlFor={fieldQuestion}>
                <input type="radio" id={fieldQuestion} name="same" checked={checkInput} />
                <div className="radio--action" />
                <span>{Question}</span>
            </label>
  </>
  )
}

export default QuestionFields