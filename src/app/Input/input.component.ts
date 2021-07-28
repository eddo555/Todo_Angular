import { Component, OnInit } from "@angular/core";
import {Todo} from './todo'

@Component({
    selector: "inputComponent",
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css']

})
export class InputComponent implements OnInit {
    pageTitle: string = "Todo app";
    pageInstruction: string ="Enter a task"
    todoList: Array<Todo> = [];

    private _titleTodo:string = "";
    get titleTodo(): string {
        return this._titleTodo;
    }
    set titleTodo(value:string) {
        this._titleTodo = value;
    }

    private _textTodo:string ="";
    get textTodo():string {
        return this._textTodo;
    }
    set textTodo(value:string) {
        this._textTodo = value;
    }

    ngOnInit():void {
        //initialise on start
    }

    OnClickedSubmit():void{
       // console.log("title => ",this.titleTodo, "text => ",this.textTodo)
        let newTodo = new Todo();
        newTodo.titleTodo = this.titleTodo;
        newTodo.textTodo = this.textTodo;
        this.todoList.push(newTodo);
        this.titleTodo="";
        this.textTodo="";
    }
    
    //change status on completed task
    OnUpdateStatus(todo: any) {
        //console.log("clicked", todo);
        let index = this.todoList.indexOf(todo); //indexof returns index of first match
        todo.completed = !todo.completed;
        this.todoList[index] = todo;
       
    }
}
