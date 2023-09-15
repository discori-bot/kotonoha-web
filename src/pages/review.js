import React, { useEffect, useRef, useState } from 'react'
import DarkModeToggleButton from '../components/DarkModeToggleButton'
import LearningWordDisplay from '../components/LearningWordDisplay'
import InputForm from '../components/InputForm'
import topik from '../assets/topik.json'

class Card {
  constructor(card) {
    this.card = card
    this.partOfSpeech = card['Classification']
    this.complexity = card['Complexity']
    this.translation = card['English']
    this.frequencyRank = card['Frequecy Rank']
    this.romanised = card['Romanised']
    this.wiktionaryLink = card['Wiktionary Link']
    this.word = card['Word']
    this.wordReferenceLink = card['Wordreference Link']
    this.id = card['hidden numbering']
    this.partOfSpeechKorean = card['품사']
  }
}

export default function review() {

  const inputRef = useRef()
  const [currentCardsState, setCurrentCards] = useState([...Array(topik.cards.length).keys()])
  const idx = currentCardsState[0]
  const currentCard = new Card(topik.cards[idx])

  function handleInput(e) {
    const input = inputRef.current.value

    if (input === '') return
    if (e.key === 'Enter') {

      if (input === currentCard.translation) {
        setCurrentCards((prevState) => {
          let cards = [...prevState]
          cards.shift()
          return cards
        })
      }
      inputRef.current.value = null

    }
  }
  return (
      <>
      <DarkModeToggleButton />
      <LearningWordDisplay card={currentCard} />
      <InputForm ref={inputRef} callbackFn={handleInput} />
    </>
  )
}
