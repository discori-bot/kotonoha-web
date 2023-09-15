import React from 'react'
import styles from '../styles/WordLearn.module.scss'

export default function LearningWordDisplay(props) {
  var card = props.card

  return (
    <h3 className={styles.learningWord}>{card.word}</h3>
  )
}
