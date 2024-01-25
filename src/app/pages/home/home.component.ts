import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ConstantPool } from '@angular/compiler';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

import { task } from './../../models/task.model';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
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

  newTaskCTRL = new FormControl('',{
    nonNullable:true,
    validators: [
      Validators.required,
    ]
  });

  addTask(title:string){
    const newTask={
      id: Date.now(),
      title,
      completed:false,
    };
    this.tasks.update((tasks) => [...tasks,newTask]);

  }
  updateTask(index:number){
    this.tasks.update((tasks)=> {
      return tasks.map((task , position) => {
        if(position === index){
          return{
            ...task,
            completed: !task.completed
          }
        }
        return task;
        })
      })
    }


  changeHandler(){
    if(this.newTaskCTRL.valid){
      const value=this.newTaskCTRL.value.trim();
      if( value !== ''){
        this.addTask(value);
        this.newTaskCTRL.setValue('');
      }
    }
  }

  deletetask(index: number){
    this.tasks.update((tasks)=> tasks.filter((tasks,position)=> position !== index));
  }
}
