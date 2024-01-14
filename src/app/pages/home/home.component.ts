import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ConstantPool } from '@angular/compiler';

import { task } from './../../models/task.model';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tasks= signal<task[]>([
    {
      id: Date.now(),
      title: 'Titulo Objeto',
      completed: false
    },
    {
      id: Date.now(),
      title: 'Primer Objeto',
      completed: false
    }
  ]);

  addTask(title:string){
    const newTask={
      id: Date.now(),
      title,
      completed:false,
    }
  }

  changeHandler(event:Event){
    const input=event.target as HTMLInputElement;
    const newTask= input.value;
    this.tasks.update((tasks) => [...tasks,newTask]);
  }

  deletetask(index: number){
    this.tasks.update((tasks)=> tasks.filter((tasks,position)=> position !== index));
  }
}
