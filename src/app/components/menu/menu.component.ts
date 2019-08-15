import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  links = [
    {
      nombre: 'home',
      path: '/home'
    },
    {
      nombre: 'about',
      path: '/about'
    },
    {
      nombre: 'contact',
      path: '/contact'
    },
    {
      nombre: 'posts',
      path: '/posts'
    },
    {
      nombre: 'photos',
      path: '/photos'
    },
    {
      nombre: 'users',
      path: '/users'
    },
    {
      nombre: 'todos',
      path: '/todos'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
