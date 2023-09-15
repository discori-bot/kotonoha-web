import React, { useState } from "react";
import LearningWordDisplay from "../components/LearningWordDisplay";
import DarkModeToggleButton from "../components/DarkModeToggleButton";
import topik from "../assets/topik.json";
import LearnDetailDisplay from "../components/LearnDetailDisplay";

class Card {
  card;
  partOfSpeech: string;
  complexity: string;
  translation: string;
  frequencyRank: string;
  romanised: string;
  wiktionaryLink: string;
  word: string;
  wordReferenceLink: string;
  id: string;
  partOfSpeechKorean: string;

  constructor(card) {
    this.card = card;
    this.partOfSpeech = card["Classification"];
    this.complexity = card["Complexity"];
    this.translation = card["English"];
    this.frequencyRank = card["Frequency Rank"];
    this.romanised = card["Romanised"];
    this.wiktionaryLink = card["Wiktionary Link"];
    this.word = card["Word"];
    this.wordReferenceLink = card["Wordreference Link"];
    this.id = card["hidden numbering"];
    this.partOfSpeechKorean = card["품사"];
  }
}

export default function learn() {
  const [currentCardDeck, setCurrentCards] = useState(topik.cards);
  const currentCard = new Card(currentCardDeck[0]);

  return (
    <>
      <DarkModeToggleButton />
      <LearningWordDisplay card={currentCard} />
      <LearnDetailDisplay card={currentCard} />
    </>
  );
}
