import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  Users: any;

  constructor(private http: HttpClient, private dataServicio: DataService) { }

  ngOnInit() {
    this.Users = this.dataServicio.getUsers();
  }

}
