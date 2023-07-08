'use client'

import React, {useEffect, useState} from 'react';

import chords from '../data/chords.json';

import ChooseKey from "./choose-key";
import ChooseType from './choose-type';
import ChordList from './chord-list';


export default function ChordFinder() {
  const [key, setKey] = useState('');
  const [scale, setScale] = useState('');
  const [filteredChords, setChords] = useState([]);

  const findChords = () => {
    const allChords = chords.filter(c => c.key==key && c.scale==scale);
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
          <ChooseType callback={updateScale} />
          {key} - {scale}
        </div>

        <div className="w-full max-w-5xl items-center">
          <ChordList chords={filteredChords} />
        </div>
    </div>
  )
}
