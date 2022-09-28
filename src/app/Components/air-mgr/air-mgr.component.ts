import { Component, OnInit } from '@angular/core';
import { Airline } from 'src/app/Models/airline';
import { AirlineService } from 'src/app/Services/airline.service';

@Component({
  selector: 'app-air-mgr',
  templateUrl: './air-mgr.component.html',
  styleUrls: ['./air-mgr.component.css']
})
export class AirMgrComponent implements OnInit {
airList:Airline[]=[];
  constructor(private airService:AirlineService) { }

  ngOnInit(): void {
    this.getAllAirlinesFromServer();
  }

  getAllAirlinesFromServer(){
    this.airService.getAllAirline().subscribe((data:Airline[])=>{
      this.airList=data
    });
  }

}
