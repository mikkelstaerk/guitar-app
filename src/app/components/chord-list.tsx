'use client'

import Neck from './Neck';

function listChords(chords:Chord[]){
  var td = [];
  for (let i=0; i<chords.length; i++) {
    td.push(<Neck chords={[chords[i]]} />);
  }
  return td;
}
export default function ChordList(props) {

    

    return (
      <div>
        {listChords(props.chords)}
      </div>
    )
  }
  