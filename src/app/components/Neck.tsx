'use client'

import './Neck.css';
import instruments from '../data/instruments.json';

var guitar = instruments[0];

function createMarker(marker) {
  return <div className={marker}></div>
}

function createColumns(number,chords){
  var td = [];
  for (let i=0; i<guitar.frets; i++) {
    var marker = guitar.markers.find(m => m.fret-1==i && m.string-1 == number)!==undefined?"marker":undefined;
    chords.forEach(chord => {
      var position = chord.positions.find(m => m.fret-1==i && m.string == number);
      if(position !== undefined) {
        marker = "marker chord " + (position.key==0?"root":position.key==3?"third":"fifth"); 
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
  return td
}

export default function Neck(props) {
  // console.log(props)
    const items = [];
          for (const guitarString of guitar.strings) {
              items.push(<tr className={guitarString.number==6?"last":""} key={guitarString.number}>
                <td className='key'><p>{guitarString.key}</p></td>
                {createColumns(guitarString.number, props.chords)}
              </tr>)
          }

    items.push(<tr className='numbers'><td></td>{createNumbers()}</tr>);
  
  
    return (
      <div className="instrument guitar">
        <div className="bar"></div>
        <table>
          <tbody>{items}</tbody>
        </table>
      </div>
    );
  }
  