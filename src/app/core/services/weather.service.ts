import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {IWeather, IWeatherRaw} from '../models/weather';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private static mapWeatherData(data: IWeatherRaw[]): IWeather[] {
    const weatherData = [];
    for (const weather of data) {
      weatherData.push({
        date: weather.Datum,
        time: weather.Zeit,
        tempA: weather['Temp. A.'],
        temp3: weather['Temp. 3'],
        humidity: weather['Feuchte A.'],
        airPressure: weather.Luftdruck,
        rain: weather.Regen,
        wind: weather.Wind,
        direction: weather.Richtung,
        brightness: weather.Helligkeit
      });
    }
    return weatherData;
  }

  constructor(private http: HttpClient) {}

  getWeatherData(): Observable<IWeather[]> {
    return this.http.get('assets/data/weatherdata.json').pipe(map(WeatherService.mapWeatherData));
  }

  getRandomWeatherData(count: number): Observable<IWeather[]> {
    return this.getWeatherData().pipe(
      map( weatherDataArray => {
        const shuffledArray = this.shuffle<IWeather>(weatherDataArray);
        return shuffledArray.slice(0, count);
      }));
  }

  /** Adapted from this stackoverflow answer:
   * https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
   */
  private shuffle<T>(arrayToShuffle: T[]): T[] {
    let currentIndex = arrayToShuffle.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = arrayToShuffle[currentIndex];
      arrayToShuffle[currentIndex] = arrayToShuffle[randomIndex];
      arrayToShuffle[randomIndex] = temporaryValue;
    }

    return arrayToShuffle;
  }
}
