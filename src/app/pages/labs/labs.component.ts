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
  tasks=['Amorcito','Orion','Smoke','Chirran','Jere','Niño','gata','michin','lora','tomisito'];
  name ='Daniel';
  esposa='MI chilanguito';

  person ={
    name: 'Daniel',
    age:25
  }

  clickHandler(){
    alert('Hola')
  }
}
