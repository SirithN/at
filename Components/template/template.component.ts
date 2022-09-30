import { Component, OnInit } from '@angular/core';
import { Airline } from 'src/app/Models/airline';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})

export class TemplateComponent implements OnInit {
airObj:Airline={} as Airline;
  constructor() { }

  ngOnInit(): void {
    this.airObj={
      airlineId:0,name:"",destination:"",image:"",fare:0
    }
  }
  onSubmit(){
    alert("Validation is successfull");
    console.log(JSON.stringify(this.airObj));
  }

}
