import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routedirection',
  templateUrl: './routedirection.component.html',
  styleUrls: ['./routedirection.component.scss']
})
export class RoutedirectionComponent implements OnInit {

  constructor() { }
  public scrollbarOptions = { axis: "y", theme: "dark-thin" };
  lat: number = 51.678418;
  lng: number = 7.809007;
  routes = [
    '120 - Colombo - Horana',
    '120 - Colombo - Kesbewa',
    '138 - Colombo - Kottawa',
    '157 - Piliyandala - Madapatha'
  ];
  ngOnInit() {
  }

}
