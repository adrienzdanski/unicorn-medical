export interface IWeatherRaw {
  'Datum': string;
  'Zeit': string;
  'Temp. A.': number;
  'Temp. 3': number;
  'Feuchte A.': number;
  'Luftdruck': number;
  'Regen': number;
  'Wind': number;
  'Richtung': number;
  'Helligkeit': number;
}

export interface IWeather {
  date: string;
  time: string;
  tempA: number;
  temp3: number;
  humidity: number;
  airPressure: number;
  rain: number;
  wind: number;
  direction: number;
  brightness: number;
}
