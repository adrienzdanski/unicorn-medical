import {Component, Input, OnInit} from '@angular/core';
import {ISearchResultItem} from '../../core/models/search';
import {Router} from '@angular/router';

export const mock: ISearchResultItem[] = [
  {
    'tags': [
      'python',
      'pandas',
      'imputation'
    ],
    'owner': {
      'reputation': 11,
      'user_id': 13797948,
      'user_type': 'registered',
      'profile_image': 'https://lh5.googleusercontent.com/-nLRLgkzq7kE/AAAAAAAAAAI/AAAAAAAACKc/RWieacS1_54/photo.jpg?sz=128',
      'display_name': 'dachu darshan',
      'link': 'https://stackoverflow.com/users/13797948/dachu-darshan'
    },
    'is_answered': false,
    'view_count': 20,
    'answer_count': 0,
    'score': -3,
    'last_activity_date': 1614768362,
    'creation_date': 1614767592,
    'last_edit_date': 1614767694,
    'question_id': 66455250,
    'content_license': 'CC BY-SA 4.0',
    'link': 'https://stackoverflow.com/questions/66455250/missing-values-in-weather-data-for-more-than-4-days',
    'title': 'Missing values in weather data for more than 4 days'
  },
  {
    'tags': [
      'javascript',
      'openweathermap'
    ],
    'owner': {
      'reputation': 1,
      'user_id': 14165198,
      'user_type': 'registered',
      'profile_image': 'https://lh6.googleusercontent.com/-4sWbrDV-mSA/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucm4kABj2PyjLZrYrNILJa33hxH8EA/photo.jpg?sz=128',
      'display_name': 'Michael Young',
      'link': 'https://stackoverflow.com/users/14165198/michael-young'
    },
    'is_answered': false,
    'view_count': 14,
    'answer_count': 0,
    'score': 0,
    'last_activity_date': 1614711263,
    'creation_date': 1614711263,
    'question_id': 66445428,
    'content_license': 'CC BY-SA 4.0',
    'link': 'https://stackoverflow.com/questions/66445428/weather-app-how-would-you-change-background-colour-to-match-weather-conditions',
    'title': 'Weather App - How would you change background colour to match weather conditions and temperature?'
  },
  {
    'tags': [
      'r',
      'machine-learning',
      'time-series',
      'data-analysis',
      'data-manipulation'
    ],
    'owner': {
      'reputation': 55,
      'user_id': 10900142,
      'user_type': 'registered',
      'profile_image': 'https://www.gravatar.com/avatar/0b3a06c60b127acbc706086d6604adcb?s=128&d=identicon&r=PG&f=1',
      'display_name': 'R.A',
      'link': 'https://stackoverflow.com/users/10900142/r-a'
    },
    'is_answered': false,
    'view_count': 89,
    'answer_count': 2,
    'score': 0,
    'last_activity_date': 1614701947,
    'creation_date': 1559282393,
    'last_edit_date': 1559285269,
    'question_id': 56389429,
    'content_license': 'CC BY-SA 4.0',
    'link': 'https://stackoverflow.com/questions/56389429/how-to-analyse-time-series-which-contains-multiple-sources-e-g-weather-data-ti',
    'title': 'How to analyse time series which contains multiple sources (e.g. weather data time series of multiple weather stations)'
  },
  {
    'tags': [
      'javascript',
      'php',
      'jquery',
      'ajax',
      'leaflet'
    ],
    'owner': {
      'reputation': 15,
      'user_id': 15234362,
      'user_type': 'registered',
      'profile_image': 'https://www.gravatar.com/avatar/bbaa59f07d4ad026dc50ff380dffd1f6?s=128&d=identicon&r=PG&f=1',
      'display_name': 'price88',
      'link': 'https://stackoverflow.com/users/15234362/price88'
    },
    'is_answered': true,
    'view_count': 32,
    'accepted_answer_id': 66442676,
    'answer_count': 1,
    'score': 1,
    'last_activity_date': 1614700434,
    'creation_date': 1614699399,
    'question_id': 66442408,
    'content_license': 'CC BY-SA 4.0',
    'link': 'https://stackoverflow.com/questions/66442408/dynamically-inserting-latitude-longitude-from-array-to-weather-api-call-in-php',
    'title': 'Dynamically inserting latitude/longitude from array to weather API call in PHP'
  },
  {
    'tags': [
      'javascript'
    ],
    'owner': {
      'reputation': 13,
      'user_id': 13856202,
      'user_type': 'registered',
      'profile_image': 'https://www.gravatar.com/avatar/762777fad09c04d75b6d65e6749836f5?s=128&d=identicon&r=PG&f=1',
      'display_name': 'Bardlock',
      'link': 'https://stackoverflow.com/users/13856202/bardlock'
    },
    'is_answered': false,
    'view_count': 39,
    'answer_count': 1,
    'score': 1,
    'last_activity_date': 1614635150,
    'creation_date': 1614630954,
    'last_edit_date': 1614633059,
    'question_id': 66429274,
    'content_license': 'CC BY-SA 4.0',
    'link': 'https://stackoverflow.com/questions/66429274/how-do-i-assign-data-from-a-weather-api-object-to-individual-html-elements-using',
    'title': 'How do I assign data from a weather api object to individual html elements using javascript?'
  }
];
@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.scss']
})
export class DashboardListComponent implements OnInit {
  @Input() items: ISearchResultItem[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.items = mock;
    console.log('TODO: remove mock');
  }

  onClick(event: MouseEvent, item: ISearchResultItem): void {
    event.stopPropagation();
    window.open(item.link);
  }
}
