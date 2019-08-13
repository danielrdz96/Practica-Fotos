import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postsRemoto: any ;

  postsLocal = [
    {
      titulo: 'Titulo 1',
      cuerpo: 'Los alumnos y alumnas 9C son mas inteligentes que los de 9B Y 9A'
    },
    {
      titulo: 'Titulo 2',
      cuerpo: 'Los alumnos y alumnas 9C son mas inteligentes que los de 9B Y 9A'
    },
    {
      titulo: 'Titulo 3',
      cuerpo: 'Los alumnos y alumnas 9C son mas inteligentes que los de 9B Y 9A'
    }
  ];
  constructor(private http: HttpClient, private dataService: DataService) { }

  ngOnInit() {

    this.postsRemoto = this.dataService.getPosts();

    //this.dataService.getPosts()
    //.subscribe((posts: any[]) => {
    //console.log(posts);
    //this.postsRemoto = posts;
    //});
  }

  onClickPadre(id) {
    console.log(id);
  }

}
