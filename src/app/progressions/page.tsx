import Link from 'next/link';
import contentful from '../service/contentful';
import moment from 'moment';

export default async function Page() {

  const rows = [];
  const proData = await contentful.getProgressions();
  const progressions:Progression[] = proData.progressionCollection.items as Progression[];

  progressions.forEach(element => {

    const chords=[];
    element.chordsCollection.items.forEach(cho=> {
      chords.push(<span> {cho.key.name}{cho.scale.short=='minor'?"m":""} </span>);
    });

    const date = moment(element.date);   

    rows.push(
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
             <Link href={"/progressions/"+encodeURIComponent(element.title)}>{element.title}</Link> 
          </th>
          <td className="px-6 py-4">
              {element.key.key.name}
          </td>
          <td className="px-6 py-4">
              {element.key.scale.name}
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
