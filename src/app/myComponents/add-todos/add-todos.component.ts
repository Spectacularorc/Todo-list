import { Component,Output,EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-todos',
  standalone: false,
  
  templateUrl: './add-todos.component.html',
  styleUrl: './add-todos.component.css'
})
export class AddTodosComponent {
  title!: string;
  desc!: string;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  onSubmit(){
    const todo ={
      sno: 8,
      title: this.title, 
      desc: this.desc, 
      active: true
    }
    this.todoAdd.emit(todo);
  }

}
