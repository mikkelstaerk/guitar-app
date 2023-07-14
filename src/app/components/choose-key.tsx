'use client'

// import keys from '../data/keys.json';
import {useState} from 'react';

function createScale(keys) {

    const ke:Array<any> = [];
    keys.forEach(element => {
      ke.push(<option value={element.name} key={element.name}>{element.name}</option>)
    });
    return ke;
  }

export default function ChooseKey({keys, callback}) {
  
    const [selected, setSelected] = useState();

    const handleChange = (event:any) => {
        callback(event.target.value);
        setSelected(event.target.value)
      };
    

    return (
      <div>
      <select  value={selected} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <option key="none" value="">All</option>
      {createScale(keys)}
      </select>
      </div>
    )
  }
  