import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public taskList: Array<TaskList> = [
    {task: "Test", checked: true},
    {task: "Test 2", checked: false}
  ]
  constructor() { }

  ngOnInit(): void {
  }

  public deleteItemTaskList(event: number) {
    const confirm = window.confirm("Você tem certeza?")
    if(confirm) {
      this.taskList.splice(event, 1)
    }
  }

  public deleteAllTaskList(){
    const confirm = window.confirm("Você tem certeza?")
    if(confirm) {
      this.taskList = [];
    }
  }
}
