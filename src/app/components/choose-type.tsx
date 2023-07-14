'use client'
import {useState} from 'react';

function createTypes(): any[] {

  var sca = [];
  sca.push(<option value="chord" key="chord">Chord</option>)
  sca.push(<option value="triad" key="triad">Triad</option>)
  sca.push(<option value="barchord" key="barchord">Bar chord</option>)

    return sca;
  }

export default function ChooseType({callback}) {
  
    const [selected, setSelected] = useState();

    const handleChange = event => {
        callback(event.target.value);
        setSelected(event.target.value)
      };
    
    return (
      <div>
      <select  value={selected} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option key="none" value="">Choose chord type</option>
        {createTypes()}
        </select>
      </div>
    )
  }
  