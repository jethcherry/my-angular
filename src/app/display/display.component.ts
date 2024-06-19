import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {
  //peoples component can be set by the

  @Input() people:{Name:string,Age:number}[]=[]
  @Output() onDelete:EventEmitter<{id:number}> = new EventEmitter
  deletePerson(i:number){

    this.onDelete.emit({id:i})
    

  }

}
