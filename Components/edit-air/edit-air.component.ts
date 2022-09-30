import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Airline } from 'src/app/Models/airline';
import { AirlineService } from 'src/app/Services/airline.service';

@Component({
  selector: 'app-edit-air',
  templateUrl: './edit-air.component.html',
  styleUrls: ['./edit-air.component.css']
})
export class EditAirComponent implements OnInit {
foundair:Airline={} as Airline;
airlineId:any;

  constructor(private airService :AirlineService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((map)=>{
      this.airlineId=map.get("id");
      this.airService.getAirline(parseInt(this.airlineId)).subscribe((data:Airline)=>{
        this.foundair=data;
      })
    })
  }
onSubmit(){
  this.airService.updateAirline(this.foundair).subscribe((data)=>{
    alert(data);
  })
}
}
