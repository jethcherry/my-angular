import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddPeopleComponent } from './add-people/add-people.component';
import { DisplayComponent } from './display/display.component';
import { CommonModule } from '@angular/common';
import { Product } from './Models/Product';
import { ShortenDescription } from './Pipes/ShortenDescription';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './Pipes/filter.pipe';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AddPeopleComponent,DisplayComponent, CommonModule,FormsModule,ShortenDescription,FilterPipe],
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
  searchTerm = ""
  products:Product[]=[
    {
      Id:1,
      Name:"Laptop",
      Description:"LENOVO LAPTOP X260,8GB RAM,256GB SSD ",
      Price:10000
    },
    {
      Id:2,
      Name:"CAMERA",
      Description:"Ordro AC5 4K HD Night Vision WiFi 12X Optical Zoom Digital Video DV Camera Camcorder, Style:Standard + Microphone + Handheld Stand(Black)",
      Price:59899
    },
    {
      Id:3,
      Name:"Gas Stove",
      Description:"Nunix Auto Ignition Glass Top Infrared Gas Stove Double Burner-2 Burner",
      Price:59899
    }
  ]
  addProduct() {
    const newProduct: Product = {
      Id: this.products.length + 5,
      Name: "Keyboard",
      Description: "Boujee Keyboard",
      Price: 10000
    };

    this.products.push(newProduct);
    this.searchTerm = "";
  }
  
  addNewPerson(eventData:{Name:string,Age:number}){

    this.peoples.push(eventData)
    
  }
  deletePerson(eventData:{id:number}){
    this.peoples.splice(eventData.id, 1) 

  }
  
}
