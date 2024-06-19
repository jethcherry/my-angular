import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-add-people',
  standalone: true,
  imports: [ FormsModule,CommonModule],
  templateUrl: './add-people.component.html',
  styleUrl: './add-people.component.css'
})
export class AddPeopleComponent {
  name=''
  age=''
  @Output() onAdd:EventEmitter<{Name:string,Age:number}>= new EventEmitter
  add(){
    this.onAdd.emit({Name:this.name,Age:+this.age})

  }

}
 