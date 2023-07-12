'use client'

import React, {useEffect, useState} from 'react';

import chords from '../data/chords.json';

import ChooseKey from "./choose-key";
import ChooseScale from './choose-scale';
import ChordList from './chord-list';


export default function ChordFinder() {
  const [key, setKey] = useState('');
  const [scale, setScale] = useState('');
  const [filteredChords, setChords] = useState<Chord[]>([]);

  const findChords = () => {
    const allChords:Chord[] = chords.filter(c => c.key==key && c.scale==scale) as Chord[];
    setChords(allChords);
  }

  useEffect(() => {
    findChords();

  }, [key,scale]);

  const updateKey = (value) => {
    setKey(value)
  }
  const updateScale = (value) => {
    setScale(value)
  }

  return (
    <div>
    <div className="w-full max-w-5xl items-center">
      <ChooseKey callback={updateKey} />
      <ChooseScale callback={updateScale} />
    </div>
        <div className="w-full max-w-5xl items-center">
          {key} - {scale}
        </div>

        <div className="w-full max-w-5xl items-center">
          <ChordList chords={filteredChords} />
        </div>
    </div>
  )
}
