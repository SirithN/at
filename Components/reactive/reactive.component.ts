import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  title : string = "Reactive Forms Demo"
  airForm : FormGroup = new FormGroup({
     id : new FormControl("",[Validators.required,Validators.min(1001),Validators.max(2000)]),
    name : new FormControl("",[Validators.required,Validators.minLength(5),Validators.maxLength(6)]),
    destination : new FormControl("",[Validators.required,Validators.email])
  })
  constructor() { }
  get id(){
    return this.airForm.get("id")
  }
  get name(){
    return this.airForm.get("name")
  }
  get destination(){
    return this.airForm.get("destination")
  }
  ngOnInit(): void {
  }
  onSubmit(){
    alert("Employee is validated");
    console.log(this.airForm.value)
  }



}

