import { Component, OnInit } from '@angular/core';
import { Airline } from 'src/app/Models/airline';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

airList :Airline[]=[];
selectedair: Airline={} as Airline
searchValue:string=""
  constructor() { }

  ngOnInit(): void {
    //This is the place to initialise the data
    this.airList.push({airlineId:1,name:"Indigo",destination:"Chennai",fare:5000,image:'./assets/images/1.jfif'})
    this.airList.push({airlineId:2,name:"Air Asia",destination:"Hyderadbad",fare:6000,image:'./assets/images/2.jfif'})
    this.airList.push({airlineId:3,name:"Tata Airlines",destination:"Mumbai",fare:2000,image:'./assets/images/3.jfif'})
    this.airList.push({airlineId:4,name:"KingFisher",destination:"Salem",fare:7000,image:'./assets/images/4.jfif'})
    this.airList.push({airlineId:5,name:"Vistara",destination:"Mysore",fare:4000,image:'./assets/images/5.jpg'})
    this.airList.push({airlineId:6,name:"Emirates",destination:"Pune",fare:3500,image:'./assets/images/6.jfif'})
    this.airList.push({airlineId:7,name:"Qantas",destination:"Dubai",fare:9000,image:'./assets/images/7.jfif'})
    this.airList.push({airlineId:8,name:"Southwest",destination:"Gulbarga",fare:3000,image:'./assets/images/8.jfif'})
  }

onDetailClick(air:Airline)
{
  this.selectedair = air;
}

onAddNew(air:Airline)
  {
    debugger;
    this.airList.push(air);
    alert("Airline added to database");
  }
}
