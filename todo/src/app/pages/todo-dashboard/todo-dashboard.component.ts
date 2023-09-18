import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faTrash, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent {

  todoForm!: FormGroup;
  faTrash = faTrash;
  faPlusSquare = faPlusSquare;
  todos: any[] = [];
  todosDone: any[] = [];
  showInput: boolean = false;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.todoForm = this.formBuilder.group({
      todoInput: ['', (Validators.required)]
    })
  }

  addToList() {
    if(this.todoForm.valid) {
      const todoValue = this.todoForm.get("todoInput")?.value;
      this.todos.push(todoValue);
      this.todoForm.get("todoInput")?.reset();
      this.showInput = false;
    } else {
      
    }
    }
  
    showInputButton() {
      this.showInput = true;
    }
  
    delete(index: any) {
      this.todos.splice(index, 1)
    }
  
    done(index: any, todo: string) {
      this.todos.splice(index, 1);
      this.todosDone.push(todo)
    }

}
