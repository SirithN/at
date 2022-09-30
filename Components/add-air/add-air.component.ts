import { Component, OnInit } from '@angular/core';
import { Airline } from 'src/app/Models/airline';

@Component({
  selector: 'app-add-air',
  templateUrl: './add-air.component.html',
  styleUrls: ['./add-air.component.css']
})
export class AddAirComponent implements OnInit {
newAir:Airline={} as Airline;

  constructor() { }

  ngOnInit(): void {
  }

}
