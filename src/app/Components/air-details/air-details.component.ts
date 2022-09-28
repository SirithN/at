import { Component, Input, OnInit } from '@angular/core';
import { Airline } from 'src/app/Models/airline';

@Component({
  selector: 'app-air-details',
  templateUrl: './air-details.component.html',
  styleUrls: ['./air-details.component.css']
})
export class AirDetailsComponent implements OnInit {
@Input() airDetails:Airline={} as Airline
  constructor() { }

  ngOnInit(): void {
  }

}
