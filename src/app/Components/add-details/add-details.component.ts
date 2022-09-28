import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Airline } from 'src/app/Models/airline';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css']
})
export class AddDetailsComponent implements OnInit {
  
  @Output() emitter:EventEmitter<Airline> = new EventEmitter<Airline>()
  newair:Airline={} as Airline;//represents the Emp to return to the Master
  url:any;
  constructor() { }
  ngOnInit():void{
   }
  
   OnChange(event:any)
   {
    if(event.target.files && event.target.files.length )
    {
      var reader=new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload=(_ev)=>{
        this.url=reader.result;
      }
    }else{
      alert("No file has been added");
    }
   }
  onAddClick(){
    debugger;
  this.emitter.emit(this.newair);//emit takes the arg of which obj which u r returning
   }
  
  }
  
  