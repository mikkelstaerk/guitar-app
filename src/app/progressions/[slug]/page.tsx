
'use client'

import React, {useEffect, useState} from 'react';

import ChordList from "@/app/components/chord-list";
// import chords from "../../data/chords.json";
import progressions from "../../data/progressions.json";
import ChooseType from '@/app/components/choose-type';
import getData from '@/app/service/contentful';

export default function Page({ params }: { params: { slug: string } }) {
  
    const [key, setKey] = useState('');
    const [scale, setScale] = useState('');
    const [type, setType] = useState('chord');
    const [chordsselected, setChords] = useState([]);

  let chords = [];
  getData().then(data => {
    chords = data.chordCollection.items;
    // console.log(chords);
    findChords();
  });

  const pro = progressions.find(p => p.date === params.slug);
  const progression:Progression = pro!==undefined?pro as Progression:null;

   
  if(progression!=null) {
    // setKey(progression.key);
    // setScale(progression.scale);
  }

  const updateType = (value) => {
    setType(value)
  }

  
  function findChords() {
    if(progression===undefined) {return []}
    const proChords = [];
    progression.chords.forEach(chord => {
      const cho = chords.filter(c => c.key.name==chord.key && c.scale.short==chord.scale && c.type.short==type);

      if(cho.length>0) {
        proChords.push(cho);
      }
    });

    setChords(proChords);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <ChooseType callback={updateType} />
      <div className="items-center justify-between mt-10">
        <ChordList chords={chordsselected} />
        </div>
      </div>
    </main>
  )
}
