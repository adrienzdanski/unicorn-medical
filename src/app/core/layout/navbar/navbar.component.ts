import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ae-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onLogin(event: MouseEvent):void {
    event.stopPropagation();
    alert('TODO');

  }
}
