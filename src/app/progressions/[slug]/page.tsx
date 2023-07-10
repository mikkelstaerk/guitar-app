
'use client'

import React, {useEffect, useState} from 'react';

import ChordList from "@/app/components/chord-list";
import chords from "../../data/chords.json";
import progressions from "../../data/progressions.json";

export default function Page({ params }: { params: { slug: string } }) {

  const [key, setKey] = useState('');
  const [scale, setScale] = useState('');
  const [type, setType] = useState('triad');

  const pro = progressions.find(p => p.date === params.slug);
  const progression = pro!==undefined?pro:null;

   
  if(progression!=null) {
    // setKey(progression.key);
    // setScale(progression.scale);
  }

  
  function findChords() {
    if(progression===undefined) {return []}
    const proChords = [];
    progression.chords.forEach(chord => {
      const cho = chords.filter(c => c.key==chord.key && c.scale==chord.scale && c.type==type);
      if(cho.length>0) {
        proChords.push(cho)
      }
      // console.log(cho);


    });

    return proChords;
  }

  findChords();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <ChordList chords={findChords()} />
      </div>
    </main>
  )
}
