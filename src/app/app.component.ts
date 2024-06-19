import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddPeopleComponent } from './add-people/add-people.component';
import { DisplayComponent } from './display/display.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AddPeopleComponent,DisplayComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular';
  money = 300000
  percent = 0.8
  myName = "JETHRO"
  todaysDate = new Date();
  peoples:{Name:string,Age:number}[]= [{Name:"John",Age:12}]
  addNewPerson(eventData:{Name:string,Age:number}){

    this.peoples.push(eventData)
    
  }
  deletePerson(eventData:{id:number}){
    this.peoples.splice(eventData.id, 1) 

  }
  
}
