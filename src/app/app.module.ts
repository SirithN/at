import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CalcComponent } from './Components/calc/calc.component';
import { MasterComponent } from './Components/master/master.component';
import { SearchPipe } from './Pipes/search.pipe';
import { AirDetailsComponent } from './Components/air-details/air-details.component';
import { AddDetailsComponent } from './Components/add-details/add-details.component';
import { AirMgrComponent } from './Components/air-mgr/air-mgr.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { SpinnerComponent } from './Components/spinner/spinner.component';
import { ViewAirComponent } from './Components/view-air/view-air.component';
import { EditAirComponent } from './Components/edit-air/edit-air.component';
import { AddAirComponent } from './Components/add-air/add-air.component';
import { HomeComponent } from './Components/home/home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes=[
  {path:'',redirectTo:"Home", pathMatch:'full'},
  {path:'Home', component:HomeComponent},
  {path:'Airline/All', component:AirMgrComponent},
  {path:'Airline/Add', component:AddAirComponent},
  {path:'Airline/edit/:id', component:EditAirComponent},
  {path:'Airline/view/:id', component:ViewAirComponent},
{path:'Calc',component:CalcComponent},
{path:'Master',component:MasterComponent}


]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CalcComponent,
    MasterComponent,
    SearchPipe,
    AirDetailsComponent,
    AddDetailsComponent,
    AirMgrComponent,
    NavBarComponent,
    SpinnerComponent,
    ViewAirComponent,
    EditAirComponent,
    AddAirComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }