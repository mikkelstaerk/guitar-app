

import Link from 'next/link';
import progressions from "../data/progressions.json";

export default function Page() {

  const rows = [];

  progressions.forEach(element => {

    const chords=[];
    element.chords.forEach(cho=> {
      chords.push(<span> {cho.key}{cho.scale=='minor'?"m":""} </span>);
    });

    rows.push(
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
             <Link href={"/progressions/"+element.date}>{element.date}</Link> 
          </th>
          <td className="px-6 py-4">
              {element.chords[0]?.key}
          </td>
          <td className="px-6 py-4">
              {element.chords[0]?.scale}
          </td>
          <td className="px-6 py-4">
              {chords}
          </td>
      </tr>);
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
   
   
<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Date
                </th>
                <th scope="col" className="px-6 py-3">
                   Key
                </th>
                <th scope="col" className="px-6 py-3">
                    Scale
                </th>
                <th scope="col" className="px-6 py-3">
                    Chords
                </th>
            </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
    </table>
</div>

    </main>
  )
}
