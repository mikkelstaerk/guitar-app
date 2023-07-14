
'use client'

import React, {useLayoutEffect, useState} from 'react';

import ChordList from "@/app/components/chord-list";
import ChooseType from '@/app/components/choose-type';
import contentful from '@/app/service/contentful';

export default function Page({ params }: { params: { slug: string } }) {
  
    const [key, setKey] = useState('');
    const [scale, setScale] = useState('');
    const [type, setType] = useState('');
    let [chordsselected, setChords] = useState([]);

    useLayoutEffect(() => {
    }, [key, type,scale]);

    let progression:Progression = null;

  let chords = [];
  contentful.getData().then(data => {
    chords = data.chordCollection.items;
    contentful.getProgressions().then(progres => {
      progression = progres.progressionCollection.items.find(p => encodeURIComponent(p.title)==params.slug);
      // findChords();
    });
  });

  const updateType = (value) => {
    setType(value)
    findChords(value)
  }
  
  // console.log(chordsselected);
  function findChords(newType) {

    if(progression===null) {return []}
    const proChords = [];
    progression.chordsCollection.items.forEach(chord => {
      const cho = chords.filter(c => c.key.name==chord.key.name && c.scale.short==chord.scale.short && c.type.short==newType);

      if(cho.length>0) {
        proChords.push(cho);
      }
    });

    if(chordsselected!==proChords) {
      setChords(proChords);
    }
    // chordsselected = proChords;
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
