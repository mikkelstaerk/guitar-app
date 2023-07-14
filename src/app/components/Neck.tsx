'use client'

import './Neck.css';
import instruments from '../data/instruments.json';

var guitar:Instrument = instruments[0] as Instrument;

function createMarker(marker:string) {
  return <div className={marker}></div>
}

function createColumns(stringNumber:number,chords:Array<Chord>){


  var td = [];
  let touched = false;

  for (let i=0; i<guitar.frets; i++) {
    var marker:string = guitar.markers.find(m => m.fret-1==i && m.string-1 == stringNumber)!==undefined?"marker":undefined;
    chords.forEach((chord, index) => {
      
      if(i==0) {
        if(chord.positions.find(m => m.fret==0 && m.string == stringNumber)) {
          touched = true;
        }
      }

      var position = chord.positions.find(m => m.fret-1==i && m.string == stringNumber);
      if(position !== undefined) {
        marker = "marker chord "+ ("chord"+index.toString()+" ") + (position.key==0?"root":position.key==3?"third":"fifth");
        console.log() 
        touched = true;
      } 
    });
      td.push(
          <td key={"pos-"+i+"-"+stringNumber} className={"fret"+(i+1).toString()}>{marker!==undefined ? createMarker(marker):""}</td>
      )
  }


  return {columns: td, touched:touched};
}

function createNumbers() {
  var td = [];
  for (let i=0; i<guitar.frets; i++) {
    td.push(<td key={"numbers-"+i}>{i+1}</td>);
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

  const title = chords[0]?.key.name + (chords[0]?.scale.short==='minor'?"m":"");
  const subtitle = chords[0]?.type.short;

  const items = [];
        for (const guitarString of guitar.strings) {
            const columns = createColumns(guitarString.number, chords);
            const styles = (guitarString.number==6?"last":"") + (columns.touched===true?" touched":"");

            items.push(<tr className={styles} key={guitarString.number}>
              <td className='key'><p>{guitarString.key}</p></td>
              {columns.columns}
            </tr>)
        }

  items.push(<tr key="numbers" className='numbers'><td key="number-fill"></td>{createNumbers()}</tr>);
  
  
    return (
      <div className="instrument guitar">
        <div className="bar"></div>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <table>
          <tbody>{items}</tbody>
        </table>
      </div>
    );
  }
  