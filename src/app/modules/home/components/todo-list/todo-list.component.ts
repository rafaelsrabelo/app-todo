import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

  public taskList: Array<TaskList> = []
  constructor() { }

  ngDoCheck(): void {
    this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked))
  }

  public setEmitTaskList(event: string) {
    this.taskList.push({task: event, checked: false})
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

  public validationInput(event: string, index: number) {

    if(!event.length) {
      const confirm = window.confirm("Tarefa vazia, deseja deletar?")

      if(confirm) {
        this.deleteItemTaskList(index)
      }
    }
  }
}
