import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  tasks=['Valor 1','Valor 2','Valor 3','Valor 4','Valor 5'];
  name ='name';
  valor='valor';

  person ={
    name: 'name',
    age:25
  }

  clickHandler(){
    alert('alert')
  }
  cHandler(event:Event){
    console.log(event);
  }
  
}
