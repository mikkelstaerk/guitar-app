'use client'

import React, {useEffect, useState} from 'react';


import ChooseKey from "./choose-key";
import ChooseScale from './choose-scale';
import ChordList from './chord-list';
import ChooseType from './choose-type';


export default  function ChordFinder(props) {

  const chords = props.data.chordCollection.items;

  const [key, setKey] = useState('');
  const [scale, setScale] = useState('');
  const [type, setType] = useState('');
  const [filteredChords, setChords] = useState<Chord[]>([]);



  const findChords = () => {
    const allChords:Chord[] = chords.filter(c => c.key.name==key && c.scale.short==scale && c.type.short==type) as Chord[];
    
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
      <ChooseKey keys={props.data.keyCollection.items} callback={updateKey} />
      <ChooseScale scales={props.data.scaleCollection.items} callback={updateScale} />
      <ChooseType callback={updateType} />
    </div>

        <div className="w-full max-w-5xl items-center mt-10">
          <ChordList chords={filteredChords} />
        </div>
    </div>
  )
}
