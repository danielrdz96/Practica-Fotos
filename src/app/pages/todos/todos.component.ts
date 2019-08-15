import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  Todos: any;

  constructor(private http: HttpClient, private dataServicio: DataService) { }

  ngOnInit() {
    this.Todos = this.dataServicio.getTodos();
  }

}
