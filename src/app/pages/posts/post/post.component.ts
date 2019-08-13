import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() postsRemoto;
  @Output() clickPost = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClickHijo() {
    this.clickPost.emit(this.postsRemoto.id);
    //console.log(this.postsRemoto.id);
  }

}
