import React from 'react'
import styles from '../styles/InputForm.module.scss'

function InputForm(props, ref) {

  return (
    <div className={styles.answerForm}>
      <input type="text" className={styles.answerInput} ref={ref} onKeyDown={(e) => { props.callbackFn(e) }} name="answer-input" placeholder="Type your answer here!"></input>
    </div>
  )
}

export default React.forwardRef(((props, ref) => InputForm(props, ref)))
