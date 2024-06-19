import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  people: { Name: string, Age: number }[] = [];
  name = '';
  age = '5';
  day ="Sunday"
  showredp = true

  add() {
    this.people.push({ Name: this.name, Age: +this.age });
    console.log(this.people);
  }
  deletePerson(i:number){
    this.people.splice(i,1);
    console.log(this.people);
    this.showredp = !this.showredp;

  }
}
 