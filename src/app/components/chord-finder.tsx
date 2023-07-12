'use client'

import React, {useEffect, useState} from 'react';

import chords from '../data/chords.json';

import ChooseKey from "./choose-key";
import ChooseScale from './choose-scale';
import ChordList from './chord-list';
import ChooseType from './choose-type';


export default function ChordFinder() {
  const [key, setKey] = useState('');
  const [scale, setScale] = useState('');
  const [type, setType] = useState('');
  const [filteredChords, setChords] = useState<Chord[]>([]);

  const findChords = () => {
    const allChords:Chord[] = chords.filter(c => c.key==key && c.scale==scale && c.type==type) as Chord[];
    setChords(allChords);
  }

  useEffect(() => {
    findChords();

  }, [key,scale, type]);

  const updateKey = (value) => {
    setKey(value)
  }
  const updateScale = (value) => {
    setScale(value)
  }
  const updateType = (value) => {
    setType(value)
  }

  return (
    <div>
    <div className="w-full max-w-5xl items-center">
      <ChooseKey callback={updateKey} />
      <ChooseScale callback={updateScale} />
      <ChooseType callback={updateType} />
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
