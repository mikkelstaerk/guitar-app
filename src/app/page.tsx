
import ChordFinder from './components/chord-finder';
import contentful from './service/contentful';

export default async function Home() {

const cfData = await contentful.getData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
    <ChordFinder data={cfData} />
      </div>
    </main>
  )
}
