import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Airline } from '../Models/airline';


@Injectable({
  providedIn: 'root'
})
export class AirlineService {
url:string="http://localhost:18926/Airline/All";

//Inject the injectible objects into a component,class,service,using constructor.
  constructor(private httpClient: HttpClient) { 
    //Here httpClient is a singleton object that is injected by angular when u consume  the Airline service module
  }
/*
    http://localhost:18926/Airline/All=> Get All

  http://localhost:18926/Airline/{id} => for getting singleton  object
  
  http://localhost:18926/Airline    => for adding and updating
  
 http://localhost:18926/Airline/{id}  =>
  
   */


//We will create  functions that can be called by all our components of this application
public getAllAirline():Observable<Airline[]>
{
  return this.httpClient.get<Airline[]>(this.url);
}
public getAirline(id:number):Observable<Airline>
{
  const tempUrl='http://localhost:18926/Airline/' +id;
  return this.httpClient.get<Airline>(tempUrl);
}

public updateAirline(air:Airline): Observable<string>
{
  const tempUrl="http://localhost:18926/Airline";
  return this.httpClient.put<string>(tempUrl,air);
}
public addAirline(air:Airline): Observable<string>{
  const tempUrl="http://localhost:18926/Airline/";
return this.httpClient.post<string>(tempUrl,air);
}
}