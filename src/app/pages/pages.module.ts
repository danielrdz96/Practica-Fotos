import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './posts/post/post.component';
import { PhotosComponent } from './photos/photos.component';
import { UsersComponent } from './users/users.component';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PostsComponent,
    PostComponent,
    PhotosComponent,
    UsersComponent,
    TodosComponent
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PhotosComponent,
    UsersComponent,
    TodosComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
