'use client'

import './Neck.css';
import instruments from '../data/instruments.json';

var guitar:Instrument = instruments[0] as Instrument;

function createMarker(marker:string) {
  return <div className={marker}></div>
}

function createColumns(number:number,chords:Array<Chord>){


  var td = [];

  for (let i=0; i<guitar.frets; i++) {
    var marker = guitar.markers.find(m => m.fret-1==i && m.string-1 == number)!==undefined?"marker":undefined;
    chords.forEach((chord, index) => {
      
      var position = chord.positions.find(m => m.fret-1==i && m.string == number);
      if(position !== undefined) {
        marker = "marker chord "+ ("chord"+index.toString()+" ") + (position.key==0?"root":position.key==3?"third":"fifth"); 
      } 
    });
      td.push(
          <td key={"pos-"+i+"-"+number} className={"fret"+(i+1).toString()}>{marker!==undefined ? createMarker(marker):""}</td>
      )
  }
  return td;
}

function createNumbers() {
  var td = [];
  for (let i=0; i<guitar.frets; i++) {
    td.push(<td>{i+1}</td>);
  }
  return td;
}

export default function Neck(props) {
  let chords = props.chords;
  if(chords.length > 0) {
    if(Array.isArray(chords[0])) {
      chords = chords[0];
    }
  }

  const title = chords[0]?.key + (chords[0]?.scale==='minor'?"m":"");

  const items = [];
        for (const guitarString of guitar.strings) {
            items.push(<tr className={guitarString.number==6?"last":""} key={guitarString.number}>
              <td className='key'><p>{guitarString.key}</p></td>
              {createColumns(guitarString.number, chords)}
            </tr>)
        }

  items.push(<tr className='numbers'><td></td>{createNumbers()}</tr>);
  
  
    return (
      <div className="instrument guitar">
        <div className="bar"></div>
        <h2>{title}</h2>
        <table>
          <tbody>{items}</tbody>
        </table>
      </div>
    );
  }
  