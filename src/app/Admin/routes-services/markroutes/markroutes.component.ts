import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-markroutes',
  templateUrl: './markroutes.component.html',
  styleUrls: ['./markroutes.component.scss']
})
export class MarkroutesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  routes = [
    '120 - Colombo - Horana',
    '120 - Colombo - Kesbewa',
    '138 - Colombo - Kottawa',
    '157 - Piliyandala - Madapatha'
  ];
}
