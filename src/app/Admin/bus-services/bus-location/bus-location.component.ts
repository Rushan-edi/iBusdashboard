import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bus-location',
  templateUrl: './bus-location.component.html',
  styleUrls: ['./bus-location.component.scss']
})
export class BusLocationComponent implements OnInit {

  public scrollbarOptions = { axis: "y", theme: "dark-thin" };
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor() { }
  routes = [
    '120 - Colombo - Horana',
    '120 - Colombo - Kesbewa',
    '138 - Colombo - Kottawa',
    '157 - Piliyandala - Madapatha'
  ];
  busids = [
    'B001',
    'B002',
    'B003',
    'B004',
    'B005',
    'B006',
    'B007',
    'B008',
    'B009',
    'B0010',
    'B0011',
    'B0012'
  ];

  ngOnInit() {
  }

}
