
interface Instrument {
    title:string;
    frets:number;
    strings:Array<String>;
    markers:Array<Marker>;
  }

  interface String {
    key:string;
    number:number;
  }

  interface Marker {
    fret:number;
    string:number;
  }
