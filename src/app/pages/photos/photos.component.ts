import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  Photos: any;

  constructor(private http: HttpClient, private dataServicio: DataService) { }

  ngOnInit() {
    this.Photos = this.dataServicio.getPhotos();
  }

}
