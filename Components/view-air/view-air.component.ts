import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Airline } from 'src/app/Models/airline';
import { AirlineService } from 'src/app/Services/airline.service';

@Component({
  selector: 'app-view-air',
  templateUrl: './view-air.component.html',
  styleUrls: ['./view-air.component.css']
})
export class ViewAirComponent implements OnInit {
  airlineId: any;
  selected: Airline = {} as Airline
  constructor(private airService: AirlineService, private activatedRoute:
    ActivatedRoute) { }

  ngOnInit(): void {
    //get the parameters from the url using paraMap function of the activatedRoute.
    this.activatedRoute.paramMap.subscribe((map) => {
      this.airlineId = map.get("id");
      if (this.airlineId != null) 
        this.airService.getAirline(parseInt(this.airlineId)).subscribe((data) => {
          this.selected = data as Airline;
        })
      
    })
  }
}

