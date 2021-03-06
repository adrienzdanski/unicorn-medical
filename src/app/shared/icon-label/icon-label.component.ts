import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-icon-label',
  templateUrl: './icon-label.component.html',
  styleUrls: ['./icon-label.component.scss']
})
export class IconLabelComponent {
  @Input() icon = '';
  @Input() label = '';
  @Input() size = 'fa-2x';

  constructor() {}
}
